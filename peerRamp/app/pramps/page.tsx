"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Gift, Award, Users, BookOpen } from "lucide-react";

export default function PrampsPage() {
  const prampBalance = 150;
  const nextTier = 200;

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Your Pramps Rewards</h1>
            <p className="text-lg text-muted-foreground">
              Earn Pramps by participating in platform activities and unlock exclusive benefits
            </p>
          </div>

          {/* Pramps Balance Card */}
          <Card className="p-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Current Balance</h2>
              <p className="text-4xl font-bold text-purple-600">{prampBalance} Pramps</p>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">
                  {nextTier - prampBalance} Pramps until next tier
                </p>
                <Progress value={(prampBalance / nextTier) * 100} className="h-2" />
              </div>
            </div>
          </Card>

          {/* Earning Opportunities */}
          <h2 className="text-2xl font-semibold mb-6">Ways to Earn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="p-6">
                <BookOpen className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Complete Learning Modules</h3>
                <p className="text-muted-foreground mb-4">
                  Earn up to 50 Pramps per module completed
                </p>
                <Button variant="outline" className="w-full">Start Learning</Button>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="p-6">
                <Users className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Refer Friends</h3>
                <p className="text-muted-foreground mb-4">
                  Get 100 Pramps for each friend who joins
                </p>
                <Button variant="outline" className="w-full">Invite Friends</Button>
              </Card>
            </motion.div>
          </div>

          {/* Rewards Shop */}
          <h2 className="text-2xl font-semibold mb-6">Rewards Shop</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="p-6">
                <Gift className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Loan Fee Discount</h3>
                <p className="text-muted-foreground mb-4">
                  50% off loan processing fees
                </p>
                <p className="font-semibold text-purple-600 mb-4">200 Pramps</p>
                <Button className="w-full" disabled={prampBalance < 200}>Redeem</Button>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="p-6">
                <Award className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Premium Features</h3>
                <p className="text-muted-foreground mb-4">
                  Access to advanced platform features
                </p>
                <p className="font-semibold text-purple-600 mb-4">300 Pramps</p>
                <Button className="w-full" disabled={prampBalance < 300}>Redeem</Button>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Card className="p-6">
                <Gift className="h-8 w-8 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Interest Rate Bonus</h3>
                <p className="text-muted-foreground mb-4">
                  0.5% better interest rate on loans
                </p>
                <p className="font-semibold text-purple-600 mb-4">500 Pramps</p>
                <Button className="w-full" disabled={prampBalance < 500}>Redeem</Button>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}