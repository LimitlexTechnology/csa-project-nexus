import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Button } from "@repo/ui/button";
import { Typography } from "@repo/ui/typography";
import { ONBOARDING_STEPS } from "@repo/ui/constants";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < ONBOARDING_STEPS.length - 1) {
      setStep(step + 1);
    } else {
      // Navigate to Home or Login
      alert("Onboarding Completed! Navigate to Home.");
    }
  };

  const handleSkip = () => {
    // Navigate to Home or Login
    alert("Skipped Onboarding. Navigate to Home.");
  };

  const currentStep = ONBOARDING_STEPS[step];

  return (
    <View className="flex-1 items-center justify-between bg-white p-8 py-20">
      <View className="items-end w-full">
        <Button
          title="Skip"
          variant="secondary"
          onPress={handleSkip}
        // Custom style for skip button if needed, simpler text button might be better but reusing Button for now
        />
      </View>

      <View className="flex-1 items-center justify-center w-full">
        {/* Placeholder for Icon/Image */}
        <View className="w-64 h-64 bg-green-100 rounded-full items-center justify-center mb-10">
          <Typography variant="h1" className="text-6xl">
            {/* Simple icon emulation with text or emoji */}
            {currentStep.icon === "cloud-sun" ? "🌦️" :
              currentStep.icon === "book-open" ? "📖" : "🤝"}
          </Typography>
        </View>

        <Typography variant="h2" className="text-green-800 text-center mb-4">
          {currentStep.title}
        </Typography>
        <Typography variant="body" className="text-gray-600 text-center px-4">
          {currentStep.description}
        </Typography>
      </View>

      <View className="w-full">
        {/* Step Indicators */}
        <View className="flex-row justify-center mb-8 gap-2">
          {ONBOARDING_STEPS.map((_, index) => (
            <View
              key={index}
              className={`h-2 rounded-full ${index === step ? "w-8 bg-green-600" : "w-2 bg-gray-300"}`}
            />
          ))}
        </View>

        <Button
          title={step === ONBOARDING_STEPS.length - 1 ? "Get Started" : "Next"}
          onPress={handleNext}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
