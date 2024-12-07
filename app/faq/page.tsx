"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "What is PeerRamp?",
    answer: "PeerRamp is a Web3-enabled peer-to-peer lending platform that connects student borrowers with lenders in a secure, decentralized environment.",
  },
  {
    question: "How does the lending process work?",
    answer: "Borrowers create loan requests specifying amount, duration, and purpose. Lenders can browse these requests and choose to fund them partially or fully. Smart contracts ensure secure and transparent transactions.",
  },
  {
    question: "What are the interest rates?",
    answer: "Interest rates vary based on factors like loan amount, duration, and borrower's credit score. Rates typically range from 5% to 15% APR.",
  },
  {
    question: "How is my investment protected?",
    answer: "We use blockchain smart contracts to secure transactions and implement an escrow system. Additionally, all borrowers are verified students with institutional backing.",
  },
  {
    question: "What documents do I need to apply for a loan?",
    answer: "Students need to provide valid university ID, Ghana Card, and proof of enrollment. Additional documents may be required based on the loan amount.",
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>

        <Card className="p-4 mb-8">
          <Input
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </Card>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}