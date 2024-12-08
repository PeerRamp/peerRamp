"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Database, Link as LinkIcon, Clock } from "lucide-react";

const concepts = [
  {
    icon: <Database className="h-8 w-8 text-purple-500" />,
    title: "What is Blockchain?",
    description: "A decentralized, immutable digital ledger that records transactions across a network of computers.",
    animation: {
      type: "blocks",
      description: "Visualizes how blocks are connected in a chain",
    },
  },
  {
    icon: <LinkIcon className="h-8 w-8 text-blue-500" />,
    title: "Smart Contracts",
    description: "Self-executing contracts with terms directly written into code, enabling automated and trustless transactions.",
    animation: {
      type: "contract",
      description: "Shows how smart contracts automate agreements",
    },
  },
  {
    icon: <Clock className="h-8 w-8 text-teal-500" />,
    title: "Transaction Process",
    description: "Learn how blockchain transactions work, from initiation to confirmation.",
    animation: {
      type: "transaction",
      description: "Demonstrates the flow of a blockchain transaction",
    },
  },
];

export function BlockchainBasics() {
  return (
    <div className="space-y-8">
      {concepts.map((concept, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-teal-500/5"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                {concept.icon}
                <h3 className="text-xl font-semibold">{concept.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{concept.description}</p>
              <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Interactive {concept.animation.type} animation</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}