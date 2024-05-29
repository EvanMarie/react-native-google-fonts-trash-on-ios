import React, { useRef, useState } from "react";
import {
  View,
  ScrollView,
  Animated,
  StyleSheet,
  Dimensions,
} from "react-native";
import { screenHeight, screenWidth } from "@/constants/variousConstants";
import { VStackFull } from "./containers";

export default function ScrollProgress() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);

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
          <View style={styles.content} />
          <View style={styles.content} />
          <View style={styles.content} />
          <View style={styles.content} />
          <View style={styles.content} />
        </VStackFull>
      </ScrollView>
    </View>
  );
}

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
    // position: "absolute",
    // top: 100,
    // right: 0,
    // left: 0,
    zIndex: 1,
  },
  progressBar: {
    height: 5,
    backgroundColor: "red",
  },
});
