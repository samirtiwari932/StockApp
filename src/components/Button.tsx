import { View, Text, Pressable } from "react-native";
import React from "react";

interface Props {
  title: string;
  action?: () => void;
}

const Title = "Login";

const Button = ({ title, action }: Props) => {
  return (
    <Pressable
      className="bg-[#2ab07c] w-full h-12 rounded-xl items-center justify-center"
      onPress={action}
    >
      <Text className="text-white text-lg font-bold">{title}</Text>
    </Pressable>
  );
};

export default Button;
