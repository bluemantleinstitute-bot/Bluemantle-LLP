import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GradientButton from "@/components/GradientButton";
import { Floating3DElements } from "@/components/Floating3DElements";
import { Phone, Mail, MapPin, Target, Eye, Users, CheckCircle, Linkedin, MessageSquare } from "lucide-react";
import TeamMemberCard from "@/components/TeamMemberCard";
import logo from "@/assets/logo.png";
import { SEO } from "@/components/SEO";
const About = () => {
  // ─── TEAM MEMBERS ───────────────────────────────────────────────
  // imageScale  → zoom level (1.0 = no zoom, 1.2 = 20% zoom in)
  // imagePosition → CSS object-position (e.g. 'center top', '50% 30%')
  const teamMembers = [{
    name: "PRASANTH PHILIP",
    role: "FOUNDER & DIRECTOR",
    bio: "Provides Overall Leadership  and Strategic Direction for the Company",
    image: "/1.jpeg",
    imageScale: .8,           // ← change this number to zoom in/out
    imagePosition: "center top", // ← change to reposition (e.g. '50% 30%')
    linkedin: "https://www.linkedin.com/in/prasanthphilip?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAkRL2YBZQeU35ywE0b5Oxcw4_wzkOu9v50&lipi=urn%3Ali%3Apage%3Acompanies_company_people_index%3B35672677-7c87-4726-b3b7-f8bc156e5cf1"
  }, {
    name: "SONIYA PRASANTH",
    role: "DIRECTOR AND GENERAL MANAGER",
    bio: "Oversees Daily Operations and Ensures Smooth,Efficient Management",
    image: "/2.png",
    imageScale: 1.05,           // ← change this number to zoom in/out
    imagePosition: "center top", // ← change to reposition
    linkedin: ""
  }, {
    name: "VYSHAKH G",
    role: "HEAD OF DERIVATIVES AND TECHNICAL RESEARCH",
    bio: "NISM(SEBI)Certified with 8+ years of Experince In Derivatives Market",
    image: "/3.jpeg",
    imageScale: 1.20,           // ← change this number to zoom in/out
    imagePosition: "center top", // ← change to reposition
    linkedin: "https://www.linkedin.com/in/vyshakh-g-varma-9570b7217?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADanX5MBKZmriayO6X1NNt12bz2OdJVwep8&lipi=urn%3Ali%3Apage%3Acompanies_company_people_index%3B35672677-7c87-4726-b3b7-f8bc156e5cf1"
  }, {
    name: "AJAL BENNY",
    role: "MARKET RESEARCH ANALYST/ MENTOR",
    bio: "Market Research Analyst and Mentor specializing in high-conviction insights, data-driven trend analysis, and strategic opportunity identification across financial markets.",
    image: "/4.jpeg",
    imageScale: 1.20,           // ← change this number to zoom in/out
    imagePosition: "center top", // ← change to reposition
    linkedin: "https://www.linkedin.com/in/ajal-benny-1803692a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }, {
    name: "SHALU SHUJITH",
    role: "MARKET RESEARCH ANALYST",
    bio: "Market Research Analyst specializing in price action analysis, market behavior insights, and identifying high-probability opportunities across financial markets",
    image: "/5.png",
    imageScale: 1.05,           // ← change this number to zoom in/out
    imagePosition: "center top", // ← change to reposition
    linkedin: "https://www.linkedin.com/in/shalu-mathew-bab14039b/"
  }, {
    name: "JOEL K GEORGE",
    role: "TRADING ANALYST",
    bio: "Trading Analyst focused on price action, market trends, and identifying high-probability trade opportunities with a data-driven approach",
    image: "/6.jpeg",
    imageScale: 1.10,           // ← change this number to zoom in/out
    imagePosition: "center top", // ← change to reposition
    linkedin: "https://www.linkedin.com/in/joyal-k-george-375056320?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFEqP4kBjue4uvwa3r4jpeq0hO4TptSv8ZI&lipi=urn%3Ali%3Apage%3Acompanies_company_people_index%3B35672677-7c87-4726-b3b7-f8bc156e5cf1"
  }, {
    name: "VISHNU PRAKASH",
    role: "AI ENGINEER/Software developer",
    bio: "AI Engineer and Software Developer specializing in developing AI-driven trading tools and innovative software solutions to enhance trading performance and efficiency.",
    image: "/7.png",
    imageScale: 1.50,
    imagePosition: "center top",
    linkedin: "https://www.linkedin.com/in/vishnu-prakash-e-73120330a/"
  }];
  return <div className="min-h-screen pt-20">
    <SEO
      title="About Bluemantle | Expert Trading Mentorship"
      description="Learn about Bluemantle LLP, the leading trading academy in Kerala. Our mission is to empower traders with advanced strategies and institutional-grade market knowledge."
      canonical="https://bluemantletechnology.com/about"
    />
    {/* Hero */}
    <section className="py-20 bg-gradient-to-b from-background via-purple-dark/10 to-card/50 relative overflow-hidden">
      {/* Background Pulsing Logo */}
      <div className="absolute right-10 top-5 opacity-80 z-0 hidden lg:block">
        <motion.img
          src={logo}
          alt="Bluemantle Logo"
          className="w-[350px] h-[350px] object-contain"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
            <span className="text-purple-400 text-xs sm:text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Central Govt Approved & Skill India Aligned
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
            Pioneering the <span className="text-gradient-purple">Future of Trading in Kerala</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Empowering traders with structured, practical education for financial markets
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 relative overflow-hidden">
      <Floating3DElements />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
            <Card className="p-8 bg-gradient-to-br from-purple/10 via-card to-muted border-2 border-purple/50 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple/20 rounded-full blur-2xl" />
              <Eye className="w-12 h-12 text-purple mb-4 glow-purple relative z-10" />
              <h2 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                To empower everyone to become confident and independent financial market professionals equipped with real-world trading skills and knowledge.
              </p>
            </Card>
          </motion.div>

          <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
            <Card className="p-8 bg-gradient-to-br from-secondary/10 via-card to-muted border-2 border-secondary/50 h-full relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <Target className="w-12 h-12 text-secondary mb-4 glow-cyan relative z-10" />
              <h2 className="text-3xl font-bold mb-4 relative z-10">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                Provide structured training with real-world market relevance, live mentorship,
                and hands-on learning to build successful trading careers.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>

    {/* About Content */}
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-background z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm">
              <span className="text-purple-400 text-sm font-semibold tracking-wide uppercase">
                Premier Trading Institute
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Redefining Financial <br />
              <span className="text-gradient-purple">Market Education in Kerala</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Bluemantle LLP stands as a beacon of professional trading education in Kerala.
              Based in Thachampara, Palakkad, we are a <strong>government-approved institute</strong> aligned with the <strong>Skill India ecosystem</strong>.
              We don't just teach theory; we forge independent traders through rigorous, <span className="text-white font-medium">live market mentorship</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Aligned with national skill development initiatives, we help students gain real-world financial market skills specializing in both <span className="text-cyan-400 font-medium">Indian Stock Market</span> & <span className="text-cyan-400 font-medium">Forex Trading</span>.
              Our curriculum is designed by <span className="text-white font-medium">NISM Certified Professionals</span> to bridge the gap between academic knowledge and real-world application.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border/50">
                <CheckCircle className="text-purple-400 w-5 h-5" />
                <span className="font-medium">NISM Certified Mentors</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border/50">
                <CheckCircle className="text-cyan-400 w-5 h-5" />
                <span className="font-medium">Live Market Sessions</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="p-6 bg-gradient-to-br from-card to-muted border-none hover:bg-card/80 transition-colors">
              <h3 className="text-4xl font-bold text-gradient-cyan mb-2">1500+</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Students Trained</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-card to-muted border-none hover:bg-card/80 transition-colors">
              <h3 className="text-4xl font-bold text-gradient-purple mb-2">8+</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years Experience</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-card to-muted border-none hover:bg-card/80 transition-colors col-span-2">
              <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Placement Assistance</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
          <Users className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient-cyan">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground">NISM certified mentors with years of trading experience</p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 px-2 sm:px-0">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-center w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                  linkedin={member.linkedin}
                  imageScale={member.imageScale}
                  imagePosition={member.imagePosition}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="py-20 bg-gradient-to-b from-transparent to-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground">We're here to help you start your trading journey</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:+917034540404" className="text-muted-foreground hover:text-secondary transition-colors block">+91 70345 40404</a>
                  <a href="tel:+914924244022" className="text-muted-foreground hover:text-secondary transition-colors block">+91 4924 244022</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:Info@bluemantletechnology.com" className="text-muted-foreground hover:text-secondary transition-colors">
                    Info@bluemantletechnology.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-muted-foreground">
                    Bluemantle Institute of Technology<br />
                    Ivy Biophilic Workspace<br />
                    Thachampara Post, Palakkad<br />
                    Kerala – 678593
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Google Map */}
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden border border-border mb-4">
              <iframe
                src="https://www.google.com/maps/place/Bluemantle+LLP/@10.9471956,76.5042829,21889m/data=!3m1!1e3!4m6!3m5!1s0x3ba87f81919896d5:0x4fa2d3fd5b68778f!8m2!3d10.9623142!4d76.5116668!16s%2Fg%2F11yslv668w?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bluemantle Institute Location"
              />
            </div>
            <GradientButton
              text="Open in Google Maps"
              href="https://maps.app.goo.gl/PM53KrqekRdRwV7X7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full scale-100"
            />
          </Card>
        </div>
      </div>
    </section>
  </div>;
};
export default About;
