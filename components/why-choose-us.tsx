"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Store,
  HeartHandshake,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-gradient-to-b from-stone-50/60 via-[#faf8f5] to-white py-24 sm:py-32 lg:py-40 border-t border-neutral-200/70 select-none"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-100/15 blur-3xl" />
        <div className="absolute right-24 top-32 h-64 w-64 rounded-full border border-stone-200/60" />
        <div className="absolute bottom-24 left-20 h-32 w-32 rounded-full border border-stone-200/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Premium Eyebrow Label Banner */}
        {/* Unified Centered Main Heading Block */}
        <div className="mb-16 sm:mb-24 text-center flex flex-col items-center">
          {/* Premium Center Eyebrow Pill */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-neutral-200/60 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.45em] text-stone-500 pl-[0.45em]">
              Why Bombay Bedding
            </span>
          </motion.div>

          {/* Large Centered Title */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="text-4xl font-light font-serif leading-[1.15] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl">
              More than a furnishing showroom.
              <span className="block mt-3 text-stone-500 font-sans font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                A destination for timeless comfort.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Editorial Layout */}
        <div className="mt-20 lg:mt-28 grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-neutral-200/40 bg-stone-100 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80"
                alt="Luxury bedroom furnishing"
                width={900}
                height={1100}
                className="h-[500px] sm:h-[650px] w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent mix-blend-multiply" />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 left-6 sm:left-10 rounded-[20px] sm:rounded-[28px] border border-neutral-200/50 bg-white/95 px-8 py-6 sm:px-10 sm:py-8 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)] backdrop-blur-md"
            >
              <h3 className="font-serif text-5xl sm:text-6xl font-light leading-none tracking-tight text-neutral-900">
                15
                <span className="text-amber-600 font-sans font-normal">+</span>
              </h3>
              <p className="mt-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-stone-400">
                Years of Experience
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:pl-6"
          >
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg sm:text-xl leading-relaxed sm:leading-9 text-stone-600 font-light"
            >
              At Bombay Bedding, we believe furnishing is more than just buying
              fabrics—it's about creating spaces where families feel
              comfortable, relaxed and truly at home. Every collection inside
              our showroom is handpicked for its craftsmanship, quality and
              timeless appeal.
            </motion.p>

            {/* Premium Features */}
            <motion.div
              variants={stagger}
              className="mt-12 space-y-8 sm:space-y-10"
            >
              {[
                {
                  icon: ShieldCheck,
                  title: "Premium Quality Fabrics",
                  text: "Curated collections from trusted manufacturers with exceptional craftsmanship.",
                },
                {
                  icon: Store,
                  title: "Experience Before You Buy",
                  text: "Feel every fabric, compare designs and receive expert guidance in our showroom.",
                },
                {
                  icon: HeartHandshake,
                  title: "Trusted Across Durgapur",
                  text: "Thousands of families continue choosing Bombay Bedding for quality and service.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="flex items-start gap-5 group/item"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-200/80 bg-white text-neutral-900 shadow-sm transition-colors duration-300 group-hover/item:bg-neutral-900 group-hover/item:text-white">
                      <Icon size={20} className="stroke-[1.5]" />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-stone-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Minimal Bullet List Grid */}
            <motion.div
              variants={fadeUp}
              className="mt-12 grid gap-4 grid-cols-2 sm:gap-5 border-t border-stone-200/60 pt-10"
            >
              {[
                "Bed Sheets",
                "Curtains",
                "Mattresses",
                "Quilts",
                "Blankets",
                "Towels",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 group/bullet"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-300 bg-white transition-colors duration-300 group-hover/bullet:border-amber-600 group-hover/bullet:bg-amber-50/30">
                    <Check
                      size={13}
                      className="text-stone-600 group-hover/bullet:text-amber-700"
                    />
                  </div>
                  <span className="text-sm font-medium text-stone-700">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Group Row */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href="#visit"
                className="group/btn inline-flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800 shadow-md hover:shadow-xl active:scale-98"
              >
                Visit Our Showroom
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </a>

              <a
                href="#products"
                className="inline-flex items-center rounded-full border border-stone-300 bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold text-neutral-900 transition-all duration-300 hover:bg-stone-50 hover:border-stone-400 active:scale-98"
              >
                Explore Collection
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Statistics Layout Dashboard */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 sm:mt-32 grid gap-8 border-t border-stone-200 pt-14 grid-cols-3"
        >
          {[
            {
              number: "15+",
              label: "Years of Experience",
            },
            {
              number: "5000+",
              label: "Happy Customers",
            },
            {
              number: "4.9★",
              label: "Customer Rating",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="text-center sm:text-left"
            >
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900">
                {item.number}
              </h3>
              <p className="mt-3 text-[9px] sm:text-xs font-bold uppercase tracking-[0.35em] text-stone-400 leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
