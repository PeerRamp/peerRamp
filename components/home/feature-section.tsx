"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Coins, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8 text-purple-500" />,
    title: "Why Decentralization?",
    description: "Eliminate intermediaries and reduce costs while ensuring transparent, trustless transactions through blockchain technology.",
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-500" />,
    title: "Blockchain & Security",
    description: "Smart contracts ensure secure, automated loan agreements with immutable transaction records.",
  },
  {
    icon: <Coins className="h-8 w-8 text-teal-500" />,
    title: "Financial Inclusion",
    description: "Bridge the gap between students and lenders, making education financing accessible to all.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-green-500" />,
    title: "Growth Opportunities",
    description: "Build credit history while lenders earn competitive returns on their investments.",
  },
];

export function FeatureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 h-full hover:shadow-lg transition-shadow relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}