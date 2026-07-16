"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Menu,
  MessageCircle,
  X,
  ChevronRight,
  MapPin,
  Clock,
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Reviews", href: "#reviews" },
    { label: "About", href: "#about" },
    { label: "Visit Us", href: "#visit" },
    { label: "Contact", href: "#contact" },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -12,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.03,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    closed: {
      opacity: 0,
      x: -10,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  return (
    <header className="fixed inset-x-0 top-3 px-3 sm:top-5 z-50 transition-all duration-300 select-none">
      {/* Expanded Max-Width container with fluid layouts across all breakpoints */}
      <div className="mx-auto max-w-7xl xl:max-w-[94%] px-0 sm:px-4 md:px-6 transition-all duration-300">
        <motion.nav
          animate={{
            height: isScrolled ? 72 : 80,
            borderRadius: mobileOpen ? "24px 24px 0px 0px" : "24px",
          }}
          transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
          className={`
            flex items-center justify-between
            border border-stone-200/60 xl:border-stone-300/60
            bg-white/90 lg:bg-stone-50/80 backdrop-blur-xl lg:backdrop-blur-md
            px-4 sm:px-5 md:px-6 xl:px-8
            shadow-[0_8px_30px_rgb(0,0,0,0.04)]
            transition-all duration-300
          `}
        >
          {/* BRANDING LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
          >
            {/* 1. Brand Logo Image */}
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 overflow-hidden rounded-xl bg-transparent transition-transform duration-300 group-hover:scale-[1.03]">
              <Image
                src="/logo-left.jpeg"
                alt="Bombay Bedding Logo"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40px, 44px"
                priority
              />
            </div>

            {/* 2. Original 'B' Icon Box */}
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-md transition-all duration-300 group-hover:scale-[1.03] group-hover:bg-amber-800">
              <span className="font-serif text-base sm:text-lg font-bold tracking-wide">
                B
              </span>
            </div>

            {/* 3. Brand Text Details */}
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-xs sm:text-sm md:text-base xl:text-lg font-medium tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-amber-900 leading-tight">
                Bombay Bedding
              </h1>
              {/* Visible on mid-to-large screens onwards safely */}
              <p className="hidden md:block text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.22em] sm:tracking-[0.32em] font-bold text-stone-400 mt-0.5 whitespace-nowrap">
                Exclusive Furnishing Showroom
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION — Changed breakpoint to lg:flex to avoid mid-screen crunching */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 rounded-full border border-stone-300/50 bg-stone-200/30 p-1.5 backdrop-blur-md mx-2 max-w-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative rounded-full px-3 py-2 xl:px-5 text-[10px] xl:text-[11px] font-bold uppercase tracking-wider xl:tracking-widest text-stone-600 transition-all duration-300 hover:text-neutral-950 whitespace-nowrap"
              >
                {item.label}
                <span className="absolute left-3 right-3 xl:left-5 xl:right-5 bottom-1 h-[2px] w-0 rounded-full bg-amber-800 transition-all duration-300 group-hover:w-[calc(100%-24px)] xl:group-hover:w-[calc(100%-40px)]" />
              </a>
            ))}
          </div>

          {/* ACTIONS HUB */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Desktop Call To Action */}
            <a
              href="https://wa.me/919333041911"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2.5 md:px-5 md:py-3 xl:px-6 text-[11px] xl:text-xs font-bold uppercase tracking-wider xl:tracking-widest text-white shadow-sm hover:bg-neutral-800 hover:shadow-md active:scale-98 transition-all duration-300"
            >
              <MessageCircle
                size={14}
                className="text-emerald-400 fill-emerald-400/10"
              />
              <span>Concierge</span>
            </a>

            {/* Mobile Actions Button */}
            <a
              href="https://wa.me/919333041911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex sm:hidden h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 transition-colors"
              aria-label="WhatsApp Concierge"
            >
              <MessageCircle size={15} />
            </a>

            {/* Hamburger Button visible across Mobile & Tablet views (hidden lg) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-neutral-800 shadow-sm transition-colors hover:bg-stone-100 lg:hidden"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.nav>

        {/* IMMERSIVE MOBILE & TABLET MENU OVERLAY */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden fixed inset-x-3 top-[82px] bottom-4 z-40 bg-white/98 backdrop-blur-2xl flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              {/* Navigation Items Area */}
              <div className="px-6 py-6 overflow-y-auto flex-1">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.label}
                      variants={itemVariants}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center justify-between border-b border-stone-100/70 py-3.5 font-serif text-lg tracking-wide text-stone-800 transition-all hover:text-amber-950 px-1"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-800/0 transition-all duration-300 group-hover:bg-amber-800 scale-0 group-hover:scale-100" />
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-stone-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-amber-900"
                      />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Showroom Footer Area */}
              <motion.div
                variants={itemVariants}
                className="p-5 bg-stone-50 border-t border-stone-100 space-y-3.5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-stone-200/40 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="p-2 bg-stone-50 rounded-lg text-amber-800 shrink-0">
                      <MapPin size={15} />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400">
                        Our Showroom
                      </p>
                      <p className="text-xs font-semibold text-stone-800 mt-0.5">
                        Durgapur Station Road
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-stone-200/40 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                    <div className="p-2 bg-stone-50 rounded-lg text-amber-800 shrink-0">
                      <Clock size={15} />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400">
                        Hours of Operation
                      </p>
                      <p className="text-xs font-semibold text-stone-700 mt-0.5">
                        Open Daily • 10:00 AM – 8:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919333041911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-neutral-950 active:scale-[0.99] transition-all"
                >
                  <MessageCircle
                    size={15}
                    className="text-emerald-400 fill-emerald-400/10"
                  />
                  <span>Connect With Assistant</span>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
