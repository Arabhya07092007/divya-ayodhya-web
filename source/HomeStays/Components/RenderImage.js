import React from "react";
import { Text, Image, StyleSheet, View, Dimensions } from "react-native";
const winWidth = Dimensions.get("window").width;

export default function ImageRender({ item }) {
  return (
    <View
      style={{
        width: winWidth,
        height: 500,
        paddingHorizontal: -20,
      }}
    >
      <Image source={{ uri: item }} style={{ width: winWidth, height: 500 }} />
    </View>
  );
}
