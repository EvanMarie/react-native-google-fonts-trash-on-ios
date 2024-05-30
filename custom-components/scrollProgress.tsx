import React, { useRef, useState } from "react";
import { View, ScrollView, Animated, StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "@/constants/variousConstants";
import { VStackFull } from "./containers";
import { col } from "@/constants/Colors";

export default function ScrollProgress({
  children,
  position = "absolute",
  top,
  right,
  left,
  bottom,
  color = col[900],
}: {
  children: React.ReactNode;
  position?: "absolute" | "relative";
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  color?: string;
}) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "relative",
      paddingTop: 50,
    },
    scrollContainer: {
      flexDirection: "column",
    },
    content: {
      width: screenWidth - 40,
      marginHorizontal: 20,
      backgroundColor: "lightblue",
      height: screenHeight * 0.5,
      borderRadius: 10,
    },
    progressContainer: {
      height: 5,
      backgroundColor: "lightgray",
      width: screenWidth,
      zIndex: 1,
    },
    progressBar: {
      height: 5,
      backgroundColor: color,
      position: position,
      top: top,
      left: left,
      right: right,
      bottom: bottom,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        {contentHeight > screenHeight && (
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: scrollY.interpolate({
                  inputRange: [0, contentHeight - screenHeight],
                  outputRange: [0, screenWidth],
                  extrapolate: "clamp",
                }),
              },
            ]}
          />
        )}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContainer}
        onContentSizeChange={(width, height) => setContentHeight(height)}
      >
        <VStackFull style={{ gap: 10, paddingVertical: 10 }}>
          {children}
        </VStackFull>
      </ScrollView>
    </View>
  );
}
