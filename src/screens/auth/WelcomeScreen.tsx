import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import Button from "@/src/components/Button";
import ButtonOutline from "@/src/components/ButtonOutline";
import Breaker from "@/src/components/Breaker";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { blurhash } from "@/utilis/hash";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const { navigate: navigateAuth }: NavigationProp<AuthScreenParamList> =
    useNavigation();
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <StatusBar style="auto" />
      <View className="w-full px-4 items-center justify-center space-y-6 h-full">
        {/* logo and image  */}
        <View className="w-full px-4 items-center">
          <Animated.View
            entering={FadeInRight.duration(1000).springify()}
            className="flex-row   justify-center items-center"
          >
            <View>
              <View className="w-20 h-20 overflow-hidden ">
                <Image
                  source={require("../../../assets/images/logo.png")}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                  className="w-full h-full flex-1"
                />
              </View>
            </View>
          </Animated.View>
        </View>
        {/* welcome text  */}
        <View className="justify-center items-center">
          <Animated.Text
            entering={FadeInDown.duration(1000).delay(500).springify()}
            className="text-neutral-800 text-3xl  font-medium leading-[60px] text-center"
            style={{
              fontFamily: "PlusJakartaSansBold",
            }}
          >
            Welcome
          </Animated.Text>
        </View>

        {/* Login and signUp Button  */}
        <View className="w-full justify-start">
          <Animated.View
            entering={FadeInDown.duration(100).delay(400).springify()}
            className="pb-6"
          >
            <Button title="Login" action={() => navigateAuth("Login")} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(100).delay(400).springify()}
            className="pb-6"
          >
            <ButtonOutline
              title="Sign Up"
              action={() => navigateAuth("SignUp")}
            />
          </Animated.View>
        </View>

        {/* Breaker Line  */}
        <View>
          <Breaker />
        </View>

        {/* 3rd party auth  */}
        <View className="w-full justify-normal">
          <Animated.View
            entering={FadeInDown.duration(100).delay(600).springify()}
            className="border-b border-white pb-4 "
          >
            <ButtonOutline title="Sign In with Google">
              <AntDesign name="google" size={24} color="gray" />
            </ButtonOutline>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(100).delay(700).springify()}
            className="border-b border-white pb-4 "
          >
            <ButtonOutline title="Sign In with Apple">
              <AntDesign name="apple1" size={24} color="gray" />
            </ButtonOutline>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
