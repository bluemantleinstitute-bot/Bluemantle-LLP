import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Floating3DElements } from "@/components/Floating3DElements";
import { AnimatedSphere } from "@/components/AnimatedSphere";
import { Phone, Mail, MapPin, Target, Eye, Users } from "lucide-react";
const About = () => {
  const teamMembers = [{
    name: "PRASANTH PHILIP",
    role: "FOUNDER & DIRECTOR",
    bio: "Provides Overall Leadership  and Strategic Direction for the Company"
  }, {
    name: "SONIYA PRASANTH",
    role: "DIRECTOR AND GENERAL MANAGER",
    bio: "Oversees Daily Operations and Ensures Smooth,Efficient Management"
  }, {
    name: "VYSHAKH G",
    role: "HEAD OF DERIVATIVES AND TECHNICAL RESEARCH",
    bio: "NISM(SEBI)Certified with 8+ years of Experince In Derivatives Market"
  }];
  return <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background via-purple-dark/10 to-card/50 relative overflow-hidden">
        <Floating3DElements />
        
        {/* Animated spheres */}
        <div className="absolute right-20 top-10 opacity-40">
          <AnimatedSphere size={180} color="purple" delay={0} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient-purple">Bluemantle</span>
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
        }} className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bluemantle Institute of Technology is a professional trading institute dedicated to delivering 
              structured, practical market education. We specialize in the Indian Stock Market & Forex Trading, 
              providing comprehensive training from NISM certified mentors. Our programs combine theoretical 
              knowledge with live trading sessions, ensuring students gain real-world experience and confidence 
              to succeed in financial markets.
            </p>
          </motion.div>
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => <motion.div key={i} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.1
          }}>
                <Card className="p-6 text-center bg-card border-border hover:border-secondary transition-all hover:shadow-2xl">
                  <div className="w-24 h-24 bg-gradient-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users size={40} className="text-navy" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-secondary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </Card>
              </motion.div>)}
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
                    <p className="text-muted-foreground">+91 70345 40404</p>
                    <p className="text-muted-foreground">+91 4924 244022</p>
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
              <div className="w-full h-64 rounded-lg overflow-hidden border border-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2281699999997!2d76.6547!3d10.7867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzEyLjEiTiA3NsKwMzknMTYuOSJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bluemantle Institute Location" />
              </div>
              <Button variant="outline" className="mt-4 w-full" asChild>
                <a href="https://maps.google.com/?q=Bluemantle+Institute+of+Technology+Palakkad" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default About;
