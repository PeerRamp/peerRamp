'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  contactNumber: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Invalid email address'),
  ghanaCard: z.any().optional(),
  universityId: z.any().optional(),
  university: z.string().min(1, 'University name is required'),
  program: z.string().min(1, 'Program of study is required'),
  graduationYear: z.string().min(4, 'Valid graduation year required'),
  enrollment: z.any().optional(),
  creditScore: z.string().optional(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  enable2FA: z.boolean(),
  agreeToTerms: z.boolean().refine((val) => val === true, 'You must agree to terms'),
  agreeToDataSharing: z.boolean().refine((val) => val === true, 'You must agree to data sharing'),
});

export default function LenderSign() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
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
              <input {...register('fullName')} className="form-input" />
              {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Date of Birth</label>
              <input {...register('dateOfBirth')} type="date" className="form-input" />
              {errors.dateOfBirth && <p className="text-red-500 text-xs">{errors.dateOfBirth.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Contact Number</label>
              <input {...register('contactNumber')} className="form-input" />
              {errors.contactNumber && <p className="text-red-500 text-xs">{errors.contactNumber.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input {...register('email')} type="email" className="form-input" />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>
          </div>
        );
          case 2:
      return (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Identity Verification</h2>
          <div>
            <label className="text-sm font-medium text-gray-700">Ghana Card</label>
            <input type="file" {...register('ghanaCard')} className="form-input" />
            {errors.ghanaCard && <p className="error-message">{errors.ghanaCard.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">University ID</label>
            <input type="file" {...register('universityId')} className="form-input" />
            {errors.universityId && <p className="error-message">{errors.universityId.message}</p>}
          </div>
        </div>
      );
    case 3:
      return (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Academic Information</h2>
          <div>
            <label className="text-sm font-medium text-gray-700">University</label>
            <input {...register('university')} className="form-input" />
            {errors.university && <p className="error-message">{errors.university.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Program of Study</label>
            <input {...register('program')} className="form-input" />
            {errors.program && <p className="error-message">{errors.program.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Expected Graduation Year</label>
            <input {...register('graduationYear')} type="number" min="2024" className="form-input" />
            {errors.graduationYear && <p className="error-message">{errors.graduationYear.message}</p>}
          </div>
        </div>
      );
    case 4:
      return (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Security & Wallet</h2>
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input type="password" {...register('password')} className="form-input" />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <div className="flex items-center">
            <input type="checkbox" {...register('enable2FA')} className="mr-2" />
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
          <h2 className="text-xl font-semibold mb-4">Terms & Eligibility</h2>
          <div>
            <label className="text-sm font-medium text-gray-700">Enrollment Proof</label>
            <input type="file" {...register('enrollment')} className="form-input" />
            {errors.enrollment && <p className="error-message">{errors.enrollment.message}</p>}
          </div>
          <div className="flex items-center">
            <input type="checkbox" {...register('agreeToTerms')} className="mr-2" />
            <label className="text-sm font-medium text-gray-700">I agree to the terms and conditions</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" {...register('agreeToDataSharing')} className="mr-2" />
            <label className="text-sm font-medium text-gray-700">I consent to data sharing for credit evaluation</label>
          </div>
          {errors.agreeToTerms && <p className="error-message">{errors.agreeToTerms.message}</p>}
          {errors.agreeToDataSharing && <p className="error-message">{errors.agreeToDataSharing.message}</p>}
        </div>
      );
    }
  };

  return (
    <div className="fixed top-0 h-screen md:h-full min-h-screen w-full flex flex-col md:flex-row">
      <div className="w-full h-screen md:h-full md:w-1/2 p-6 md:p-12 bg-white flex flex-col justify-center items-center">
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
                  currentStep === step ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
              >
                {step}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(async (data) => {
            setIsSubmitting(true);
            try {
              console.log(data);
              await new Promise(resolve => setTimeout(resolve, 1000));
            } finally {
              setIsSubmitting(false);
            }
          })} className="space-y-6">
            {renderFormStep()}
            
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                >
                  Previous
                </button>
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
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
