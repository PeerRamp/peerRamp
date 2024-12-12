"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Key, AlertTriangle } from "lucide-react";

const securityTips = [
  {
    icon: <Key className="h-8 w-8 text-purple-500" />,
    title: "Wallet Security",
    description: "Learn how to secure your crypto wallet with best practices for private key management and backup procedures.",
    tips: [
      "Never share your private keys",
      "Use hardware wallets for large amounts",
      "Enable two-factor authentication",
    ],
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: "Safe Transactions",
    description: "Understand how to verify transactions and protect yourself from common scams in the DeFi space.",
    tips: [
      "Always verify contract addresses",
      "Start with small test transactions",
      "Check gas fees before confirming",
    ],
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
    title: "Common Scams",
    description: "Identify and avoid common cryptocurrency scams and fraudulent schemes.",
    tips: [
      "Beware of impersonators",
      "Don't trust 'guaranteed' returns",
      "Verify all links and sources",
    ],
  },
];

export function SecurityGuide() {
  return (
    <div className="space-y-8">
      {securityTips.map((tip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              {tip.icon}
              <h3 className="text-xl font-semibold">{tip.title}</h3>
            </div>
            <p className="text-muted-foreground mb-4">{tip.description}</p>
            <ul className="space-y-2">
              {tip.tips.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                  className="flex items-center gap-2"
                >
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}