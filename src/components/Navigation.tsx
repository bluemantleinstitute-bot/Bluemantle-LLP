import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GradientButton from "./GradientButton";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses & Services" },
    { path: "/about", label: "About & Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#05050A]/[0.45] backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center">
              <img src={logo} alt="Bluemantle Institute" className="h-10 w-10 object-contain" />
            </div>
            <div className="flex flex-col justify-center -space-y-0.5">
              <h1 className="text-[14px] sm:text-xl font-bold text-white tracking-wide leading-tight">
                BLUEMANTLE LLP
              </h1>
              <p className="text-[8px] sm:text-[10px] text-gray-400 font-medium tracking-[0.2em] uppercase leading-tight">
                Institute of Technology
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(item.path)
                    ? "bg-white/10 text-white shadow-inner shadow-white/5"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <GradientButton
              text="SIGN-IN"
              href="https://learneasywinhub.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="scale-90"
            />

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-[#05050A]"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors ${isActive(item.path)
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};