"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export function Contact() {
  const contacts = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Direct instant chat with our concierge",
      value: "+91 98765 43210",
      link: "https://wa.me/919876543210",
      color: "from-[#128C7E] to-[#075E54]", // Luxurious Deep Emerald/WhatsApp
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call our specialists for personal assistance",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "from-[#1e3a8a] to-[#0f172a]", // Deep Imperial Blue & Slate
    },
    {
      icon: Mail,
      title: "Email Inquiry",
      description: "For bespoke orders and partnerships",
      value: "info@bombaybed.com",
      link: "mailto:info@bombaybed.com",
      color: "from-[#b45309] to-[#78350f]", // Warm Amber / Rose Gold Accent
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-neutral-50 to-neutral-100/70 border-t border-neutral-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-900 mb-6 font-light">
            Let&apos;s Talk <span className="italic font-normal">Fabrics</span>
          </h2>
          <div className="w-12 h-[1px] bg-neutral-400 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Experience exceptional customer service. Reach out to us for luxury
            bespoke tailoring, product insights, or private inquiries.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`group bg-gradient-to-br ${contact.color} rounded-2xl p-6 sm:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[260px]`}
              >
                {/* Micro Premium UI Accents */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-16 -mt-16 blur-xl transition-opacity group-hover:opacity-80" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16 blur-lg" />

                {/* Top Section */}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300 shadow-inner">
                    <Icon
                      size={26}
                      className="text-white/90 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif tracking-wide mb-2 font-medium">
                    {contact.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm font-light leading-snug mb-6 max-w-[90%]">
                    {contact.description}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-base sm:text-lg font-medium tracking-wide font-sans truncate pr-2">
                    {contact.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full group-hover:bg-white text-white group-hover:text-neutral-900 transition-all duration-300 shrink-0">
                    Connect
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Concierge & Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 md:mt-24 text-center max-w-3xl mx-auto"
        >
          <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-0 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80 bg-white border border-neutral-200/60 rounded-2xl p-6 sm:p-8 shadow-md backdrop-blur-sm w-full">
            {/* Hours Info */}
            <div className="flex flex-col items-center justify-center pb-4 sm:pb-0 sm:px-6">
              <div className="flex items-center gap-2 mb-2 text-neutral-800">
                <Clock size={18} className="text-neutral-500" />
                <span className="font-medium font-sans text-sm tracking-wide uppercase text-neutral-400">
                  Response Window
                </span>
              </div>
              <p className="text-neutral-800 text-sm font-medium">
                Within 1 Hour{" "}
                <span className="text-neutral-400 font-light">
                  during business operations
                </span>
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Mon - Sun, 10:00 AM - 8:00 PM IST
              </p>
            </div>

            {/* Assurance Info */}
            <div className="flex flex-col items-center justify-center pt-4 sm:pt-0 sm:px-6">
              <div className="flex items-center gap-2 mb-2 text-neutral-800">
                <ShieldCheck size={18} className="text-neutral-500" />
                <span className="font-medium font-sans text-sm tracking-wide uppercase text-neutral-400">
                  Assurance
                </span>
              </div>
              <p className="text-neutral-800 text-sm font-medium">
                Secure & Encrypted Channels
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Your specifications & data remain completely private.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
