'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BorrowerForm from "@/components/borrower";
import LenderSign from "@/components/lender";

export default function SignIn() {
    const [isLender, setIsLender] = useState(false);

    return (
        <div className="flex flex-col absolute top-0 w-screen h-screen z-50 bg-[url('/assets/gradientbg.jpg')] bg-cover text-black">
            <div className="w-full max-w-md mx-auto mt-8 px-4">
                <div className="absolute w-[400px] bg-white rounded-lg p-1 flex shadow-lg z-10">
                    <motion.button
                        className={`flex-1 py-2 rounded-md text-sm font-medium ${!isLender ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
                        onClick={() => setIsLender(false)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Borrower
                    </motion.button>
                    <motion.button
                        className={`flex-1 py-2 rounded-md text-sm font-medium ${isLender ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
                        onClick={() => setIsLender(true)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Lender
                    </motion.button>
                </div>
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1"
            >
                {isLender ? <BorrowerForm /> : <LenderSign />}
            </motion.div>
        </div>
    );
}