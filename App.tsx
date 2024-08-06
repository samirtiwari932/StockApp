import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-orange-600 justify-center items-center">
      <Text className="text-2xl font-semibold font-sans text-white">
        Appsss
      </Text>
    </SafeAreaView>
  );
};

export default App;
