"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Download } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isScrolled && (
        <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-3 sm:gap-4 pointer-events-none">
          {/* Floating Catalogue Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.05,
            }}
            className="pointer-events-auto group relative"
          >
            <a
              href="https://wa.me/919333041911?text=I%20would%20like%20to%20request%20your%20full%20catalogue"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-amber-800 hover:to-amber-900 text-white font-sans text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-800/50"
            >
              <Download size={16} className="animate-pulse" />
              <span>Request Catalogue</span>
            </a>
          </motion.div>

          {/* Floating WhatsApp Concierge Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="pointer-events-auto group relative"
          >
            {/* Desktop Hover Tooltip */}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-neutral-800 text-xs font-medium tracking-wide px-3 py-1.5 rounded-md shadow-md border border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden md:inline whitespace-nowrap">
              Chat with Concierge
            </span>

            <a
              href="https://wa.me/919333041911"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              aria-label="Contact on WhatsApp"
            >
              {/* Premium Subtle Pulse Ring */}
              <span className="absolute inset-0 rounded-full bg-emerald-600/30 animate-ping pointer-events-none scale-105 duration-1000" />
              <MessageCircle
                size={26}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
