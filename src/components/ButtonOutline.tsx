import { View, Text, Pressable } from "react-native";
import React from "react";

interface Props {
  title: string;
  action?: () => void;
  children?: React.ReactNode;
}

const ButtonOutline = ({ title, action, children }: Props) => {
  return (
    <Pressable
      className="border-2 border-neutral-400 w-full h-12 rounded-xl flex-row items-center justify-center "
      onPress={action}
    >
      {children && <View className="pr-2">{children}</View>}
      <Text className="text-neutral-400 text-lg font-bold">{title}</Text>
    </Pressable>
  );
};

export default ButtonOutline;
