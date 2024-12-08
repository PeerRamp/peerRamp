"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlockchainBasics } from "@/components/learn/blockchain-basics";
import { SecurityGuide } from "@/components/learn/security-guide";
import { PlatformFeatures } from "@/components/learn/platform-features";
import { PrampsQuiz } from "@/components/learn/pramps-quiz";

export default function LearnPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-4">Learn About PeerRamp</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Master blockchain technology and discover how PeerRamp revolutionizes student financing
          </p>

          <Tabs defaultValue="blockchain" className="space-y-8">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full">
              <TabsTrigger value="blockchain">Blockchain Basics</TabsTrigger>
              <TabsTrigger value="security">Security Guide</TabsTrigger>
              <TabsTrigger value="features">Platform Features</TabsTrigger>
              <TabsTrigger value="quiz">Earn Pramps</TabsTrigger>
            </TabsList>

            <TabsContent value="blockchain">
              <BlockchainBasics />
            </TabsContent>

            <TabsContent value="security">
              <SecurityGuide />
            </TabsContent>

            <TabsContent value="features">
              <PlatformFeatures />
            </TabsContent>

            <TabsContent value="quiz">
              <PrampsQuiz />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}