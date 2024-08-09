import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useColorScheme } from "nativewind";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
import { Image } from "expo-image";
import { blurhash } from "@/utilis/hash";

const SplashScreen = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const { navigate }: NavigationProp<SplashScreenParamList> = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigate("Welcome");
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <StatusBar style="auto" />
      <View className="w-full px-4 items-center">
        <Animated.View
          entering={FadeInRight.duration(100).springify()}
          className="flex-row items-center justify-center"
        >
          <View className="pr-2">
            <View className="w-20 h-20 overflow-hidden">
              <Image
                source={require("../../../assets/images/logo.png")}
                className="w-full h-full"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
            </View>
          </View>
        </Animated.View>

        <Animated.View
          entering={FadeInLeft.duration(200).springify()}
          className="flex-row items-center justify-center"
        >
          <Text
            className="text-neutral-600  text-xl leading-[60px] pl-1"
            style={{
              fontFamily: "PlusJakartaSans",
            }}
          >
            STACKS
          </Text>
          <Text
            className="text-cyan-600 text-xl  pl-1"
            style={{
              fontFamily: "PlusJakartaBoldItalic",
            }}
          >
            CRYPTO
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
