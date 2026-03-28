import React from 'react';
import { Logo } from './Logo';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Logo className="h-12 mb-8" />
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              QNT is a multi-disciplinary firm dedicated to excellence in travel services 
              and software development. We build bridges between destinations and digital 
              possibilities.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-brand-green transition-colors">Home</a></li>
              <li><a href="#travel" className="hover:text-brand-green transition-colors">Travel Services</a></li>
              <li><a href="#software" className="hover:text-brand-green transition-colors">Software Development</a></li>
              <li><a href="#portfolio" className="hover:text-brand-green transition-colors">Our Portfolio</a></li>
              <li><a href="#about" className="hover:text-brand-green transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-green mt-1 shrink-0" />
                <span>123 Innovation Drive, <br />Tech District, SF 94103</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-green shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-green shrink-0" />
                <span>contact@qnt-solutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2026 QNT Solutions. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
