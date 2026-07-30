import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, AlertCircle, Heart } from 'lucide-react';

import { OrnateFrame } from './OrnateFrame';

export const RSVPFormSection = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    attending: 'yes',
    guestsCount: 1,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-24 px-4 stripes-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hanging Ornate Golden Picture Frames */}
          <div className="lg:col-span-5 hidden md:flex flex-col items-center justify-center space-y-8 relative">
            {/* Thread/Hanger lines behind frames */}
            <div className="absolute top-0 w-0.5 bg-[#8a6a27]/40 h-full -z-10" />

            {/* Frame 1 */}
            <motion.div
              initial={{ rotate: -2, y: -10 }}
              animate={{ rotate: 1, y: 0 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 4, ease: "easeInOut" }}
              className="w-48 aspect-[3/4]"
            >
              <OrnateFrame
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80"
                alt="Frame couple holding hands"
              />
            </motion.div>

            {/* Frame 2 */}
            <motion.div
              initial={{ rotate: 3, y: -5 }}
              animate={{ rotate: -1, y: 0 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 3.5, ease: "easeInOut" }}
              className="w-44 aspect-square"
            >
              <OrnateFrame
                src="https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=400&q=80"
                alt="Frame couple smiling"
              />
            </motion.div>
          </div>

          {/* Right Column: RSVP Heading and Form */}
          <div className="lg:col-span-7 bg-[#fffdf6] rounded-3xl paper-shadow border border-[#e2d5c3] card-inner-border p-8 sm:p-12">
            <div className="text-center mb-8">
              <span className="font-script text-4xl text-[#8a6a27] block mb-1">RSVP</span>
              <h2 className="font-serif-display text-2xl sm:text-3xl text-[#3d3226] font-bold">
                Let Us Know If You Can Make It
              </h2>
              <p className="font-serif-body text-xs text-[#7a6b5a] mt-2 italic">
                Please reply by September 1, 2026, so we can prepare our special day.
              </p>

            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-green-50 border border-green-200 rounded-2xl text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-xl text-green-800 font-bold">Thank You!</h3>
                <p className="font-serif-body text-sm text-green-700">
                  Your response has been successfully sent. We look forward to celebrating together.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 text-left">
                    <label className="font-sans-body text-xs font-semibold uppercase tracking-wider text-[#3d3226]">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e2d5c3] bg-[#fffdf6] focus:border-[#8a6a27] focus:ring-1 focus:ring-[#8a6a27] outline-none text-sm text-[#3d3226]"
                    />
                  </div>
                  <div className="space-y-1 text-left">
                    <label className="font-sans-body text-xs font-semibold uppercase tracking-wider text-[#3d3226]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e2d5c3] bg-[#fffdf6] focus:border-[#8a6a27] focus:ring-1 focus:ring-[#8a6a27] outline-none text-sm text-[#3d3226]"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <span className="font-sans-body text-xs font-semibold uppercase tracking-wider text-[#3d3226] block">
                    Will you be attending?
                  </span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-[#3d3226]">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={form.attending === 'yes'}
                        onChange={(e) => setForm({ ...form, attending: e.target.value })}
                        className="accent-[#8a6a27]"
                      />
                      Yes, happily attending
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-[#3d3226]">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={form.attending === 'no'}
                        onChange={(e) => setForm({ ...form, attending: e.target.value })}
                        className="accent-[#8a6a27]"
                      />
                      Regretfully decline
                    </label>
                  </div>
                </div>

                {form.attending === 'yes' && (
                  <div className="space-y-1 text-left">
                    <label className="font-sans-body text-xs font-semibold uppercase tracking-wider text-[#3d3226]">
                      Number of Guests
                    </label>
                    <select
                      value={form.guestsCount}
                      onChange={(e) => setForm({ ...form, guestsCount: parseInt(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#e2d5c3] bg-[#fffdf6] focus:border-[#8a6a27] focus:ring-1 focus:ring-[#8a6a27] outline-none text-sm text-[#3d3226]"
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="space-y-1 text-left">
                  <label className="font-sans-body text-xs font-semibold uppercase tracking-wider text-[#3d3226]">
                    Message to the Couple
                  </label>
                  <textarea
                    rows="3"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2d5c3] bg-[#fffdf6] focus:border-[#8a6a27] focus:ring-1 focus:ring-[#8a6a27] outline-none text-sm text-[#3d3226] resize-none"
                    placeholder="Dietary requests or warm wishes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#627254] hover:bg-[#4d5b41] text-[#fbf9f4] font-sans-body text-xs tracking-widest uppercase shadow-md transition-all font-bold"
                >
                  Send RSVP
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RSVPFormSection;
