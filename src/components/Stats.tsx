import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Countries Reached', value: '50+' },
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Happy Clients', value: '500+' },
  { label: 'Years Experience', value: '12' },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00D100_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
            >
              <p className="text-4xl md:text-6xl font-display font-bold text-brand-green mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-widest text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
