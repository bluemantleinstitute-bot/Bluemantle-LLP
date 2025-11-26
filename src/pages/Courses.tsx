import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download, MessageCircle, Calendar, Award, TrendingUp, BookOpen, Users, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Courses = () => {
  const { toast } = useToast();

  // Check for submission success notification
  useEffect(() => {
    const submissionSuccess = sessionStorage.getItem('submission_success');
    if (submissionSuccess === 'true') {
      toast({
        title: "Application Submitted Successfully! 🎉",
        description: "We'll contact you soon to discuss your trading journey.",
        duration: 10000,
      });
      sessionStorage.removeItem('submission_success');
    }
  }, [toast]);

  const masterCourseModules = ["Introduction to Stock Market and Forex", "Fundamental Analysis", "Technical Analysis & Indicators", "Intraday Stock Trading Strategies", "Options Trading & Derivatives", "Risk Management and Position Sizing", "Commodity (Gold) Trading", "Funded Accounts Assistance & Guidance", "Trading Psychology", "Backtesting & Trading Plan Development", "Live Trading Sessions"];
  const nismBenefits = ["Career-focused financial certification", "Real-world market content", "Complete exam guidance and support", "Industry-recognized qualification", "Placement assistance"];
  const additionalServices = [{
    icon: TrendingUp,
    title: "Live Trading Sessions",
    desc: "Watch experts trade in real-time"
  }, {
    icon: MessageCircle,
    title: "Doubt Clearance",
    desc: "24/7 community support"
  }, {
    icon: Users,
    title: "Community Networking",
    desc: "Connect with fellow traders"
  }, {
    icon: BookOpen,
    title: "Study Materials",
    desc: "Comprehensive e-books & resources"
  }];
  return <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient-cyan">Courses</span> & Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive training programs designed to make you a confident, independent trader
            </p>
          </motion.div>
        </div>
      </section>

      {/* Master Course */}
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
        }} className="max-w-5xl mx-auto">
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-card to-muted border-2 border-secondary/50 relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                      Master in <span className="text-gradient-cyan">Financial Market</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">(Stock Market + Forex)</p>
                  </div>
                  <div className="bg-gradient-cyan font-bold text-lg px-6 py-3 rounded-full text-zinc-50">
                    3 Months Duration
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Target className="text-secondary" />
                  What You'll Learn
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {masterCourseModules.map((module, i) => <motion.div key={i} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: i * 0.05
                }} className="flex items-start gap-3">
                      <CheckCircle className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground">{module}</span>
                    </motion.div>)}
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                  <Button size="lg" className="bg-gradient-cyan font-bold glow-cyan text-slate-50" asChild>
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-navy">
                    <MessageCircle className="mr-2" size={20} />
                    Ask for Free Demo Class
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/Bluemantle%20Brochure.pdf" download="Bluemantle-Brochure.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2" size={20} />
                      Download Brochure
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* NISM Certification */}
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
        }} className="max-w-5xl mx-auto">
            <Card className="p-8 lg:p-12 bg-gradient-to-br from-accent/10 to-card border-2 border-accent/50 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-16 h-16 text-accent glow-gold" />
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                      <span className="text-gradient-gold">NISM (SEBI) Certification</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Guidance & Exam Assistance</p>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-6 mb-6">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Specially designed for Degree & PG Students
                  </p>
                  <p className="text-muted-foreground">
                    Build a strong foundation for your career in financial markets with industry-recognized certification
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {nismBenefits.map((benefit, i) => <motion.div key={i} initial={{
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
                      <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-foreground">{benefit}</span>
                    </motion.div>)}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-accent to-accent/80 text-navy font-bold glow-gold" asChild>
                    <Link to="/apply">Register Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-navy">
                    <MessageCircle className="mr-2" size={20} />
                    Talk to Counsellor
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
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
            <h2 className="text-4xl font-bold mb-4">
              Additional <span className="text-gradient-cyan">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">Complete support for your trading journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, i) => <motion.div key={i} initial={{
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
                <Card className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-2xl hover:glow-blue group text-center">
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Courses;