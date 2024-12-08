"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { UserPlus, FileText, Wallet, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="h-8 w-8 text-purple-500" />,
    title: "Create Account",
    description: "Sign up and verify your identity as a student or lender.",
  },
  {
    icon: <FileText className="h-8 w-8 text-blue-500" />,
    title: "Submit Application",
    description: "Students: Create a loan request. Lenders: Browse verified loan applications.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-teal-500" />,
    title: "Connect Wallet",
    description: "Link your Web3 wallet for secure transactions.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    title: "Start Lending/Borrowing",
    description: "Execute smart contracts and begin your financial journey.",
  },
];

export function HowItWorks() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 rounded-lg" />
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full bg-background/50 backdrop-blur-sm">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}