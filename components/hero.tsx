"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  Clock3,
} from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf9f7] pt-32 pb-20 sm:pt-40 lg:pt-48 lg:pb-28"
    >
      {/* Editorial Sophisticated Ambient Blurs */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-stone-200/30 blur-[130px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-100/20 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1450px] px-4 sm:px-8 lg:px-12 w-full">
        {/* ================= BIG & CENTERED LOGO ROW with EXPANDED SIDE LOGOS ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center items-center mb-12 sm:mb-16 md:mb-20 px-4"
        >
          <div className="w-full max-w-[500px] sm:max-w-[750px] md:max-w-[1000px] lg:max-w-[1200px] flex items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Left Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/logo-left.jpeg"
                alt="Bombay Bedding Left Logo"
                width={160}
                height={160}
                priority
                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain rounded-full shadow-md border border-stone-200/40 bg-black"
              />
            </div>

            {/* Main Center Logo */}
            <div className="flex-grow max-w-[350px] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[750px] mx-auto">
              <Image
                src="/logo.jpg"
                alt="Bombay Bedding Banner Logo"
                width={1200}
                height={400}
                priority
                className="w-full h-auto object-contain rounded-xl shadow-md border border-stone-200/40"
              />
            </div>

            {/* Right Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/logo-right.jpeg"
                alt="Bombay Bedding Right Logo"
                width={160}
                height={160}
                priority
                className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain rounded-full shadow-md border border-stone-200/40 bg-black"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:gap-8 lg:grid-cols-[1.05fr_.95fr] items-center">
          {/* ================= LEFT CONTENT COLUMN ================= */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-col justify-center"
          >
            {/* Elegant Store Tag */}
            <motion.div variants={item} className="w-fit">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-stone-300/80 bg-white/70 backdrop-blur-md px-4 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <Star size={13} className="fill-amber-400 text-amber-400" />
                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-stone-700">
                  Durgapur's Premium Furnishing Destination
                </span>
              </div>
            </motion.div>

            {/* Typography Heading */}
            <motion.div variants={item} className="mt-6 sm:mt-8">
              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-6xl xl:text-7xl !leading-[1.1]">
                Luxury Furnishings
                <span className="block font-normal italic text-stone-500 mt-1">
                  crafted for fine living.
                </span>
              </h1>
            </motion.div>

            {/* Editorial Body Text */}
            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-stone-600 font-light"
            >
              Bombay Bedding brings handpicked luxury to Durgapur Station Road.
              Explore premium bed linen, architectural curtains, rich quilts,
              and orthopaedic mattresses designed to balance timeless aesthetics
              with ultimate physical comfort.
            </motion.p>

            {/* Premium Buttons */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <a
                href="https://wa.me/919333041911"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-stone-950 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-stone-850 hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                Connect on WhatsApp
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full border border-stone-300/90 bg-white px-7 py-4 text-sm font-medium text-stone-900 transition-all duration-300 hover:border-stone-950 hover:bg-stone-50"
              >
                Explore Collections
              </a>
            </motion.div>

            {/* Structural Trust Banner */}
            <motion.div
              variants={item}
              className="mt-12 sm:mt-16 pt-8 border-t border-stone-200/80 grid gap-6 grid-cols-1 sm:grid-cols-3"
            >
              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-white rounded-xl border border-stone-200/60 shadow-sm text-stone-800">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    Premium Quality
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                    Exclusively curated, high-thread count fabrics.
                  </p>
                </div>
              </div>

              {/* UPDATED: Store Hours & Thursday Closing Status */}
              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-white rounded-xl border border-stone-200/60 shadow-sm text-stone-800">
                  <Clock3 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    Store Hours
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                    9:30 AM – 9:30 PM{" "}
                    <span className="block font-medium text-amber-800 mt-0.5">
                      (Closed Thursday)
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <div className="p-2 bg-white rounded-xl border border-stone-200/60 shadow-sm text-stone-800">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    Station Road
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5 leading-normal">
                    Spacious showroom venue in Durgapur.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT ASYMMETRIC VISUAL COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.215, 0.61, 0.355, 1],
              delay: 0.2,
            }}
            className="relative w-full h-fit flex flex-col sm:flex-row gap-4 items-stretch justify-center"
          >
            {/* Primary Display Block */}
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-stone-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex-1 min-h-[340px] sm:min-h-[500px] lg:h-[580px]">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?fit=crop&w=1000&q=90"
                alt="Bombay Bedding Premium Master Showroom Display"
                fill
                priority
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white backdrop-blur-md bg-stone-900/40 p-4 rounded-xl border border-white/10">
                <p className="text-[10px] tracking-widest font-bold uppercase text-stone-200">
                  Featured Style
                </p>
                <h3 className="text-lg font-medium mt-0.5">
                  Architectural Bedroom Sets
                </h3>
              </div>
            </div>

            {/* Right Mini Editorial Column */}
            <div className="flex flex-row sm:flex-col gap-4 w-full sm:w-[180px] lg:w-[200px] shrink-0">
              <div className="relative rounded-2xl overflow-hidden flex-1 h-[140px] sm:h-full border border-stone-200 bg-white shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fit=crop&w=600&q=80"
                  alt="Luxury Curtain Texture Collection"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <span className="absolute bottom-3 left-3 text-white font-medium text-xs tracking-wide shadow-sm">
                  Curtains
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden flex-1 h-[140px] sm:h-full border border-stone-200 bg-white shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?fit=crop&w=600&q=80"
                  alt="Premium Bedding and Cushions Store"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <span className="absolute bottom-3 left-3 text-white font-medium text-xs tracking-wide shadow-sm">
                  Linen Sets
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
