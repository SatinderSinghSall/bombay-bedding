"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Clock3,
  Phone,
  MapPin,
  Sparkles,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 10 Second timed delay before triggering the modal
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 select-none">
        {/* Backdrop — Clicking outside will NOT close the modal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-stone-950/75 backdrop-blur-md"
        />

        {/* Premium Modal Layout Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="relative w-full max-w-5xl bg-[#faf9f7] rounded-[28px] overflow-hidden border border-stone-200/80 shadow-[0_35px_80px_rgba(0,0,0,0.4)] grid md:grid-cols-[1.15fr_0.85fr] z-10 max-h-[85vh] md:max-h-[640px]"
        >
          {/* High-Contrast Visible Strict Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-stone-900 border border-stone-800 text-stone-100 shadow-md transition-all duration-300 hover:bg-amber-600 hover:text-white hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
            aria-label="Close premium window"
          >
            <X size={18} strokeWidth={2.5} />
          </button>

          {/* ================= LEFT SECTION: DATA & SUMMARY ================= */}
          <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-between overflow-y-auto min-h-0">
            <div>
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50/50 px-3.5 py-1.5 shadow-sm">
                <Sparkles
                  size={13}
                  className="text-amber-600 fill-amber-500/30"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-800">
                  Legacy Showroom Since 1962
                </span>
              </div>

              {/* Title Header */}
              <h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-stone-950 leading-[1.15]">
                Welcome to <br />
                <span className="font-normal italic text-stone-500 tracking-normal">
                  Bombay Bedding
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                Discover over six decades of dedicated home crafting. We bring
                handpicked premium textiles, mattress designs, and architectural
                drapery directly to Durgapur.
              </p>

              <div className="my-6 border-t border-stone-200/80" />

              {/* Core Quick Summary Info */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-stone-100 border border-stone-200/40 text-stone-800 shrink-0 flex items-center justify-center w-9 h-9">
                    <ShoppingBag size={16} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 leading-none">
                      Curated Specialties
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-500 font-light mt-1 leading-relaxed">
                      Premium Fabric Rolls, Custom Curtains, Luxury Linens, &
                      Orthopaedic Mattresses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-stone-100 border border-stone-200/40 text-stone-800 shrink-0 flex items-center justify-center w-9 h-9">
                    <Clock3 size={16} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 leading-none">
                      Showroom Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-500 font-light mt-1">
                      Open Daily:{" "}
                      <span className="font-medium text-stone-800">
                        10:00 AM – 8:00 PM
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-stone-100 border border-stone-200/40 text-stone-800 shrink-0 flex items-center justify-center w-9 h-9">
                    <MapPin size={16} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 leading-none">
                      Storefront Destination
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-500 font-light mt-1">
                      Station Road, Near Heart of Durgapur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Primary CTA */}
            <div className="mt-8 pt-5 border-t border-stone-200 flex flex-col sm:flex-row gap-4 items-center justify-between shrink-0">
              <div className="text-center sm:text-left">
                <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-widest">
                  Direct Line
                </span>
                <a
                  href="tel:+919876543210"
                  className="text-sm font-semibold text-stone-900 transition-colors hover:text-amber-700 inline-flex items-center gap-1.5 mt-0.5"
                >
                  <Phone size={13} className="text-stone-400" /> +91 98765 43210
                </a>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="group w-full sm:w-auto px-6 py-3 rounded-full bg-stone-950 text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 hover:bg-stone-800 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                Enter Showroom
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* ================= RIGHT SECTION: EDITORIAL IMAGE ================= */}
          <div className="relative hidden md:block w-full h-full bg-stone-200">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fit=crop&w=800&q=90"
              alt="Bombay Bedding Premium Luxury Showroom Setup"
              fill
              priority
              sizes="40vw"
              className="object-cover brightness-[0.95]"
            />
            {/* Elegant Gradient Scrim Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-amber-400 block mb-1">
                Our Mission
              </span>
              <p className="text-sm font-light leading-relaxed italic opacity-95">
                “Bringing comfort, elegance, and uncompromised value to every
                home we serve since 1962.”
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
