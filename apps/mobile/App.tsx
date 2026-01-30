import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "@repo/ui/button";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-green-800 mb-4">CSA ONE Mobile</Text>
      <Text className="text-gray-600 mb-8 text-center px-4">
        Welcome to the unified platform for Climate-Smart Agriculture.
      </Text>
      <Button title="Mobile Action" onPress={() => alert("Hello form Mobile!")} />
      <StatusBar style="auto" />
    </View>
  );
}
