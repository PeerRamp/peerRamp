"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BorrowerSign from "@/components/borrower";
import LenderSign from "@/components/lender";
import Link from 'next/link';

export default function Register() {
    const [isBorrower, setIsBorrower] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center bg-[#000] inset-0 z-50 absolute top-0 left-0 w-full">
            <div className="flex mb-8 w-full">
                <div className="flex w-full md:w-1/2 p-6 md:p-12 space-x-4 justify-center items-center">
                <Button onClick={() => setIsBorrower(true)} variant={isBorrower ? "primary" : "secondary"}>
                    Borrower
                </Button>
                <Button onClick={() => setIsBorrower(false)} variant={!isBorrower ? "primary" : "secondary"}>
                    Lender
                </Button>
                </div>
            </div>
           <AnimatePresence mode="wait">
                {isBorrower ? (
                    <motion.div
                        key="borrower"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='w-full'
                    >
                        <BorrowerSign />
                    </motion.div>
                ) : (
                    <motion.div
                        key="lender"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='w-full'
                    >
                        <LenderSign />
                    </motion.div>
                )}
            </AnimatePresence>
            <Link href="/login" className='w-full'>
                <div className="flex w-full md:w-1/2 p-6 md:p-12 space-x-4 justify-center items-center">
                <p className="mt-4 text-blue-500 hover:underline">Already have an account? Log in</p>
                </div>
            </Link>
        </div>
    );
}

const Button = ({ onClick, variant, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg focus:outline-none ${
            variant === "primary" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
        }`}
    >
        {children}
    </button>
);