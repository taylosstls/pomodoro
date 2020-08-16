import React, { useState, useCallback } from "react";
import { AppLoading } from "expo";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

import { useFonts, BalooTamma2_400Regular, BalooTamma2_500Medium, BalooTamma2_700Bold } from '@expo-google-fonts/baloo-tamma-2';

export default function App() {
  const [fontsLoaded] = useFonts({
    BalooTamma2_400Regular,
    BalooTamma2_500Medium,
    BalooTamma2_700Bold
  })

  return (
    <>
      {!fontsLoaded ? (
        <AppLoading />
      ) : (
          <NavigationContainer>
            <StatusBar backgroundColor="transparent" translucent style="light" />
            <Routes />
          </NavigationContainer>
        )}
    </>
  );
}
