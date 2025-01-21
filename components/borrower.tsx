'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  // Personal Information
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  contactNumber: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Invalid email address'),
  
  // Identity Verification
  governmentId: z.any().refine((file) => file?.length > 0, 'Government ID is required'),
  addressProof: z.any().refine((file) => file?.length > 0, 'Address proof is required'),
  
  // Financial Information
  bankAccount: z.string().min(1, 'Bank account details required'),
  fundProof: z.any().refine((file) => file?.length > 0, 'Proof of funds required'),
  
  // Security
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, 
      'Password must include uppercase, lowercase, number and special character'),
  enable2FA: z.boolean(),
  
  // Terms
  agreeToTerms: z.boolean().refine((val) => val === true, 'You must agree to terms'),
  agreeToKYC: z.boolean().refine((val) => val === true, 'KYC verification is required'),
});

export default function LenderForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema)
  });

  const connectWallet = async () => {
    setWalletConnected(true);
  };

  const renderFormStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input {...form.register('fullName')} className="form-input" />
              {form.formState.errors.fullName && (
                <p className="error-message">{form.formState.errors.fullName.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Date of Birth</label>
              <input {...form.register('dateOfBirth')} type="date" className="form-input" />
              {form.formState.errors.dateOfBirth && (
                <p className="error-message">{form.formState.errors.dateOfBirth.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Contact Number</label>
              <input {...form.register('contactNumber')} className="form-input" />
              {form.formState.errors.contactNumber && (
                <p className="error-message">{form.formState.errors.contactNumber.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input {...form.register('email')} type="email" className="form-input" />
              {form.formState.errors.email && (
                <p className="error-message">{form.formState.errors.email.message}</p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Identity Verification</h2>
            <div>
              <label className="text-sm font-medium text-gray-700">Government ID</label>
              <input type="file" {...form.register('governmentId')} className="form-input" />
              {form.formState.errors.governmentId && (
                <p className="error-message">{form.formState.errors.governmentId.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Proof of Address</label>
              <input type="file" {...form.register('addressProof')} className="form-input" />
              {form.formState.errors.addressProof && (
                <p className="error-message">{form.formState.errors.addressProof.message}</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Financial Information</h2>
            <div>
              <label className="text-sm font-medium text-gray-700">Bank Account Details</label>
              <input {...form.register('bankAccount')} className="form-input" />
              {form.formState.errors.bankAccount && (
                <p className="error-message">{form.formState.errors.bankAccount.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Proof of Funds</label>
              <input type="file" {...form.register('fundProof')} className="form-input" />
              {form.formState.errors.fundProof && (
                <p className="error-message">{form.formState.errors.fundProof.message}</p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Security Setup</h2>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input type="password" {...form.register('password')} className="form-input" />
              {form.formState.errors.password && (
                <p className="error-message">{form.formState.errors.password.message}</p>
              )}
            </div>
            <div className="flex items-center">
              <input type="checkbox" {...form.register('enable2FA')} className="mr-2" />
              <label className="text-sm font-medium text-gray-700">Enable Two-Factor Authentication</label>
            </div>
            {!walletConnected && (
              <motion.button
                type="button"
                onClick={connectWallet}
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Connect Wallet
              </motion.button>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Terms & KYC</h2>
            <div className="flex items-center">
              <input type="checkbox" {...form.register('agreeToTerms')} className="mr-2" />
              <label className="text-sm font-medium text-gray-700">
                I agree to the Terms and Conditions and Privacy Policy
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" {...form.register('agreeToKYC')} className="mr-2" />
              <label className="text-sm font-medium text-gray-700">
                I consent to KYC verification process
              </label>
            </div>
            {form.formState.errors.agreeToTerms && (
              <p className="error-message">{form.formState.errors.agreeToTerms.message}</p>
            )}
            {form.formState.errors.agreeToKYC && (
              <p className="error-message">{form.formState.errors.agreeToKYC.message}</p>
            )}
          </div>
        );
    }
  };

  return (
    <div className="fixed top-0 min-h-screen w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-6 md:p-12 bg-white flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === step 
                    ? 'bg-blue-600 text-white'
                    : step < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {step}
              </div>
            ))}
          </div>

          <form onSubmit={form.handleSubmit(async (data) => {
            setIsSubmitting(true);
            try {
              console.log(data);
              await new Promise(resolve => setTimeout(resolve, 2000));
            } finally {
              setIsSubmitting(false);
            }
          })} className="space-y-6">
            {renderFormStep()}
            
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <motion.button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Previous
                </motion.button>
              )}
              
              {currentStep < 5 ? (
                <motion.button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  className="btn-primary ml-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !walletConnected}
                  className={`btn-primary ml-auto ${(isSubmitting || !walletConnected) && 'opacity-50 cursor-not-allowed'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Submitting...' : 'Complete Registration'}
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}