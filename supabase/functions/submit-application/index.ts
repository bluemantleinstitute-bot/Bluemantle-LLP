import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbxmOYNU0Gn-hOFFZ5s5g5pz5p3pGNiD_SHthxvXFO60PBdAbEi-MZ693M7cI1736519/exec";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Submit application function called');

    // Parse request body
    const { name, mobile, email, address, qualification } = await req.json();

    // Server-side validation
    if (!name || !mobile || !email || !address || !qualification) {
      console.error('Validation failed: Missing required fields');
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate name (letters and spaces only)
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      console.error('Validation failed: Invalid name format');
      return new Response(
        JSON.stringify({ error: 'Name must contain only letters and spaces' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate mobile (10 digits)
    if (!/^[0-9]{10}$/.test(mobile)) {
      console.error('Validation failed: Invalid mobile number');
      return new Response(
        JSON.stringify({ error: 'Mobile number must be exactly 10 digits' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.error('Validation failed: Invalid email format');
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate address (max 50 words)
    const addressWordCount = address.trim().split(/\s+/).length;
    if (addressWordCount > 50) {
      console.error('Validation failed: Address exceeds 50 words');
      return new Response(
        JSON.stringify({ error: 'Address must not exceed 50 words' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate qualification
    const validQualifications = ['High School', 'UG', 'PG', 'Others'];
    if (!validQualifications.includes(qualification)) {
      console.error('Validation failed: Invalid qualification');
      return new Response(
        JSON.stringify({ error: 'Invalid qualification selected' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const formData = new URLSearchParams({
      name,
      mobile,
      email,
      address,
      qualification,
      timestamp
    });

    console.log('Sending data to Google Sheets:', { name, mobile, email, address, qualification, timestamp });

    // Send to Google Sheets
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Sheets submission failed:', response.status, errorText);
      throw new Error(`Failed to submit to Google Sheets: ${response.status}`);
    }

    const result = await response.text();
    console.log('Google Sheets response:', result);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Application submitted successfully',
        timestamp 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in submit-application function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        details: 'Failed to process application submission'
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
