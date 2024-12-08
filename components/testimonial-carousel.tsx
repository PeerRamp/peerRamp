"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alikamatu DevRel",
    role: "Lender",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: "I really love the robust, security and transparency that blockchain technology brings to the platform.",
  },
  {
    name: "Sarah Johnson",
    role: "Student, University of Ghana",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content: "PeerRamp helped me secure funding for my final year project. The process was smooth and transparent.",
  },
  {
    name: "Michael Chen",
    role: "Lender",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    content: "As a lender, I appreciate the security and transparency that blockchain technology brings to the platform.",
  },
  {
    name: "Amara Okafor",
    role: "Student, Ashesi University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "The platform's user interface is intuitive, and the support team is always helpful.",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full"
        >
          <Card className="max-w-2xl mx-auto p-6 cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <Avatar>
                <AvatarImage src={testimonials[current].image} alt={testimonials[current].name} className="object-cover" />
                <AvatarFallback>{testimonials[current].name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">{testimonials[current].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </div>
            <p className="text-xs">{testimonials[current].content}</p>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}