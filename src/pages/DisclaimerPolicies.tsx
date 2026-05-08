import { motion } from "framer-motion";
import { AlertTriangle, FileText, LockKeyhole, Scale, ShieldCheck, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

const policyCards = [
  {
    title: "Educational Purpose Only",
    icon: ShieldCheck,
    text: "All courses, webinars, mentorship sessions, tools, strategies, materials, and market discussions are for educational and informational purposes only. Skill India Mission affiliation does not imply government approval, endorsement, certification, trading guarantee, profit assurance, investment advice, or any government-backed investment scheme.",
  },
  {
    title: "No Financial Advice",
    icon: Scale,
    text: "Nothing shared on our website, social media, classrooms, live or recorded sessions, webinars, mentorships, apps, ads, or communities should be treated as financial advice, investment recommendation, legal advice, tax advice, trading signals, research reports, brokerage services, or SEBI-registered advisory services. Users should consult qualified professionals before making financial decisions.",
  },
  {
    title: "Risk Disclosure",
    icon: TrendingDown,
    text: "Trading and investing in stocks, derivatives, commodities, cryptocurrencies, forex, mutual funds, and other instruments involve substantial market risk and may result in partial or complete capital loss. Past performance does not guarantee future results, and no method, strategy, indicator, or concept can assure profits or prevent losses.",
  },
  {
    title: "Liability & Results",
    icon: AlertTriangle,
    text: "Bluemantle, its founders, trainers, mentors, employees, affiliates, partners, and representatives are not liable for financial, trading, investment, business, data, opportunity, emotional, indirect, or consequential losses. We do not guarantee profitability, consistent returns, job placement, freelancing income, business success, financial independence, examination results, or skill mastery within a fixed timeline.",
  },
  {
    title: "Privacy Policy",
    icon: LockKeyhole,
    text: "We may collect personal, technical, billing, educational activity, cookie, analytics, and login information to deliver services, improve user experience, process payments, send updates, protect the platform, prevent misuse, and meet legal obligations. We do not sell personal data. Third-party services such as payment gateways, hosting, analytics, communication, and video tools may process data under their own policies.",
  },
  {
    title: "Terms & Conditions",
    icon: FileText,
    text: "By using this platform, users agree to follow applicable laws and these terms. All logos, branding, videos, graphics, designs, documents, course materials, source code, UI/UX assets, and educational resources belong to the institution unless stated otherwise. Misuse, unauthorized access, paid-content redistribution, credential sharing, malicious uploads, impersonation, and unlawful activity are prohibited. Indian law applies, with competent courts in Palakkad having jurisdiction unless otherwise required by law.",
  },
];

const DisclaimerPolicies = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Disclaimer & Policies"
        description="Read Bluemantle LLP's educational disclaimer, privacy policy, risk disclosure, and terms and conditions."
        canonical="https://bluemantletechnology.com/disclaimer-policies"
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-background via-purple-dark/10 to-card/40 py-14">
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
              <Scale className="h-4 w-4" />
              Legal Notice
            </div>
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Disclaimer & <span className="text-gradient-cyan">Policies</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Please review these important educational, privacy, risk, and platform terms before using Bluemantle programs or services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {policyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <Card className="h-full border-border/70 bg-card/80 p-4 shadow-elevation backdrop-blur">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-secondary/30 bg-secondary/10 text-secondary">
                      <card.icon className="h-4 w-4" />
                    </div>
                    <h2 className="text-lg font-extrabold leading-tight text-foreground sm:text-xl">
                      {card.title}
                    </h2>
                  </div>
                  <p className="text-[10px] leading-5 text-muted-foreground sm:text-xs">
                    {card.text}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-lg border border-secondary/30 bg-secondary/10 px-5 py-4 text-center">
            <p className="text-[10px] font-medium leading-5 text-muted-foreground sm:text-xs">
              By continuing to use this platform, users acknowledge that they have read, understood, and agreed to the Disclaimer, Privacy Policy, Risk Disclosure, and Terms & Conditions. All trading, investing, and financial decisions are made independently and entirely at the user's own risk.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisclaimerPolicies;
