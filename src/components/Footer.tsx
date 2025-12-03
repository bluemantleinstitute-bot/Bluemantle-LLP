import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
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
                  <p>+91 70345 40404</p>
                  <p>+91 49242 44022</p>
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

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted hover:bg-secondary hover:text-navy flex items-center justify-center transition-all hover:scale-110 glow-cyan" aria-label={social.label}>
                  <social.icon size={18} />
                </a>)}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Bluemantle Institute of Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};