import React from 'react';
import { motion } from 'motion/react';
import { Globe, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left Content Side */}
        <div className="flex-1 flex items-center px-6 py-20 lg:py-0 lg:px-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span>Next-Gen Solutions</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl mb-8 font-display leading-[0.9] tracking-tighter">
              TRAVEL <br />
              <span className="text-brand-green">&</span> TECH <br />
              <span className="text-brand-gray/30">UNITED.</span>
            </h1>
            
            <p className="text-xl text-brand-gray/70 mb-12 leading-relaxed max-w-md">
              We engineer high-performance software while crafting unforgettable global journeys. 
              QNT is where digital innovation meets physical exploration.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary px-8 py-4 text-lg shadow-lg shadow-brand-green/20">
                Start a Project
              </a>
              <a href="#services" className="btn-secondary px-8 py-4 text-lg">
                Our Services
              </a>
            </div>

            <div className="mt-20 flex items-center space-x-12 opacity-40">
              <div className="text-center">
                <p className="text-2xl font-display font-bold">12+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Years</p>
              </div>
              <div className="w-px h-8 bg-brand-gray/20" />
              <div className="text-center">
                <p className="text-2xl font-display font-bold">500+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Clients</p>
              </div>
              <div className="w-px h-8 bg-brand-gray/20" />
              <div className="text-center">
                <p className="text-2xl font-display font-bold">50+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold">Countries</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Visual Side */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-screen overflow-hidden">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" 
              alt="Collaboration and Travel" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block" />
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-1/4 -left-12 hidden xl:block"
          >
            <div className="glass p-6 rounded-3xl shadow-2xl border-l-4 border-brand-green max-w-[280px]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white">
                  <Globe size={20} />
                </div>
                <p className="font-bold text-sm">Travel Logistics</p>
              </div>
              <p className="text-xs text-brand-gray/70 leading-relaxed">
                Automated booking systems integrated with real-time global travel data.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute bottom-1/4 right-12 hidden xl:block"
          >
            <div className="glass p-6 rounded-3xl shadow-2xl border-r-4 border-brand-gray max-w-[280px]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white">
                  <Code size={20} />
                </div>
                <p className="font-bold text-sm">Software Dev</p>
              </div>
              <p className="text-xs text-brand-gray/70 leading-relaxed">
                Bespoke enterprise applications built for scale and reliability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center space-y-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-px h-12 bg-brand-gray" />
      </motion.div>
    </section>
  );
};
