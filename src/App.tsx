import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-green selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section / Intro */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                  A Differentiated Approach to <br />
                  <span className="text-brand-green italic">Growth & Exploration.</span>
                </h2>
                <p className="text-lg text-brand-gray/80 mb-8 leading-relaxed">
                  At QNT, we don't just provide services; we build partnerships. 
                  Whether you're navigating the complexities of global travel or 
                  the challenges of digital transformation, our team brings 
                  unparalleled expertise to every project.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Operational Excellence', 'Human-Centric Design', 'Scalable Architecture', 'Global Reach'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-brand-green" />
                      </div>
                      <span className="font-medium text-brand-gray">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary">Learn More About Our Story</a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl max-w-[200px]">
                  <p className="text-3xl font-display font-bold text-brand-green mb-1">98%</p>
                  <p className="text-xs text-brand-gray font-bold uppercase tracking-wider">Client Retention Rate</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Services />
        <Stats />
        <Portfolio />
        <Testimonials />
        
        {/* Final CTA */}
        <section className="py-24 bg-brand-green relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl text-white mb-8">
              Ready to start your next <br />
              <span className="opacity-70">journey or project?</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Let's discuss how QNT can help you achieve your goals through 
              expert travel management and innovative software solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#contact" className="px-10 py-4 rounded-full bg-white text-brand-green font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                Contact Us Today
              </a>
              <a href="tel:+15551234567" className="px-10 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all">
                Schedule a Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
