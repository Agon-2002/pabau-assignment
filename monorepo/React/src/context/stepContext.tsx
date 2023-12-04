import React, { createContext, useState, ReactNode } from "react";

interface StepContextType {
  currentStep: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  resetStep: () => void;
}

export const StepContext = createContext<StepContextType | undefined>(undefined);

interface StepProviderProps {
  children: ReactNode;
}

export const StepProvider: React.FC<StepProviderProps> = ({
  children,
}: StepProviderProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const resetStep = () => {
    setCurrentStep(1);
  };

  const value: StepContextType = {
    currentStep,
    goToNextStep,
    goToPreviousStep,
    resetStep,
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};
