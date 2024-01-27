import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  FlatList,
  TextInput,
} from "react-native";

export default function Tab({ name, length, tab, onPress, active }) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        // backgroundColor: "lightgreen",
        justifyContent: "center",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>{name}</Text>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            {length} Places
          </Text>
        </View>
        <View
          style={{
            height: 5,
            marginHorizontal: 15,
            backgroundColor: tab === active ? "#fba6ac" : "white",
            marginTop: 10,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
