import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Global Nomad App',
    category: 'Software Development',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
    desc: 'A comprehensive mobile app for digital nomads to find workspaces and community events.'
  },
  {
    title: 'Alpine Escape 2025',
    category: 'Travel Services',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    desc: 'Custom-curated luxury trekking expedition through the Swiss Alps for corporate teams.'
  },
  {
    title: 'FinTech Cloud Migration',
    category: 'Software Development',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    desc: 'Secure migration of legacy banking systems to a modern, distributed cloud architecture.'
  },
  {
    title: 'Southeast Asia Explorer',
    category: 'Travel Services',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
    desc: 'Multi-country cultural immersion program focusing on sustainable tourism and local impact.'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl mb-4">Our Recent Work</h2>
            <p className="text-brand-gray/60">
              A glimpse into the successful partnerships and innovative solutions we've delivered 
              across our two core domains.
            </p>
          </div>
          <a href="#" className="btn-secondary">View All Projects</a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <ExternalLink size={18} className="text-brand-gray/40 group-hover:text-brand-green transition-colors" />
                </div>
                <h3 className="text-2xl mb-2 group-hover:text-brand-green transition-colors">{project.title}</h3>
                <p className="text-brand-gray/60 text-sm leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
