import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import { Button } from "@repo/ui/button";
import { Typography } from "@repo/ui/typography";
import { WeatherCard } from "@repo/ui/weather-card";
import { NewsFeed } from "@repo/ui/news-feed";
import { KnowledgeCard } from "@repo/ui/knowledge-card";
import { ONBOARDING_STEPS, WEATHER_DATA, NEWS_ITEMS, KNOWLEDGE_TIPS, ROLES } from "@repo/ui/constants";
import { useState } from "react";

export default function App() {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("Farmer");
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  const handleNext = () => {
    if (step < ONBOARDING_STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setShowRoleSelector(true);
    }
  };

  const completeOnboarding = (selectedRole: string) => {
    setRole(selectedRole);
    setHasOnboarded(true);
    setShowRoleSelector(false);
  };

  const currentStep = ONBOARDING_STEPS[step];

  if (hasOnboarded) {
    return (
      <View className="flex-1 bg-cloud pt-12">
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <View className="flex-row justify-between items-center mb-6">
            <View>
              <Typography variant="h2" className="text-midnight">Hello, {role}!</Typography>
              <Typography variant="caption" className="text-muted-text">Friday, Jan 30</Typography>
            </View>
            <View className="bg-glacier/20 p-2 rounded-full">
              <Typography className="text-xl">👤</Typography>
            </View>
          </View>

          <View className="mb-8">
            <Typography variant="h3" className="mb-4 text-primary-text">Weather Snapshot</Typography>
            <WeatherCard data={WEATHER_DATA} />
          </View>

          <View className="mb-8">
            <Typography variant="h3" className="mb-4 text-primary-text">Knowledge Tips</Typography>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-4">
              {KNOWLEDGE_TIPS.map((tip) => (
                <View key={tip.id} className="w-64 mr-4">
                  <KnowledgeCard item={tip} />
                </View>
              ))}
            </ScrollView>
          </View>

          <View className="mb-20">
            <Typography variant="h3" className="mb-4 text-primary-text">From the Hub</Typography>
            <NewsFeed items={NEWS_ITEMS} />
          </View>
        </ScrollView>
        <StatusBar style="dark" />
      </View>
    );
  }

  if (showRoleSelector) {
    return (
      <View className="flex-1 items-center justify-center bg-white p-8">
        <Typography variant="h1" className="text-midnight text-center mb-8">Choose your Role</Typography>
        <View className="w-full gap-4">
          {ROLES.map((r) => (
            <Button key={r} title={r} variant="secondary" onPress={() => completeOnboarding(r)} />
          ))}
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-between bg-white p-8 py-20">
      <View className="items-end w-full">
        <Button
          title="Skip"
          variant="secondary"
          onPress={() => setShowRoleSelector(true)}
        />
      </View>

      <View className="flex-1 items-center justify-center w-full">
        <View className="w-64 h-64 bg-mist rounded-full items-center justify-center mb-10">
          <Typography variant="h1" className="text-6xl">
            {currentStep.icon === "cloud-sun" ? "🌦️" :
              currentStep.icon === "book-open" ? "📖" : "🤝"}
          </Typography>
        </View>

        <Typography variant="h2" className="text-midnight text-center mb-4">
          {currentStep.title}
        </Typography>
        <Typography variant="body" className="text-secondary-text text-center px-4">
          {currentStep.description}
        </Typography>
      </View>

      <View className="w-full">
        <View className="flex-row justify-center mb-8 gap-2">
          {ONBOARDING_STEPS.map((_, index) => (
            <View
              key={index}
              className={`h-2 rounded-full ${index === step ? "w-8 bg-midnight" : "w-2 bg-glacier/30"}`}
            />
          ))}
        </View>

        <Button
          title={step === ONBOARDING_STEPS.length - 1 ? "Next" : "Next"}
          onPress={handleNext}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
