"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Durgapur",
      rating: 5,
      text: "Outstanding quality! The bed sheets are incredibly soft and durable. Customer service was exceptional.",
      size: "large",
    },
    {
      name: "Rajesh Kumar",
      location: "Asansol",
      rating: 5,
      text: "Best furnishings in the region. Home delivery was prompt and the packaging was perfect.",
      size: "normal",
    },
    {
      name: "Anita Dutta",
      location: "Durgapur",
      rating: 5,
      text: "Absolutely in love with my new curtains! The fabric quality is premium and the designs are beautiful.",
      size: "small",
    },
    {
      name: "Vikram Singh",
      location: "Raniganj",
      rating: 5,
      text: "Visited the showroom and was impressed by the collection. Staff was very helpful in choosing the right products.",
      size: "normal",
    },
    {
      name: "Deepa Nair",
      location: "Durgapur",
      rating: 5,
      text: "The pillows are so comfortable! Best purchase I made for my bedroom. Highly recommended!",
      size: "large",
    },
    {
      name: "Arjun Patel",
      location: "Durgapur",
      rating: 5,
      text: "Great experience from browsing to purchase. The team understands customer needs perfectly.",
      size: "small",
    },
  ];

  const getSize = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2";
      case "small":
        return "md:col-span-1";
      default:
        return "md:col-span-1";
    }
  };

  const getRowHeight = (size: string) => {
    switch (size) {
      case "large":
        return "md:min-h-64";
      case "small":
        return "min-h-56";
      default:
        return "min-h-56";
    }
  };

  return (
    <section
      id="reviews"
      className="py-20 lg:py-28 bg-white border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Small Badge */}
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 mb-12">
            <span className="text-xl font-semibold tracking-[0.25em] uppercase text-neutral-600">
              Customer Stories
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-neutral-900 leading-tight">
            Trusted by{" "}
            <span className="text-warm-accent">Thousands of Families</span>
            <br />
            Across Durgapur
          </h2>

          {/* Paragraph */}
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-neutral-600">
            Every review reflects our commitment to premium quality, thoughtful
            craftsmanship, and exceptional customer service. Here's what our
            customers have to say about their Bombay Bedding experience.
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={30}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <div className="h-10 w-px bg-neutral-300" />

            <div className="text-left">
              <p className="text-4xl font-display font-bold text-neutral-900">
                4.9
              </p>
              <p className="text-sm text-neutral-500">
                Based on{" "}
                <span className="font-semibold">500+ Happy Reviews</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className={`${getSize(review.size)} ${getRowHeight(review.size)} bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-6 shadow-premium hover:shadow-premium-lg transition-all border border-neutral-200 flex flex-col justify-between group`}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-700 leading-relaxed mb-6 text-sm flex-grow">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-neutral-200 pt-4">
                <p className="font-display font-semibold text-neutral-900">
                  {review.name}
                </p>
                <p className="text-xs text-neutral-600">{review.location}</p>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-warm-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
