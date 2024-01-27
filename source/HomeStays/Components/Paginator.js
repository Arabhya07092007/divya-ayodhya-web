import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
} from "react-native";
import React from "react";

function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
        justifyContent: "center",
        marginTop: -20,
        marginBottom: -30,
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 16, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: ["orange", "white", "orange"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, { width: dotWidth, backgroundColor: opacity }]}
          />
        );
      })}
    </View>
  );
}

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    marginRight: 6,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});
