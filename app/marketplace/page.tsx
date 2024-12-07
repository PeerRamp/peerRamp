"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LoanCard } from "@/components/marketplace/loan-card";
import { Filter } from "lucide-react";

export default function MarketplacePage() {
  const [sortBy, setSortBy] = useState("interest");

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Loan Marketplace</h1>
          <p className="text-lg text-muted-foreground">
            Browse and invest in student loans with transparent terms and verified borrowers.
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Search by keyword..." />
            </div>
            <div className="flex gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="interest">Interest Rate</SelectItem>
                  <SelectItem value="amount">Loan Amount</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </Card>

        {/* Loan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LoanCard
            borrower="Alice Johnson"
            university="University of Ghana"
            amount={5000}
            interest={8.5}
            duration={12}
            purpose="Tuition fees"
            risk="Low"
          />
          <LoanCard
            borrower="Bob Smith"
            university="Ashesi University"
            amount={3000}
            interest={7.5}
            duration={9}
            purpose="Learning materials"
            risk="Medium"
          />
          <LoanCard
            borrower="Carol Williams"
            university="KNUST"
            amount={2000}
            interest={6.5}
            duration={6}
            purpose="Project funding"
            risk="Low"
          />
        </div>
      </div>
    </div>
  );
}