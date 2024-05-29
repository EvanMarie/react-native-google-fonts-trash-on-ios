import { GradientFive } from "@/constants/Gradients";
import { screenHeight } from "@/constants/variousConstants";
import { FlexFull } from "@/custom-components/containers";
import MyNavBar from "@/custom-components/navBar";
import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  const testNavItems = [
    { icon: "home", label: "home", pathname: "/" },
    {
      icon: "color-palette-outline",
      label: "theme",
      pathname: "/colors",
    },
    {
      icon: "grid-outline",
      label: "components",
      pathname: "/components",
    },
  ];

  return (
    <FlexFull style={{ height: screenHeight }}>
      <GradientFive style={{ display: "flex", flex: 1, position: "relative" }}>
        <MyNavBar navItems={testNavItems} />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="colors" options={{ headerShown: false }} />
          <Stack.Screen name="components" options={{ headerShown: false }} />
        </Stack>
      </GradientFive>
    </FlexFull>
  );
}
