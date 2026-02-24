import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { ShareButton } from "@/components/ShareButton";

export const Footer = () => {
  const quickLinks = [{
    path: "/",
    label: "Home"
  }, {
    path: "/courses",
    label: "Courses & Services"
  }, {
    path: "/about",
    label: "About & Contact"
  }];
  const socialLinks = [{
    icon: Instagram,
    href: "https://www.instagram.com/bluemantle.llp?igsh=dGV3d21yNTY3a3Rs",
    label: "Instagram"
  }, {
    icon: Youtube,
    href: "https://youtube.com/@bluemantleinstitute?si=N3F8zemYRhe2-d_a",
    label: "YouTube"
  }, {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/bluemantle/",
    label: "LinkedIn"
  }];
  return <footer className="bg-card border-t border-border mt-20">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Bluemantle" className="h-12 w-12 object-contain" />
            <div>
              <h3 className="text-gradient-cyan font-semibold text-lg">BLUEMANTLE LLP </h3>
              <p className="text-muted-foreground text-xs">INSTITUTE OF TECHNOLOGY</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Empowering traders with structured, practical education for the Indian Stock Market & Forex.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map(link => <li key={link.path}>
              <Link to={link.path} className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                {link.label}
              </Link>
            </li>)}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4 text-foreground">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <Phone size={16} className="mt-0.5 text-secondary flex-shrink-0" />
              <div>
                <a href="tel:+917034540404" className="hover:text-secondary transition-colors block">+91 70345 40404</a>
                <a href="tel:+914924244022" className="hover:text-secondary transition-colors block">+91 49242 44022</a>
              </div>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <Mail size={16} className="mt-0.5 text-secondary flex-shrink-0" />
              <a href="mailto:Info@bluemantletechnology.com" className="hover:text-secondary transition-colors">
                Info@bluemantletechnology.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="mt-0.5 text-secondary flex-shrink-0" />
              <p>Ivy Biophilic Workspace, Thachampara Post, Palakkad, Kerala – 678593</p>
            </li>
          </ul>
        </div>

        {/* Social - Isometric 3D Style (Restored) */}
        <div>
          <h4 className="font-bold mb-4 text-foreground">Follow Us</h4>
          <div className="rounded-2xl p-4 backdrop-blur-md inline-flex flex-col gap-4"
            style={{
              boxShadow: "inset 0 0 20px rgba(255,255,255,0.1), inset 0 0 5px rgba(255,255,255,0.15), 0 5px 5px rgba(0,0,0,0.16)",
            }}
          >
            <ul className="flex list-none gap-4 p-0 m-0 flex-wrap">
              {socialLinks.map(social => (
                <li key={social.label} className="relative group cursor-pointer">
                  {/* Shadow layers */}
                  <span className="absolute opacity-0 rounded-full w-[50px] h-[50px] border border-cyan-400 transition-all duration-300 group-hover:opacity-20"
                    style={{ boxShadow: "inset 0 0 20px rgba(255,255,255,0.15), 0 5px 5px rgba(0,0,0,0.16)" }} />
                  <span className="absolute opacity-0 rounded-full w-[50px] h-[50px] border border-cyan-400 transition-all duration-300 group-hover:opacity-40 group-hover:translate-x-[5px] group-hover:-translate-y-[5px]"
                    style={{ boxShadow: "inset 0 0 20px rgba(255,255,255,0.15), 0 5px 5px rgba(0,0,0,0.16)" }} />
                  <span className="absolute opacity-0 rounded-full w-[50px] h-[50px] border border-cyan-400 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-[10px] group-hover:-translate-y-[10px]"
                    style={{ boxShadow: "inset 0 0 20px rgba(255,255,255,0.15), 0 5px 5px rgba(0,0,0,0.16)" }} />

                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <div className="relative z-10 w-[50px] h-[50px] rounded-full flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:translate-x-[15px] group-hover:-translate-y-[15px] bg-slate-900"
                      style={{ boxShadow: "inset 0 0 20px rgba(255,255,255,0.15), inset 0 0 5px rgba(255,255,255,0.25), 0 5px 5px rgba(0,0,0,0.16)" }}
                    >
                      <social.icon size={22} />
                    </div>
                  </a>

                  {/* Label tooltip */}
                  <span className="absolute opacity-0 rounded-md px-2 py-1 text-xs text-cyan-400 bg-slate-900/90 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[25px] group-hover:-translate-y-[2px] group-hover:-skew-x-[5deg] whitespace-nowrap z-20 left-0 top-full mt-1 border border-cyan-400/30"
                    style={{ boxShadow: "inset 0 0 20px rgba(255,255,255,0.15), 0 5px 5px rgba(0,0,0,0.08)" }}
                  >
                    {social.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Share Button */}
          <div className="mt-4">
            <ShareButton />
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Bluemantle Institute of Technology. All rights reserved.</p>
      </div>
    </div>
  </footer>;
};