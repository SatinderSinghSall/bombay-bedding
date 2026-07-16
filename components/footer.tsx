"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      // Flawless Native SVG for Facebook
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      // Flawless Native SVG for Instagram
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      // Flawless Native SVG for WhatsApp / Chat
      icon: (props: any) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      href: "https://wa.me/919333041911",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 border-t border-neutral-900 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1.2fr] gap-12 lg:gap-20 mb-20">
          {/* Column 1 - Brand Profile & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-900/20 transition-transform duration-500 hover:rotate-6">
                  <span className="text-white font-serif text-lg font-bold">
                    B
                  </span>
                </div>
                <div>
                  <h3 className="font-serif font-medium text-xl tracking-tight text-neutral-100">
                    Bombay Bedding
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-neutral-500 font-bold mt-0.5">
                    Premium Furnishings
                  </p>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light mb-8">
                Your one-stop destination for premium bed sheets, curtain
                fabrics, towels, blankets, quilts, mattresses, and everything
                needed to make your home beautiful.
              </p>
            </div>

            {/* Premium Social Hub */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-bold mb-4">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/30 text-neutral-400 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500/5 hover:text-amber-500"
                    >
                      <Icon className="transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Contact Directory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            <h4 className="font-serif font-medium text-lg tracking-wide text-neutral-200 mb-7">
              Contact Info
            </h4>
            <div className="space-y-5 text-sm font-light">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-1">
                  Address
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Durgapur Station Road, Durgapur, WB
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-1">
                  Phone
                </p>
                <a
                  href="tel:+919333041911"
                  className="group inline-flex items-center gap-1 text-amber-500 transition-colors duration-300 hover:text-amber-400 font-medium"
                >
                  +91 93330 41911
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 -translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-1">
                  Email
                </p>
                <a
                  href="mailto:bombaybedding16@gmail.com"
                  className="group inline-flex items-center gap-1 text-amber-500 transition-colors duration-300 hover:text-amber-400 font-medium"
                >
                  bombaybedding16@gmail.com
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 -translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold mb-1.5">
                  Hours
                </p>
                <div className="text-neutral-300 space-y-1.5 text-xs">
                  <p>
                    <span className="text-neutral-500 font-normal">
                      Mon - Wed:
                    </span>{" "}
                    9:30 AM - 9:30 PM
                  </p>
                  <p>
                    <span className="text-neutral-500 font-normal">Thu:</span>{" "}
                    <span className="text-red-500 font-medium">Closed</span>
                  </p>
                  <p>
                    <span className="text-neutral-500 font-normal">
                      Fri - Sun:
                    </span>{" "}
                    9:30 AM - 9:30 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3 - Technical Legal Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            <h4 className="font-serif font-medium text-lg tracking-wide text-neutral-200 mb-7">
              Important Note
            </h4>
            <div className="bg-neutral-900/20 rounded-2xl p-6 border border-neutral-900/80 backdrop-blur-sm">
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                All product photos displayed on our website and social media are
                representative images. Actual products may vary slightly in
                color, pattern, and texture due to lighting and natural fabric
                variations. For accurate product details, please visit our
                showroom or contact us directly.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sub-Footer Copyright Area */}
        <div className="border-t border-neutral-900/60 pt-8 mt-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wide text-neutral-500 font-light"
          >
            <p>
              &copy; {new Date().getFullYear()} Bombay Bedding. All rights
              reserved.
            </p>
            <p className="flex items-center gap-1">
              Designed with{" "}
              <span className="text-amber-600 scale-95 animate-pulse">❤️</span>{" "}
              for comfort and elegance
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
