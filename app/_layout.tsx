import React, { useEffect } from "react";
import { setCustomText } from "react-native-global-props";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Play_400Regular,
  Play_700Bold,
} from "@expo-google-fonts/play";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export type RootScreenNames =
  | "(tabs)"
  | "divinationResponse"
  | "divinations"
  | "card-draw"
  | "+not-found";

export type RootStackParamList = {
  "(tabs)": undefined;
  divinationResponse: undefined;
  divinations: undefined;
  "card-draw": undefined;
  "+not-found": undefined;
};

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold,
  });

  const colorScheme = useColorScheme();

  useEffect(() => {
    const customTextProps = {
      style: {
        fontFamily: Platform.select({
          ios: "System",
          android: "Roboto",
        }),
      },
    };
    setCustomText(customTextProps);
    SplashScreen.hideAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar animated={true} />
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
