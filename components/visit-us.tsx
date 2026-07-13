"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Navigation,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function VisitUs() {
  const [currentDayIndex, setCurrentDayIndex] = useState<number | null>(null);

  // Safely grab the current system day index on the client side
  useEffect(() => {
    // JavaScript gets Sunday as 0, Monday as 1... Saturday as 6
    // We adjust it to match our array layout (Monday = 0, Sunday = 6)
    const jsDay = new Date().getDay();
    const adjustedDay = jsDay === 0 ? 6 : jsDay - 1;
    setCurrentDayIndex(adjustedDay);
  }, []);

  const detailedHours = [
    { name: "Monday", hours: "10:00 AM – 8:00 PM" },
    { name: "Tuesday", hours: "10:00 AM – 8:00 PM" },
    { name: "Wednesday", hours: "10:00 AM – 8:00 PM" },
    { name: "Thursday", hours: "10:00 AM – 8:00 PM" },
    { name: "Friday", hours: "10:00 AM – 8:00 PM" },
    { name: "Saturday", hours: "10:00 AM – 8:00 PM" },
    { name: "Sunday", hours: "11:00 AM – 7:00 PM" },
  ];

  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-[#faf9f7] py-24 lg:py-32 border-t border-neutral-200"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-stone-200/40 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-amber-100/30 blur-[150px]" />

      <div className="mx-auto max-w-[1450px] px-6 lg:px-12">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-stone-300 bg-white/80 px-5 py-2 backdrop-blur-xl shadow-sm mb-12">
            <Navigation size={15} className="text-stone-700" />
            <span className="text-xl font-semibold uppercase tracking-[0.28em] text-stone-600">
              Visit Our Showroom
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-stone-900 sm:text-6xl">
            Experience
            <br />
            Bombay Bedding
          </h2>

          {/* Paragraph */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-600">
            Step into our showroom and discover thoughtfully curated furnishings
            crafted for comfort, elegance and timeless living. Explore premium
            collections, experience the fabrics firsthand, and let our team help
            you find the perfect pieces for your home.
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-stone-200 pt-8">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-stone-900">
                15+
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                Years
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-stone-900">
                5K+
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                Customers
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-stone-900">
                7
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                Days Open
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[1.4fr_.8fr]"
        >
          {/* ================= GOOGLE MAP ================= */}
          <motion.div variants={item}>
            <div className="overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,.08)]">
              <div className="flex items-center justify-between border-b border-stone-200 px-8 py-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                    Showroom Location
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-stone-900">
                    Durgapur Station Road
                  </h3>
                </div>
                <a
                  href="https://maps.google.com/?q=bombay+bedding+durgapur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition-all hover:border-stone-900 hover:bg-stone-100"
                >
                  Open Maps
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <iframe
                className="h-[420px] w-full lg:h-[720px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.755761913596!2d87.32117!3d23.84193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f720000000001%3A0x1234567890abcdef!2sDurgapur%20Station%20Road!5e0!3m2!1sen!2sin!4v1234567890"
                title="Bombay Bedding Location"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div variants={container} className="flex flex-col gap-6">
            {/* ================= ADDRESS ================= */}
            <motion.div
              variants={item}
              whileHover={{ y: -5 }}
              className="rounded-[30px] border border-stone-200 bg-white/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,.06)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100">
                  <MapPin size={26} className="text-stone-800" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                    Visit Us
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-stone-900">
                    Our Showroom
                  </h3>
                </div>
              </div>

              <div className="mt-8 space-y-2 text-stone-600">
                <p>Durgapur Station Road</p>
                <p>Durgapur, West Bengal</p>
                <p>India</p>
              </div>

              <a
                href="https://maps.google.com/?q=bombay+bedding+durgapur"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm font-semibold text-stone-900 transition-all hover:border-stone-900 hover:bg-stone-100"
              >
                Get Directions
                <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* ================= NEW PREMIUM HOURS PANEL ================= */}
            <motion.div
              variants={item}
              whileHover={{ y: -5 }}
              className="rounded-[30px] border border-stone-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,.06)] overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-white">
                  <Clock size={26} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                    Opening Hours
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-stone-900">
                    Showroom Schedule
                  </h3>
                </div>
              </div>

              <div className="mt-8 space-y-1.5 relative">
                {detailedHours.map((dayData, index) => {
                  const isToday = currentDayIndex === index;
                  return (
                    <div
                      key={dayData.name}
                      className={`relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                        isToday
                          ? "text-stone-900 font-medium"
                          : "text-stone-600 hover:bg-stone-50/50"
                      }`}
                    >
                      {/* Active Day Highlighting Capsule */}
                      {isToday && (
                        <motion.div
                          layoutId="activeDayBackground"
                          className="absolute inset-0 bg-stone-100 rounded-xl border border-stone-200/60 -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}

                      <div className="flex items-center gap-2.5">
                        <span className="text-sm tracking-wide">
                          {dayData.name}
                        </span>
                        {isToday && (
                          <span className="inline-flex items-center rounded-md bg-stone-900 px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase text-white shadow-sm scale-90">
                            Today
                          </span>
                        )}
                      </div>

                      <span
                        className={`text-sm ${isToday ? "text-stone-900 font-semibold" : "text-stone-500 font-normal"}`}
                      >
                        {dayData.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span>* Public holidays subject to custom hours</span>
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Updates
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= BOTTOM ROW: CONTACT & WHY VISIT US ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* CONTACT CARD */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="rounded-[30px] border border-stone-200 bg-white/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,.06)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100">
                <Phone size={26} className="text-stone-800" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                  Contact
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-stone-900">
                  Get In Touch
                </h3>
              </div>
            </div>

            <a
              href="tel:+919876543210"
              className="mt-8 block text-3xl font-semibold tracking-tight text-stone-900 transition hover:text-stone-700"
            >
              +91 98765 43210
            </a>
            <p className="mt-3 text-stone-600">
              Call us for product enquiries, pricing or showroom assistance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 transition-all duration-300 hover:border-stone-900 hover:bg-stone-100"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          {/* WHY VISIT US CARD */}
          <motion.div
            variants={item}
            className="overflow-hidden rounded-[30px] bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,.18)]"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              WHY VISIT US
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight">
              Experience Quality
              <br />
              Before You Buy
            </h3>
            <p className="mt-5 leading-7 text-white/70">
              Feel the fabrics, compare collections, and receive expert guidance
              from our team to choose furnishings perfectly suited for your
              home.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
              <div>
                <h4 className="text-2xl font-semibold">15+</h4>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/50">
                  Years
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">5K+</h4>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/50">
                  Customers
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold">4.9★</h4>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/50">
                  Rating
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
