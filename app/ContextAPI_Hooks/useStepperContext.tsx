"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { ZodSchema } from "zod";

// $ Step 0: Define the types and specify the theme to only take the values 'light' or 'dark' via the Theme type
export type StepperContextProps = {
  steps: string[];
  currentStep: number;
  setCurrentStep?: (currentStep: number) => void;
  formDataFull?: { [key: string]: string };
  setFormDataFull?: Dispatch<SetStateAction<{ [key: string]: string }>>; // Update this to match
  finalData?: {};
  setFinalData?: Dispatch<SetStateAction<FormData>>;
  handleClick?: (direction: string) => void;
  handleSubmit?: (formData: FormData, schema: ZodSchema) => boolean;
  validationErrors?: { [key: string]: string };
  validationStatus?: boolean;
  setValidationStatus?: Dispatch<SetStateAction<boolean>>;
};

// $ Step 1: Create the context
// % The StepperContext type takes in the StepperContext type or null
const StepperContext = createContext<StepperContextProps | null>(null);

type StepperContextProviderProps = {
  children: ReactNode;
};

// $ Step 2: Create the provider for the context
export default function StepperContextProvider({
  children,
}: StepperContextProviderProps) {
  const [formDataFull, setFormDataFull] = useState<{ [key: string]: string }>(
    {}
  );
  const [finalData, setFinalData] = useState<FormData>(new FormData());
  const [currentStep, setCurrentStep] = useState(0);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({}); // State for validation errors
  const [validationStatus, setValidationStatus] = useState<boolean>(false);
  const steps = ["Personal Info", "Education", "Skills", "Projects"];

  // $ The handleClick function is used to navigate between steps in the stepper
  const handleClick = (direction: string) => {
    let newStep = currentStep;
    direction === "Next" ? newStep++ : newStep--;
    // if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  // $ Function to handle form submission to collect data for the form

  const handleSubmit = (formData: FormData, schema: ZodSchema): boolean => {
    // Validate the data
    const validation = schema.safeParse(Object.fromEntries(formData.entries()));
    if (!validation.success) {
      const errors: { [key: string]: string } = {};
      validation.error.errors.forEach((err) => {
        errors[err.path[0]] = err.message; // Map the errors to field names
      });
      setValidationErrors(errors); // Store validation errors in state
      return false; // Return false if validation fails
    } else {
      setValidationStatus(true);
      setValidationErrors({}); // Clear validation errors if validation passes
      return true; // Return true if validation passes
    }
  };

  return (
    <StepperContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        steps,
        formDataFull,
        setFormDataFull,
        finalData,
        setFinalData,
        handleClick,
        handleSubmit,
        validationErrors,
        validationStatus,
        setValidationStatus, // Pass validation errors via context
      }}
    >
      {children}
    </StepperContext.Provider>
  );
}

// $ Step 3: Export the custom hook to be used in other components
export const useStepperContext = () => {
  const context = useContext(StepperContext);

  // $ Throw an error if the hook is used outside of the StepperContextProvider or does not exist
  if (!context) {
    throw new Error(
      "useStepperContext must be used within a StepperContextProvider"
    );
  }
  return context;
};
