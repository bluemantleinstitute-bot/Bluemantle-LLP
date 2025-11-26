import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TradingCandlesticks } from "@/components/TradingCandlesticks";
import { Floating3DElements } from "@/components/Floating3DElements";
import { AnimatedSphere } from "@/components/AnimatedSphere";
import { MarketTicker } from "@/components/MarketTicker";
import { Award, Users, BookOpen, TrendingUp, Shield, Target, Zap, MessageSquare, Calendar, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logoIcon from "@/assets/logo-icon.ico";
const Home = () => {
  const {
    toast
  } = useToast();

  // Check for submission success notification
  useEffect(() => {
    const submissionSuccess = sessionStorage.getItem('submission_success');
    if (submissionSuccess === 'true') {
      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "We'll contact you soon to discuss your trading journey.",
        duration: 10000
      });
      sessionStorage.removeItem('submission_success');
    }
  }, [toast]);
  const stats = [{
    value: "24,400+",
    label: "Students Enrolled"
  }, {
    value: "NISM",
    label: "Certified Mentors"
  }, {
    value: "38+",
    label: "Weekly Live Classes"
  }, {
    value: "4.8★",
    label: "Average Rating"
  }];
  const features = [{
    icon: Target,
    title: "Quality Learning",
    desc: "Structured curriculum for all levels"
  }, {
    icon: Users,
    title: "Expert Guidance",
    desc: "NISM certified mentors"
  }, {
    icon: Calendar,
    title: "Flexible Batches",
    desc: "Learn at your own pace"
  }, {
    icon: Zap,
    title: "Live Training",
    desc: "Real-time market sessions"
  }, {
    icon: BookOpen,
    title: "No Prerequisites",
    desc: "Start from scratch"
  }, {
    icon: Shield,
    title: "Lifetime Support",
    desc: "Ongoing guidance & assistance"
  }];
  const specialFeatures = ["WhatsApp Premium Community Support", "News Updates & Trading Plan Guidance", "Funded Accounts Assistance & Guidance", "Trading Psychology Sessions", "Revision Classes & Study Materials", "Dedicated Trading Floor Access"];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy gradient-animated opacity-50" />
        
        {/* Animated candlesticks */}
        <TradingCandlesticks />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                Master Trading.{" "}
                <span className="text-gradient-cyan">Build Wealth.</span>
                <br />
                <span className="text-gradient-gold">Transform Your Future.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Learn from NISM certified mentors. Master the Indian Stock Market & Forex Trading 
                with expert guidance, live sessions, and comprehensive support.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-navy font-semibold text-lg px-8" asChild>
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-navy font-semibold text-lg px-8">
                  Join Free Webinar
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => <motion.div key={i} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.2 + i * 0.1
              }} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-gradient-cyan mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{
        animationDelay: "1s"
      }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" style={{
        animationDelay: "2s"
      }} />
      </section>

      {/* Market Ticker */}
      <MarketTicker />

      {/* Core Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient-cyan">Bluemantle</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive training designed for your success in financial markets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, i) => <motion.div key={i} initial={{
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
                <Card className="p-6 bg-card border-border hover:border-secondary transition-all hover:shadow-2xl hover:glow-cyan group">
                  <feature.icon className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </Card>
              </motion.div>)}
          </div>

          {/* Special Features Grid */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-card to-muted rounded-3xl p-8 lg:p-12 border border-border">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Premium <span className="text-gradient-gold">Features</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialFeatures.map((feature, i) => <motion.div key={i} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1
            }} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-cyan flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star size={14} className="text-navy" />
                  </div>
                  <p className="text-foreground font-medium">{feature}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-b from-transparent to-card/50 relative overflow-hidden">
        <Floating3DElements />
        
        {/* Animated spheres */}
        <div className="absolute left-10 top-20 opacity-50">
          <AnimatedSphere size={150} color="purple" delay={0.2} />
        </div>
        <div className="absolute right-10 bottom-20 opacity-50">
          <AnimatedSphere size={120} color="cyan" delay={0.5} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 text-accent mx-auto mb-6 glow-gold" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Excel Your Career with <span className="text-gradient-gold">NISM Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get Bluemantle Institute Certification along with NISM Certification Guidance & Exam Assistance. 
              Build a strong foundation for your financial market career.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-accent to-accent/80 text-navy font-bold text-lg px-8 glow-gold" asChild>
              <Link to="/apply">Get Certified</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden text-gray-50 bg-neutral-950">
        <Floating3DElements />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="bg-gradient-purple-cyan rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
                Ready to Start Your Trading Journey?
              </h2>
              <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto">
                Join thousands of successful traders who transformed their lives with Bluemantle
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-navy text-secondary font-bold text-lg px-8 hover:bg-navy/90 glow-purple" asChild>
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-navy font-semibold text-lg px-8 bg-slate-950 hover:bg-slate-800 opacity-100 rounded-md text-violet-700" asChild>
                  <a href="/Bluemantle%20Brochure.pdf" download="Bluemantle-Brochure.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400">
                    Download Brochure
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-glow-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/20 rounded-full blur-3xl animate-glow-pulse" style={{
            animationDelay: "1s"
          }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-glow-pulse" style={{
            animationDelay: "2s"
          }} />
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Home;