"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
              >
                PeerRamp
              </motion.div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/about" className="text-foreground/80 hover:text-foreground">
              About
            </Link>
            <Link href="/marketplace" className="text-foreground/80 hover:text-foreground">
              Marketplace
            </Link>
            <Link href="/faq" className="text-foreground/80 hover:text-foreground">
              FAQ
            </Link>
            <Button variant="default" className="ml-4">
              Connect Wallet
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block px-3 py-2 text-foreground/80 hover:text-foreground">
              About
            </Link>
            <Link href="/marketplace" className="block px-3 py-2 text-foreground/80 hover:text-foreground">
              Marketplace
            </Link>
            <Link href="/faq" className="block px-3 py-2 text-foreground/80 hover:text-foreground">
              FAQ
            </Link>
            <Button variant="default" className="w-full mt-4">
              Connect Wallet
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}