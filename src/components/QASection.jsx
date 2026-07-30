import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Mail, Phone } from 'lucide-react';


export const QASection = () => {
  return (
    <section id="qa" className="py-24 px-4 floral-backdrop text-[#fbf9f4] relative overflow-hidden">
      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-[#1a0105]/75 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
        {/* Header */}
        <div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c5a059]/10 text-[#f7e7ce] text-xs font-sans-body uppercase tracking-[0.2em] mb-2 border border-[#c5a059]/25 font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" /> Help & Support
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-[#f7e7ce] font-medium">
            Questions & Answers
          </h2>

        </div>

        {/* Torn Paper Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto bg-[#fffdf6] text-[#3d3226] p-8 sm:p-12 relative rounded-3xl paper-shadow border border-[#e2d5c3] card-inner-border"
        >
          <div className="space-y-6">
            <h3 className="font-serif-display text-2xl text-[#8a6a27] font-semibold">
              Do you have any questions?
            </h3>
            <p className="font-serif-body text-base text-[#5c4f42] leading-relaxed">
              We want to make sure your journey and stay is as smooth and pleasant as possible. If you need any assistance regarding travel, hotel arrangements, dress codes, or location directions, please contact us.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 font-sans-body text-xs font-semibold uppercase tracking-wider text-[#8a6a27]">
              <a
                href="mailto:hello@ourwedding.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#c5a059]/40 hover:bg-[#c5a059]/10 transition-all"
              >
                <Mail className="w-4 h-4" /> hello@ourwedding.com
              </a>
              <a
                href="tel:+441234567890"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#c5a059]/40 hover:bg-[#c5a059]/10 transition-all"
              >
                <Phone className="w-4 h-4" /> +44 1234 567890
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QASection;
