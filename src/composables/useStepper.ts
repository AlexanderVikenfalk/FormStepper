import {ref} from 'vue'
import * as yup from 'yup' // Define a step type if needed

// Define the shape of your components' emitted events, if they have any
interface StepComponentEvents {
  // Replace 'EventName' with the actual event name and the corresponding payload type
  // For example:
  // eventName: (payload: PayloadType) => void;
}

// This should reflect the actual props your step components expect
type StepComponentProps = {
  // Replace 'PropName' with the actual prop name and type
  // For example:
  // propName: PropType;
}

// Define a more specific type for your step components
// using the `ComponentPublicInstance` constructor type with generic parameters for props and raw bindings
type StepComponent = DefineComponent<StepComponentProps, StepComponentEvents>

interface Step {
  validationSchema: yup.AnyObjectSchema
  component: StepComponent
}

export default function useStepper(steps: Step[]) {
  const currentStepIndex = ref(0)
  const currentStep = ref(steps[0])

  function nextStep() {
    if (currentStepIndex.value < steps.length - 1) {
      currentStepIndex.value++
      currentStep.value = steps[currentStepIndex.value]
    }
  }

  function previousStep() {
    if (currentStepIndex.value > 0) {
      currentStepIndex.value--
      currentStep.value = steps[currentStepIndex.value]
    }
  }

  // function submitStepper(formData: any) {
  //   // Your submit logic here
  // }

  return {
    currentStepIndex,
    currentStep,
    nextStep,
    previousStep,
    // submitStepper,
  }
}
