import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import Button from "@/src/components/Button";
import ButtonOutline from "@/src/components/ButtonOutline";
import { AntDesign } from "@expo/vector-icons";
import Breaker from "@/src/components/Breaker";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { supabase } from "@/lib/supabase";
import { useUserStorage } from "@/store/useUserStorage";

const { height, width } = Dimensions.get("window");

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const { navigate }: NavigationProp<AuthScreenParamList> = useNavigation();
  const { setUser, setSession } = useUserStorage();
  async function signInWithEmail() {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setIsLoading(false);
      Alert.alert(error.message);
    }
    if (data.session && data.user) {
      setSession(data.session);
      setUser(data.user);
    }
    setIsLoading(false);
  }
  return (
    <View className="flex-1  justify-center">
      {isLoading && (
        <View className="absolute z-50 h-full w-full justify-center items-center">
          <View className="h-full w-full  justify-center items-center bg-black opacity-[0.45]">
            <View className="absolute">
              <ActivityIndicator size="large" color="#fff" />
            </View>
          </View>
        </View>
      )}
      <View className=" relative flex-1  items-center justify-center">
        <View
          className="justify-center w-full px-4 space-y-6"
          style={{
            height: height * 0.8,
          }}
        >
          {/* welcome text  */}
          <Animated.View
            className="justify-center items-center"
            entering={FadeInDown.duration(100).springify()}
          >
            <Text
              className="text-neutral-800 text-2xl  leading-[60px]"
              style={{
                fontFamily: "PlusJakartaSans-Bold",
              }}
            >
              {" "}
              Welcome Back,User{" "}
            </Text>
            <Text className="text-neutral-500  text-sm  font-medium">
              Welcome Back ! Please enter your details.
            </Text>
          </Animated.View>

          {/*   Email and password   */}
          <Animated.View
            className="py-8 space-y-8"
            entering={FadeInDown.duration(100).delay(100).springify()}
          >
            {/* Email and password   */}
            <View className="border-2 w-full border-gray-400 rounded-lg">
              <TextInput
                className="p-4"
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                value={email}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
            <View className="border-2 w-full border-gray-400 rounded-lg">
              <TextInput
                className="p-4"
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                value={password}
                autoCapitalize="none"
                secureTextEntry={true}
              />
            </View>
          </Animated.View>
          {/* login button  */}
          <Animated.View
            className="w-full justify-start"
            entering={FadeInDown.duration(100).delay(200).springify()}
          >
            <View className="pb-6">
              <Button title="Login" action={signInWithEmail} />
            </View>
          </Animated.View>

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
          </View>
          {/* DON'T HAVE AN ACCOUNT  */}
          <Animated.View
            entering={FadeInDown.duration(100).delay(700).springify()}
            className="flex-row justify-center items-center "
          >
            <Text
              className="text-neutral-500  text-lg  font-medium leading-[38px] 
              text-center"
              style={{
                fontFamily: "PlusJakartaSansBold",
              }}
            >
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigate("Register")}>
              <Text
                className="text-neutral-800   text-lg  font-medium leading-[38px] 
              text-center"
                style={{
                  fontFamily: "PlusJakartaSansBold",
                }}
              >
                Register
              </Text>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
