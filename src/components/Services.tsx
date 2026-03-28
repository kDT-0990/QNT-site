import React from 'react';
import { motion } from 'motion/react';
import { Globe, Plane, Map, Hotel, Code, Smartphone, Cloud, ShieldCheck } from 'lucide-react';

const travelServices = [
  { icon: Plane, title: 'Flight Logistics', desc: 'Optimized booking and management for corporate and leisure travel.' },
  { icon: Map, title: 'Custom Itineraries', desc: 'Bespoke travel plans tailored to your unique preferences and goals.' },
  { icon: Hotel, title: 'Luxury Stays', desc: 'Exclusive access to premium accommodations worldwide.' },
];

const softwareServices = [
  { icon: Code, title: 'Web Development', desc: 'High-performance, scalable web applications built with modern stacks.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile solutions for iOS and Android.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Secure and efficient cloud infrastructure and migration services.' },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-4">Our Core Expertise</h2>
          <p className="text-brand-gray/60 max-w-2xl mx-auto">
            We bridge the gap between physical exploration and digital innovation, 
            providing comprehensive solutions for the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Travel Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                <Globe size={32} />
              </div>
              <div>
                <h3 className="text-3xl">Travel Services</h3>
                <p className="text-brand-green font-semibold">Exploring the World</p>
              </div>
            </div>
            
            <div className="grid gap-6">
              {travelServices.map((s, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-brand-green/30 hover:shadow-lg transition-all group">
                  <s.icon className="text-brand-green mb-4 group-hover:scale-110 transition-transform" size={24} />
                  <h4 className="text-xl mb-2">{s.title}</h4>
                  <p className="text-brand-gray/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            
            <button className="text-brand-green font-bold flex items-center group">
              Explore Travel Solutions <Globe className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>

          {/* Software Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-gray/10 flex items-center justify-center text-brand-gray">
                <Code size={32} />
              </div>
              <div>
                <h3 className="text-3xl">Software Development</h3>
                <p className="text-brand-gray font-semibold">Engineering the Future</p>
              </div>
            </div>
            
            <div className="grid gap-6">
              {softwareServices.map((s, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-brand-gray/30 hover:shadow-lg transition-all group">
                  <s.icon className="text-brand-gray mb-4 group-hover:scale-110 transition-transform" size={24} />
                  <h4 className="text-xl mb-2">{s.title}</h4>
                  <p className="text-brand-gray/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            
            <button className="text-brand-gray font-bold flex items-center group">
              Explore Tech Solutions <Code className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
