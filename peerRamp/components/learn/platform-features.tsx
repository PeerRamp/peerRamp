"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const features = [
  {
    title: "Loan Application Process",
    description: "Step-by-step guide on how to apply for a loan on PeerRamp",
    videoUrl: "#",
    duration: "5:30",
  },
  {
    title: "Lending on PeerRamp",
    description: "Learn how to become a lender and manage your investment portfolio",
    videoUrl: "#",
    duration: "4:45",
  },
  {
    title: "Smart Contract Integration",
    description: "Understanding how smart contracts secure your transactions",
    videoUrl: "#",
    duration: "6:15",
  },
];

export function PlatformFeatures() {
  return (
    <div className="space-y-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                <Button variant="ghost" size="lg" className="gap-2">
                  <Play className="h-6 w-6" />
                  Watch Video
                </Button>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <p className="text-sm text-muted-foreground">Duration: {feature.duration}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}