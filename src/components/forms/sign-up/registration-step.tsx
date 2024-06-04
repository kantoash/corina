"use client"
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import dynamic from 'next/dynamic';
import { useAuthContextHook } from '@/context/use-auth-context';
import { Spinner } from '@/components/loader/spinner';

const DetailForm = dynamic(() => import('./account-details-form'), {
  ssr: false,
  loading: Spinner
})

const OTPForm = dynamic(() => import('./otp-form'), {
  ssr: false,
  loading: Spinner
})

export const RegistrationFormStep = () => {
    const { register, formState: { errors }, setValue } = useFormContext();
    const { currentStep } = useAuthContextHook() 
    const [onOTP, setOnOTP] = useState<string>('')

    setValue('otp', onOTP)

    switch (currentStep) {
      case 1:
        return (
        <DetailForm
          errors={errors}
          register={register}
        />
        )
      case 2:
        return (
        <OTPForm
          onOTP={onOTP}
          setOTP={setOnOTP}
        />
        )
    }
  
}
