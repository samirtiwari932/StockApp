import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/screens/navigation/RootNavigation";
import useCachedResources from "./hooks/useCachedResources";
import { useUserStorage } from "./store/useUserStorage";

const App = () => {
  const { session, user } = useUserStorage();

  useEffect(() => {
    if (session) {
      console.log("session", session);
    }
    if (user) {
      console.log("user", user);
    }
  }, [session, user]);
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Container>
      <StatusBar style="auto" />
      <RootNavigation />
    </Container>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
  background-color: green;
`;
