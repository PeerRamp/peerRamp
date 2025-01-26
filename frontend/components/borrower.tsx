'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  contactNumber: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Invalid email address'),
  
  ghanaCard: z.any().refine((file) => file?.length > 0, 'Ghana Card is required'),
  universityId: z.any().refine((file) => file?.length > 0, 'Valid University ID is required'),
  
  universityName: z.string().min(1, 'University name is required'),
  programOfStudy: z.string().min(1, 'Program of study is required'),
  graduationYear: z.string().min(1, 'Expected year of graduation is required'),
  
  enrollmentProof: z.any().refine((file) => file?.length > 0, 'Proof of current enrollment is required'),
  creditScore: z.string().optional(),
  
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, 
      'Password must include uppercase, lowercase, number and special character'),
  enable2FA: z.boolean(),
  
  agreeToLoanTerms: z.boolean().refine((val) => val === true, 'You must agree to loan terms'),
  consentToDataSharing: z.boolean().refine((val) => val === true, 'Consent to data sharing is required'),
});

export default function BorrowerSign() {
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
              <Input {...form.register('fullName')} />
              {form.formState.errors.fullName && (
                <p className="error-message">{form.formState.errors.fullName.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Date of Birth</label>
              <Input {...form.register('dateOfBirth')} type="date" />
              {form.formState.errors.dateOfBirth && (
                <p className="error-message">{form.formState.errors.dateOfBirth.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Contact Number</label>
              <Input {...form.register('contactNumber')} />
              {form.formState.errors.contactNumber && (
                <p className="error-message">{form.formState.errors.contactNumber.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input {...form.register('email')} type="email" />
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
              <label className="text-sm font-medium text-gray-700">Ghana Card</label>
              <Input type="file" {...form.register('ghanaCard')} />
              {form.formState.errors.ghanaCard && (
                <p className="error-message">{form.formState.errors.ghanaCard.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Valid University ID</label>
              <Input type="file" {...form.register('universityId')} />
              {form.formState.errors.universityId && (
                <p className="error-message">{form.formState.errors.universityId.message}</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Academic Information</h2>
            <div>
              <label className="text-sm font-medium text-gray-700">Name of University</label>
              <Input {...form.register('universityName')} />
              {form.formState.errors.universityName && (
                <p className="error-message">{form.formState.errors.universityName.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Program of Study</label>
              <Input {...form.register('programOfStudy')} />
              {form.formState.errors.programOfStudy && (
                <p className="error-message">{form.formState.errors.programOfStudy.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Expected Year of Graduation</label>
              <Input {...form.register('graduationYear')} />
              {form.formState.errors.graduationYear && (
                <p className="error-message">{form.formState.errors.graduationYear.message}</p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Loan Eligibility Details</h2>
            <div>
              <label className="text-sm font-medium text-gray-700">Proof of Current Enrollment</label>
              <Input type="file" {...form.register('enrollmentProof')} />
              {form.formState.errors.enrollmentProof && (
                <p className="error-message">{form.formState.errors.enrollmentProof.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Credit Score Assessment (if applicable)</label>
              <Input {...form.register('creditScore')} />
              {form.formState.errors.creditScore && (
                <p className="error-message">{form.formState.errors.creditScore.message}</p>
              )}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Security Setup</h2>
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <Input type="password" {...form.register('password')} />
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

      case 6:
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
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4, 5, 6].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === step 
                    ? 'bg-blue-600 text-white'
                    : step < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-700'
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
                <Button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  variant="secondary"
                >
                  Previous
                </Button>
              )}
              {currentStep < 6 && (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  variant="secondary"
                >
                  Next
                </Button>
              )}
              {currentStep === 6 && (
                <Button
                  type="submit"
                  variant="primary"
                  className='bg-green-900'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
