import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaLeaf } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-green-50 pt-16 pb-8 border-t border-green-900 mt-20 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-24 bg-green-500/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white group">
                <span className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white group-hover:bg-yellow-400 group-hover:rotate-12 transition-all shadow-lg">
                   <FaLeaf />
                </span>
                Green Nest
            </Link>
            <p className="text-green-200/80 leading-relaxed text-sm pr-4">
              Cultivating joy and purifying the air in your home with premium, hand-selected indoor plants.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/AI-Akash11" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all text-green-300">
                <FaFacebookF />
              </a>
              <a href="https://github.com/AI-Akash11" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all text-green-300">
                <FaInstagram />
              </a>
              <a href="https://github.com/AI-Akash11" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all text-green-300">
                <FaPinterestP />
              </a>
              <a href="https://github.com/AI-Akash11" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all text-green-300">
                <FaTwitter />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-green-200/80 hover:text-white transition-colors text-sm font-medium">Shop Plants</Link></li>
              <li><Link to="/" className="text-green-200/80 hover:text-white transition-colors text-sm font-medium">Care Guides</Link></li>
              <li><Link to="/" className="text-green-200/80 hover:text-white transition-colors text-sm font-medium">Consultations</Link></li>
              <li><Link to="/" className="text-green-200/80 hover:text-white transition-colors text-sm font-medium">Our Story</Link></li>
            </ul>
          </motion.div>

          {/* Legal / Support */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-green-200/80 hover:text-white transition-colors text-sm font-medium">FAQ</Link></li>
              <li><Link to="/" className="text-green-200/80 hover:text-white transition-colors text-sm font-medium">Shipping Policy</Link></li>
              <li><Link to="/" className="text-green-200/80 hover:text-white transition-colors text-sm font-medium">Returns & Refunds</Link></li>
              <li><Link to="/" className="text-green-200/80 hover:text-white transition-colors text-sm font-medium">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide">Stay Blooming</h3>
            <p className="text-green-200/80 text-sm leading-relaxed mb-4">
              Join our newsletter for exclusive plant tips and 10% off your first order!
            </p>
            <form className="flex rounded-xl overflow-hidden shadow-lg border border-green-800 focus-within:border-green-500 transition-colors">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full bg-green-900/50 px-4 py-3 text-sm text-white focus:outline-none placeholder:text-green-400"
               />
               <button 
                 type="button" 
                 className="bg-green-500 hover:bg-green-400 text-white px-5 py-3 font-bold transition-colors text-sm"
               >
                 Join
               </button>
            </form>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="pt-8 border-t border-green-900 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-green-300/60 text-sm">
            Copyright © {new Date().getFullYear()} Green Nest. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
             <Link to="/" className="text-green-300/60 hover:text-green-300 transition-colors">Privacy Policy</Link>
             <Link to="/" className="text-green-300/60 hover:text-green-300 transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
