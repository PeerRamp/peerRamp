"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface LoanCardProps {
  borrower: string;
  university: string;
  amount: number;
  interest: number;
  duration: number;
  purpose: string;
  risk: "Low" | "Medium" | "High";
}

export function LoanCard({
  borrower,
  university,
  amount,
  interest,
  duration,
  purpose,
  risk,
}: LoanCardProps) {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-500/10 text-green-500";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-500";
      case "High":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarFallback>{borrower[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{borrower}</h3>
            <p className="text-sm text-muted-foreground">{university}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Amount</span>
            <span className="font-semibold">${amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Interest Rate</span>
            <span className="font-semibold">{interest}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Duration</span>
            <span className="font-semibold">{duration} months</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Purpose</span>
            <span className="font-semibold">{purpose}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Risk Level</span>
            <Badge variant="secondary" className={getRiskColor(risk)}>
              {risk}
            </Badge>
          </div>
        </div>

        <Button className="w-full mt-6">Invest Now</Button>
      </Card>
    </motion.div>
  );
}