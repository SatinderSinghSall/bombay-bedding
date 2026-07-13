"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Home,
  MapPin,
  MessageCircle,
  Sparkles,
  Star,
  Clock3,
} from "lucide-react";

export function About() {
  const features = [
    {
      title: "64+ Years of Trust",
      description:
        "Serving generations of families with quality home furnishings since 1962.",
    },
    {
      title: "Premium Quality",
      description:
        "Carefully selected products that combine comfort, durability and timeless style.",
    },
    {
      title: "Everything Under One Roof",
      description:
        "From luxury curtains to bespoke comforters, discover complete interior solutions.",
    },
    {
      title: "Personalized Assistance",
      description:
        "Tailored interior guidance to help you select pieces that complement your architectural profile.",
    },
  ];

  const products = [
    "Premium Curtain Fabrics",
    "Ready-Made Curtains",
    "Luxury Bedsheets",
    "Plush Comforters",
    "Cozy Blankets",
    "Ergonomic Pillows",
    "Designer Cushions",
    "Premium Towels",
    "Fine Table Covers",
    "Custom Sofa Covers",
  ];

  const timeline = [
    {
      year: "1962",
      title: "Our Journey Began",
      description:
        "Bombay Bedding opened its doors with a vision to bring premium textiles to growing homes.",
    },
    {
      year: "Decades of Growth",
      title: "Expanding the Horizon",
      description:
        "Evolved gracefully into curtains, complete home decor, and luxury lifestyle accents.",
    },
    {
      year: "Present Day",
      title: "A Trusted Landmark",
      description:
        "Durgapur's premier destination for exquisite fabrics, proudly serving across multiple generations.",
    },
  ];

  const stats = [
    { value: "64+", label: "Years of Trust" },
    { value: "10k+", label: "Happy Families" },
    { value: "100+", label: "Home Essentials" },
    { value: "1962", label: "Established" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-stone-50/60 py-20 sm:py-28 lg:py-36 selection:bg-neutral-900 selection:text-white border-t border-neutral-200"
    >
      {/* Structural Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[-10%] top-[15%] h-[600px] w-[600px] rounded-full bg-amber-100/30 blur-[140px]" />
        <div className="absolute right-[-5%] bottom-[10%] h-[700px] w-[700px] rounded-full bg-orange-100/20 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= MAIN SECTION TITLE INDICATOR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 flex flex-col items-center"
        >
          <h1 className="text-4xl font-display font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl">
            About Us
          </h1>
          <div className="mt-5 h-[3px] w-28 bg-amber-600 rounded-full" />
        </motion.div>

        {/* ================= ADDED SUB-HEADING BLOCK ================= */}
        <div className="mb-16 text-center">
          <p className="text-lg font-semibold uppercase tracking-[0.5em] text-neutral-900">
            ABOUT
          </p>

          <h2 className="mt-3 text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl md:text-7xl lg:text-8xl">
            Bombay Bedding
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-amber-600" />
        </div>

        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20 lg:mb-28 mx-auto text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-800 uppercase backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            Heritage Since 1962
          </div>

          <h2 className="mt-6 font-serif text-4xl font-normal tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl leading-[1.15]">
            Crafting elegant spaces with{" "}
            <span className="italic text-amber-700">
              comfort & timeless quality
            </span>
          </h2>

          <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-12 text-neutral-600 border-l-2 border-amber-600/30 pl-6 text-left">
            <p className="text-base leading-relaxed">
              For more than six decades, Bombay Bedding has been helping
              families shape warm, sophisticated environments. What began as a
              dedicated textile house in <strong>Durgapur</strong> has matured
              into the city’s most reliable destination for premium home
              furnishings.
            </p>
            <p className="text-base leading-relaxed">
              Our foundational promise of impeccable product sourcing,
              transparent value, and highly attentive service has earned the
              deep trust of generations, making our name benchmark for luxury
              home comfort.
            </p>
          </div>
        </div>

        {/* Master Showcase Grid */}
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24 items-start">
          {/* LEFT COLUMN: Sticky Imagery Frame */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/6] w-full overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-3 shadow-xl"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem]">
                <Image
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                  alt="Curated Showroom Display"
                  fill
                  className="object-cover transition duration-1000 group-hover:scale-105"
                  sizes="(max-w-1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
              </div>

              {/* Float Heritage Badge */}
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-white/90 p-6 shadow-xl backdrop-blur-md">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">
                  The Benchmark
                </span>
                <h3 className="text-3xl font-serif text-neutral-900 mt-1">
                  64 Years
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">
                  Of tailoring fine internal spaces with elite design metrics
                  since 1962.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Chronology & Feature Flow */}
          <div className="lg:col-span-7 space-y-20 lg:space-y-28">
            {/* The Historical Timeline */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-1.5 text-xs font-medium text-neutral-100">
                <Home className="h-3.5 w-3.5" />
                The Story Arc
              </div>
              <h3 className="mt-4 font-serif text-3xl font-normal text-neutral-900">
                A Lineage Built On Consistency
              </h3>

              <div className="relative mt-10 border-l border-neutral-200 pl-6 space-y-10 ml-2">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline Node Ring */}
                    <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-amber-700 bg-stone-50 transition-colors duration-300 group-hover:bg-amber-700" />

                    <div>
                      <span className="text-xs font-bold tracking-wider text-amber-800 bg-amber-50 rounded px-2 py-0.5">
                        {item.year}
                      </span>
                      <h4 className="mt-2 text-lg font-bold text-neutral-900">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Curated Collection Matrix */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">
                    Exquisite Catalog
                  </span>
                  <h3 className="font-serif text-2xl text-neutral-900">
                    Premium Home Essentials
                  </h3>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-2">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:border-amber-500/30 hover:shadow-md"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 text-neutral-600 transition-colors group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-neutral-800 group-hover:text-neutral-950 transition-colors">
                      {product}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Families Trust Us */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700">
                  <Clock3 className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-2xl text-neutral-900">
                  Why Families Choose Bombay Bedding
                </h3>
              </div>

              <div className="mt-8 grid gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
                  >
                    <h4 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                      {feature.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 pl-3.5">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Unified Metrics Dashboard */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-200/80 bg-white/60 p-5 text-center backdrop-blur-sm"
                >
                  <p className="font-serif text-3xl font-light tracking-tight text-neutral-900">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-neutral-400 uppercase">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Responsive Action Core */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#visit"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-neutral-900 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-neutral-800 shadow-md active:scale-98"
              >
                <MapPin className="h-4 w-4" />
                Visit Our Showroom
              </a>

              <a
                href="https://wa.me/919333041911"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-neutral-300 bg-white px-8 py-4 text-sm font-semibold tracking-wide text-neutral-700 transition-all hover:bg-neutral-50 active:scale-98"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                Chat on WhatsApp
              </a>

              <a
                href="#products"
                className="group inline-flex items-center justify-center gap-2 font-semibold text-sm text-neutral-900 py-3 sm:ml-auto transition-colors hover:text-amber-800"
              >
                Explore Collections
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Immersive Closing Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-28 overflow-hidden rounded-[2.5rem] bg-neutral-900 px-8 py-12 sm:px-12 lg:px-16 lg:py-16 shadow-2xl"
        >
          {/* Internal Geometric Lighting effects */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-600/10 blur-[80px] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-neutral-100/5 blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-12 justify-between">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500 uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                Bombay Bedding Difference
              </span>
              <h3 className="mt-4 font-serif text-3xl font-normal leading-tight text-white sm:text-4xl">
                Experience luxury furnishing{" "}
                <span className="italic text-neutral-300">
                  tailored for generations
                </span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                Explore an eclectic balance of premium utility lines and
                high-fashion drapes designed to enrich everyday domestic
                aesthetics.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[unset] sm:min-w-[340px] rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-neutral-400">Showroom Established</span>
                  <span className="font-semibold text-white">1962</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-neutral-400">Quality Checklist</span>
                  <span className="font-semibold text-emerald-400">
                    100% Verified
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Assistance Profile</span>
                  <span className="font-semibold text-white">
                    Bespoke Concierge
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/919333041911"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-amber-700 shadow-md active:scale-99"
              >
                <MessageCircle className="h-4 w-4" />
                Request Digital Catalogue
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
