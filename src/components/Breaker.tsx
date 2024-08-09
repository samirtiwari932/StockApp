import { View, Text } from "react-native";
import React from "react";
import Animated, { FadeInRight } from "react-native-reanimated";

const Breaker = () => {
  return (
    <Animated.View
      entering={FadeInRight.duration(100).springify()}
      className="flex-row w-full"
    >
      <View className="w-[40%] h-10 justify-center items-center">
        <View className="border-t-2 border-gray-400 w-full "></View>
      </View>
      <View className="w-[20%] justify-center items-center">
        <Text className="text-base text-neutral-500">OR </Text>
      </View>
      <View className="w-[40%] h-10 justify-center items-center">
        <View className="border-t-2 border-gray-400 w-full "></View>
      </View>
    </Animated.View>
  );
};

export default Breaker;
