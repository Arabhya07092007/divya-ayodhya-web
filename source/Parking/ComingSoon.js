import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Dimensions,
  Linking,
} from "react-native";

export default function ComingSoon({ navigation }) {
  return (
    <ImageBackground
      style={styles.cont}
      source={{
        uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/homebg.png",
      }}
    >
      <Text
        style={{
          color: "black",
          textAlign: "center",
          fontWeight: "600",
          fontSize: 16,
          margin: 20,
        }}
      >
        Namaskar. On the auspicious occasion of Shri Ram Janam Bhumi
        Consecration ceremony being held on 22nd January, All online bookings
        are put on hold till 22nd January.
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#FDFAE7",
    justifyContent: "center",
    alignItems: "center",
  },
});
