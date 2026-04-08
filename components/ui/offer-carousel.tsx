"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Tag,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Offer {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  brandLogoSrc?: string;
  brandLogoIcon?: LucideIcon;
  brandName: string;
  promoCode?: string;
  href: string;
}

interface OfferCardProps {
  offer: Offer;
}

const OfferCard = React.forwardRef<HTMLAnchorElement, OfferCardProps>(({ offer }, ref) => (
  <motion.a
    ref={ref}
    href={offer.href}
    className="group relative h-[380px] w-[300px] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/90 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    style={{ perspective: "1000px" }}
  >
    <img
      src={offer.imageSrc}
      alt={offer.imageAlt}
      className="absolute inset-x-0 top-0 h-2/4 w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-x-0 bottom-0 flex h-2/4 flex-col justify-between bg-white/95 p-5 backdrop-blur">
      <div className="space-y-2">
        <div className="flex items-center text-xs text-zinc-500">
          <Tag className="mr-2 h-4 w-4 text-indigo-500" />
          <span>{offer.tag}</span>
        </div>

        <h3 className="text-xl font-bold leading-tight text-zinc-950">{offer.title}</h3>
        <p className="text-sm leading-6 text-zinc-600">{offer.description}</p>
      </div>

      <div className="flex items-center justify-between border-t border-zinc-200 pt-4">
        <div className="flex items-center gap-3">
          {offer.brandLogoIcon ? (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-700">
              <offer.brandLogoIcon className="h-4 w-4" />
            </div>
          ) : (
            <img
              src={offer.brandLogoSrc}
              alt={`${offer.brandName} logo`}
              className="h-8 w-8 rounded-full bg-zinc-100 object-cover"
            />
          )}

          <div>
            <p className="text-xs font-semibold text-zinc-900">{offer.brandName}</p>
            {offer.promoCode && <p className="text-xs text-zinc-500">{offer.promoCode}</p>}
          </div>
        </div>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-zinc-950 group-hover:text-white">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  </motion.a>
));
OfferCard.displayName = "OfferCard";

export interface OfferCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  offers: Offer[];
}

const OfferCarousel = React.forwardRef<HTMLDivElement, OfferCarouselProps>(
  ({ offers, className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = current.clientWidth * 0.8;
        current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    return (
      <div ref={ref} className={cn("group relative w-full", className)} {...props}>
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-800 opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-300 hover:bg-white group-hover:opacity-100 disabled:opacity-0"
          aria-label="Scroll Left"
          type="button"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex snap-x snap-mandatory space-x-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-800 opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-300 hover:bg-white group-hover:opacity-100 disabled:opacity-0"
          aria-label="Scroll Right"
          type="button"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    );
  }
);
OfferCarousel.displayName = "OfferCarousel";

export { OfferCarousel, OfferCard };
