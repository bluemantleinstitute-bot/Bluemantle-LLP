import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download, MessageCircle, Calendar, Award, TrendingUp, BookOpen, Users, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CoursesApplyButton from "@/components/CoursesApplyButton";
import GradientButton from "@/components/GradientButton";
import { ArrowRight } from "lucide-react";
import { PremiumBackground } from "@/components/PremiumBackground";
import { SEO } from "@/components/SEO";

// ... (inside component)


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
    <SEO
      title="Professional Trading Courses"
      description="Comprehensive Forex and Stock market courses in Kerala. From beginner to advanced strategies, master price action and technical analysis."
      canonical="https://bluemantletechnology.com/courses"
    />
    {/* Hero */}
    {/* Hero Section */}
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <PremiumBackground />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Central Govt Approved & Skill India Mission ACCREDITED
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
            Next-Gen <span className="text-gradient-cyan">Trading Mastery</span> <br />
            <span className="text-gradient-gold">Driven by Innovation</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Master the art of <span className="text-white font-semibold">Technical Analysis</span>,
            <span className="text-white font-semibold"> Risk Management</span>, and
            <span className="text-white font-semibold"> Psychology</span> with our NISM-certified mentorship program.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cyan-400" size={18} />
              <span>Skill India Mission Training</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-purple-400" size={18} />
              <span>Government Recognized Programs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-cyan-400" size={18} />
              <span>Practical NISM Guidance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Courses List */}
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8 space-y-24">
        {[
          {
            title: "Certification in Forex & Stock Market Essentials",
            subtitle: "Foundation Level",
            duration: "3 Months",
            color: "cyan",
            learnings: [
              "Introduction to Stock & Forex Markets",
              "Technical Analysis & Chart Reading",
              "Market Indicators Basics",
              "Trading Psychology & Discipline",
              "Price Action Basics",
              "Risk Management & Capital Protection",
              "Live Market Examples & Simulations"
            ],
            addedValue: [
              "Beginner-friendly syllabus",
              "Flexible batches",
              "Study materials & e-books",
              "WhatsApp community support",
              "Doubt clearing & revision sessions"
            ]
          },
          {
            title: "Diploma in Trading Strategy & Market Analysis",
            subtitle: "Intermediate Level",
            duration: "6 Months",
            color: "blue",
            learnings: [
              "Strategy Building & Market Analysis",
              "Price Action Trading",
              "Options & Derivatives Basics",
              "Market Structure & Trend Analysis",
              "Entry, Exit & Trade Management",
              "Risk & Position Sizing",
              "Guided Practical Trading"
            ],
            addedValue: [
              "NISM mentor support in Palakkad",
              "Real funded trader insights",
              "Trading floor exposure",
              "Trade plan guidance",
              "News updates support"
            ]
          },
          {
            title: "Advanced Diploma in Trading Strategy, Market Execution & Risk Management",
            subtitle: "Advanced Level",
            duration: "1 Year",
            color: "purple",
            learnings: [
              "Advanced Trading Strategies",
              "Professional Market Execution",
              "Advanced Risk Models",
              "Multi-Market Strategies",
              "Real-time Trade Execution",
              "Portfolio Management Thinking",
              "Mentored Live Trading"
            ],
            addedValue: [
              "Industry-recognized certification",
              "Funded account guidance",
              "Career-focused mentoring",
              "LinkedIn profile optimization",
              "Strategic career guidance"
            ]
          },
          {
            title: "NISM (SEBI) Certification",
            subtitle: "Guidance & Exam Assistance",
            duration: "Exam Prep",
            color: "gold",
            learnings: [
              "Career-focused financial certification",
              "Real-world market content",
              "Complete exam guidance and support",
              "Industry-recognized qualification",
              "Placement assistance"
            ],
            addedValue: [
              "Specially designed for Degree & PG Students",
              "Build a strong foundation for financial career",
              "Mock tests and previous year questions",
              "Comprehensive study material",
              "Exam registration support"
            ]
          },
          {
            title: "Master in Financial Market",
            subtitle: "Stock Market + Forex",
            duration: "3 Months",
            color: "cyan",
            learnings: [
              "Introduction to Stock Market and Forex",
              "Fundamental Analysis",
              "Technical Analysis & Indicators",
              "Intraday Stock Trading Strategies",
              "Options Trading & Derivatives",
              "Risk Management and Position Sizing",
              "Commodity (Gold) Trading",
              "Funded Accounts Assistance & Guidance",
              "Trading Psychology",
              "Backtesting & Trading Plan Development",
              "Live Trading Sessions"
            ],
            addedValue: []
          }
        ].map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className={`p-8 lg:p-12 bg-gradient-to-br from-card to-muted border-2 relative overflow-hidden ${course.color === 'gold' ? 'border-accent/50' :
              course.color === 'purple' ? 'border-purple-500/50' :
                course.color === 'blue' ? 'border-blue-500/50' : 'border-secondary/50'
              }`}>
              {/* Decorative glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 ${course.color === 'gold' ? 'bg-accent' :
                course.color === 'purple' ? 'bg-purple-500' :
                  course.color === 'blue' ? 'bg-blue-500' : 'bg-secondary'
                }`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                  <div>
                    {course.subtitle && (
                      <p className={`text-sm font-bold tracking-wider uppercase mb-2 ${course.color === 'gold' ? 'text-accent' :
                        course.color === 'purple' ? 'text-purple-400' :
                          course.color === 'blue' ? 'text-blue-400' : 'text-cyan-400'
                        }`}>
                        {course.subtitle}
                      </p>
                    )}
                    <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                      {course.title}
                    </h2>
                  </div>
                  {course.duration && (
                    <div className={`font-bold text-lg px-6 py-3 rounded-full text-zinc-50 ${course.color === 'gold' ? 'bg-accent/20 text-accent border border-accent/20' :
                      course.color === 'purple' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/20' :
                        course.color === 'blue' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/20' : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/20'
                      }`}>
                      {course.duration}
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Target className={
                        course.color === 'gold' ? 'text-accent' :
                          course.color === 'purple' ? 'text-purple-400' :
                            course.color === 'blue' ? 'text-blue-400' : 'text-secondary'
                      } />
                      What You'll Learn
                    </h3>
                    <div className="space-y-4">
                      {course.learnings.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className={`flex-shrink-0 mt-0.5 w-5 h-5 ${course.color === 'gold' ? 'text-accent' :
                            course.color === 'purple' ? 'text-purple-400' :
                              course.color === 'blue' ? 'text-blue-400' : 'text-secondary'
                            }`} />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {course.addedValue.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <Award className={
                          course.color === 'gold' ? 'text-accent' :
                            course.color === 'purple' ? 'text-purple-400' :
                              course.color === 'blue' ? 'text-blue-400' : 'text-secondary'
                        } />
                        {course.title.includes("NISM") ? "Key Benefits" : "Added Value"}
                      </h3>
                      <div className="space-y-4">
                        {course.addedValue.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className={`flex-shrink-0 mt-0.5 w-5 h-5 ${course.color === 'gold' ? 'text-accent' :
                              course.color === 'purple' ? 'text-purple-400' :
                                course.color === 'blue' ? 'text-blue-400' : 'text-secondary'
                              }`} />
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                  <CoursesApplyButton
                    text="Apply Now"
                    to="/apply"
                    icon={ArrowRight}
                  />
                  <GradientButton
                    text={course.title.includes("NISM") ? "Get Expert Guidance" : "Join a Trial Session"}
                    href={course.title.includes("NISM") ? "tel:+917034540404" : undefined}
                    className="scale-90"
                  />
                  {!course.title.includes("NISM") && (
                    <GradientButton
                      text="Download Brochure"
                      href="/Bluemantle%20Brochure.pdf"
                      download="Bluemantle-Brochure.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="scale-90"
                    />
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
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
            Professional <span className="text-gradient-cyan">Trading Services in Kerala</span>
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