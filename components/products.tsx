"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export function Products() {
  const products = [
    {
      name: "Bed Sheets",
      bengali: "বেডশীট",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      description: "Soft Egyptian cotton in premium prints & solid colours.",
    },
    {
      name: "Bed Covers",
      bengali: "বেড কভার",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      description: "Luxury quilted bed covers for elegant bedrooms.",
    },
    {
      name: "Curtains",
      bengali: "পর্দা",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      description: "Designer curtains to transform every living space.",
    },
    {
      name: "Curtain Fabric",
      bengali: "পর্দার কাপড়",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      description: "Premium curtain fabrics in modern textures & colours.",
    },
    {
      name: "Towels",
      bengali: "তোয়ালে",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      description: "Soft absorbent towels crafted for everyday luxury.",
    },
    {
      name: "Pillows",
      bengali: "বালিশ",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      description: "Comfortable pillows for a restful night's sleep.",
    },
    {
      name: "Cushions",
      bengali: "কুশন",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      description: "Decorative cushions that add warmth and elegance.",
    },
    {
      name: "Blankets",
      bengali: "কম্বল",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      description: "Warm premium blankets for every season.",
    },
    {
      name: "Quilts",
      bengali: "কাঁথা",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      description: "Beautiful quilts with timeless craftsmanship.",
    },
    {
      name: "Mattresses",
      bengali: "ম্যাট্রেস",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      description: "Premium mattresses designed for superior comfort.",
    },
    {
      name: "Door Mats",
      bengali: "ডোর ম্যাট",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      description: "Stylish entrance mats that welcome every guest.",
    },
    {
      name: "Table Linen",
      bengali: "টেবিল লিনেন",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      description: "Elegant table linens for beautiful dining spaces.",
    },
  ];

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-gradient-to-b from-white via-stone-50/40 to-white py-16 sm:py-24 lg:py-32 select-none border-t border-neutral-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-20 text-center flex flex-col items-center"
        >
          {/* Premium Enlarged Eyebrow Badge */}
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-neutral-200/60 bg-neutral-50 px-5 py-2 shadow-sm backdrop-blur-sm">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.45em] text-neutral-500 pl-[0.45em]">
              Our Collection
            </span>
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-normal font-serif tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl leading-[1.15]">
            Luxury Home Furnishings
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-500">
            Discover timeless bedding, premium fabrics, elegant curtains,
            luxurious cushions and carefully crafted home essentials that bring
            warmth and sophistication to every room.
          </p>
        </motion.div>

        {/* Featured Collection Banner Split */}
        <div className="mb-16 sm:mb-24 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Left Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden rounded-[24px] sm:rounded-[32px] border border-neutral-200/40 bg-neutral-900 shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
              alt="Bed Collection"
              fill
              className="object-cover opacity-90 transition duration-1000 ease-out group-hover:scale-105 group-hover:opacity-80"
              sizes="(max-w-1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                Featured Collection
              </span>

              <h3 className="mt-4 sm:mt-6 font-serif text-2xl sm:text-4xl text-white font-light tracking-wide">
                Luxury Bed Sheets
              </h3>

              <p className="mt-2.5 max-w-sm text-xs sm:text-sm leading-relaxed text-neutral-300">
                Crafted from premium cotton with elegant finishes for unmatched
                comfort.
              </p>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 sm:mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-900 shadow-lg transition duration-300 hover:bg-neutral-50 active:scale-98"
              >
                <MessageCircle size={16} className="text-emerald-600" />
                Explore Collection
              </a>
            </div>
          </motion.div>

          {/* Right Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative h-[380px] sm:h-[460px] lg:h-[520px] overflow-hidden rounded-[24px] sm:rounded-[32px] border border-neutral-200/40 bg-neutral-900 shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
              alt="Curtains"
              fill
              className="object-cover opacity-90 transition duration-1000 ease-out group-hover:scale-105 group-hover:opacity-80"
              sizes="(max-w-1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent" />

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                Premium Fabrics
              </span>

              <h3 className="mt-4 sm:mt-6 font-serif text-2xl sm:text-4xl text-white font-light tracking-wide">
                Designer Curtains
              </h3>

              <p className="mt-2.5 max-w-sm text-xs sm:text-sm leading-relaxed text-neutral-300">
                Modern curtain fabrics that perfectly blend elegance with
                functionality.
              </p>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 sm:mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-900 shadow-lg transition duration-300 hover:bg-neutral-50 active:scale-98"
              >
                <MessageCircle size={16} className="text-emerald-600" />
                Explore Collection
              </a>
            </div>
          </motion.div>
        </div>

        {/* Master Products Grid Stack */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-[20px] sm:rounded-[26px] bg-white border border-neutral-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.09)] transition-all duration-500"
            >
              {/* Card Image Core Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-640px) 50vw, (max-w-1024px) 33vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-neutral-950/5 to-transparent mix-blend-multiply" />

                {/* Local Bengali Subtag Badge */}
                <div className="absolute left-3 top-3 sm:left-4 sm:top-4 z-10">
                  <span className="inline-block rounded-full bg-white/95 px-3 py-1 text-[10px] sm:text-xs font-medium text-neutral-900 shadow-sm backdrop-blur">
                    {product.bengali}
                  </span>
                </div>
              </div>

              {/* Dynamic Content Details Block */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-6 bg-white">
                <div className="mb-4 sm:mb-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                    Premium Collection
                  </p>

                  <h3 className="mt-1.5 text-lg sm:text-xl font-medium tracking-tight text-neutral-900">
                    {product.name}
                  </h3>

                  <p className="mt-1.5 line-clamp-2 text-xs sm:text-sm leading-relaxed text-neutral-500">
                    {product.description}
                  </p>
                </div>

                {/* Premium Micro-Interactive Action Row */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-xl bg-neutral-900 px-4 py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-amber-800 shadow-sm active:scale-98"
                >
                  <div className="flex items-center gap-2 truncate">
                    <MessageCircle size={14} className="shrink-0" />
                    <span className="truncate">Check on WhatsApp</span>
                  </div>

                  <ArrowUpRight
                    size={14}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Notice / Disclaimer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1] as const,
          }}
          className="mt-24 mb-6 mx-auto max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-500/[0.02] p-5 backdrop-blur-md">
            {/* Left accent accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-amber-600/80" />

            <div className="flex items-start gap-3.5 pl-2">
              <span className="mt-0.5 text-base text-amber-600 shrink-0">
                ★
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 font-light">
                <strong className="font-semibold text-neutral-800 tracking-wide">
                  Please note:
                </strong>{" "}
                All product photos shown on this website are for representation
                purposes only. Actual product designs, colours, patterns, and
                sizes may vary slightly due to studio lighting and natural
                fabric conditions. For exact stock updates, visit our Durgapur
                showroom or request live showroom images directly via WhatsApp.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Global Structural Closing Row Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 sm:mt-28"
        >
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] bg-neutral-900 shadow-2xl">
            {/* Ambient Lighting Layer */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/10 blur-[60px] pointer-events-none" />

            <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:p-16">
              {/* Panel Action Narrative */}
              <div className="lg:col-span-7">
                <span className="inline-block rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur">
                  Premium Furnishing Store
                </span>

                <h3 className="mt-4 font-serif text-2xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                  Looking for Our Complete Catalogue?
                </h3>

                <p className="mt-4 text-xs sm:text-sm lg:text-base leading-relaxed text-neutral-400 max-w-xl">
                  Browse hundreds of premium furnishing products including
                  bedding, curtains, upholstery fabrics, cushions, blankets,
                  mattresses and much more.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-white px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-900 transition shadow-md hover:bg-neutral-50 active:scale-98"
                  >
                    <MessageCircle size={16} className="text-emerald-600" />
                    Chat on WhatsApp
                  </a>

                  <button className="rounded-full border border-white/20 bg-white/5 px-5 sm:px-6 py-3 text-xs sm:text-sm font-medium text-white transition hover:border-white hover:bg-white/10 active:scale-98">
                    Visit Showroom
                  </button>
                </div>
              </div>

              {/* Panel Statistical Framework Indicators */}
              <div className="grid grid-cols-2 gap-4 lg:col-span-5 w-full">
                <div className="rounded-xl sm:rounded-2xl border border-white/5 bg-white/5 p-4 sm:p-6 backdrop-blur-sm">
                  <h4 className="font-serif text-3xl sm:text-4xl font-light text-white">
                    25+
                  </h4>
                  <p className="mt-1 text-[11px] font-medium tracking-wide text-neutral-400 uppercase">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-white/5 bg-white/5 p-4 sm:p-6 backdrop-blur-sm">
                  <h4 className="font-serif text-3xl sm:text-4xl font-light text-white">
                    500+
                  </h4>
                  <p className="mt-1 text-[11px] font-medium tracking-wide text-neutral-400 uppercase">
                    Premium Products
                  </p>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-white/5 bg-white/5 p-4 sm:p-6 backdrop-blur-sm">
                  <h4 className="font-serif text-3xl sm:text-4xl font-light text-white">
                    10K+
                  </h4>
                  <p className="mt-1 text-[11px] font-medium tracking-wide text-neutral-400 uppercase">
                    Happy Customers
                  </p>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-white/5 bg-white/5 p-4 sm:p-6 backdrop-blur-sm">
                  <h4 className="font-serif text-3xl sm:text-4xl font-light text-white">
                    100%
                  </h4>
                  <p className="mt-1 text-[11px] font-medium tracking-wide text-neutral-400 uppercase">
                    Premium Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
