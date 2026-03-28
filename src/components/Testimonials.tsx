import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "QNT transformed our corporate travel policy. Their software integration made bookings effortless, and their support is unmatched.",
    author: "Sarah Jenkins",
    role: "COO, TechGlobal",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    quote: "The software team at QNT is exceptional. They understood our complex requirements and delivered a robust solution ahead of schedule.",
    author: "Michael Chen",
    role: "CTO, InnovateX",
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    quote: "Our family vacation was perfectly curated. Every detail was handled with care, allowing us to truly enjoy the experience.",
    author: "Elena Rodriguez",
    role: "Private Client",
    image: "https://i.pravatar.cc/150?u=elena"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-brand-gray">Trusted by Leaders</h2>
          <p className="text-brand-gray/60">Hear from the people we've helped on their journeys and digital transformations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 relative group hover:bg-brand-green/5 transition-colors"
            >
              <Quote className="text-brand-green/20 absolute top-6 right-8" size={48} />
              <p className="text-brand-gray/80 italic mb-8 relative z-10 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <p className="font-bold text-brand-dark">{t.author}</p>
                  <p className="text-xs text-brand-gray/60 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
