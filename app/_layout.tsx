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
  Kufam_400Regular_Italic,
  Kufam_400Regular,
  Kufam_500Medium_Italic,
  Kufam_500Medium,
  Kufam_600SemiBold_Italic,
  Kufam_600SemiBold,
  Kufam_700Bold_Italic,
  Kufam_700Bold,
  Kufam_800ExtraBold_Italic,
  Kufam_800ExtraBold,
  Kufam_900Black_Italic,
  Kufam_900Black,
} from "@expo-google-fonts/kufam";
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
    Kufam_400Regular_Italic,
    Kufam_400Regular,
    Kufam_500Medium_Italic,
    Kufam_500Medium,
    Kufam_600SemiBold_Italic,
    Kufam_600SemiBold,
    Kufam_700Bold_Italic,
    Kufam_700Bold,
    Kufam_800ExtraBold_Italic,
    Kufam_800ExtraBold,
    Kufam_900Black_Italic,
    Kufam_900Black,
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
