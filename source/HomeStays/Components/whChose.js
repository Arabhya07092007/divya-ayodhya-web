import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

export default function WhChose({ uri, text, moreStyles }) {
  return (
    <View style={styles.cont}>
      <Image source={uri} style={{ width: 27, height: 27 }} />
      <Text style={[styles.txt, moreStyles ? moreStyles : null]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 16,
    color: "black",
    marginTop: 2,
    marginLeft: 5,
  },
  cont: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    marginTop: 10,
  },
});
