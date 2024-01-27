import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

function renderRulesTxt({ item }) {
  return <Text style={styles.subHeading}>• {item}</Text>;
}

export default function RulesComp({ houseRules }) {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 40 }}>
        <View
          style={{
            height: 1,
            backgroundColor: "grey",
          }}
        />
      </View>
      <Text style={styles.heading}>House Rules</Text>
      <FlatList
        data={houseRules}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderRulesTxt}
      />
      <View
        style={{
          height: 1,
          backgroundColor: "grey",
          marginTop: 40,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 16,
    color: "black",
    marginTop: 5,
  },
  container: {
    marginVertical: 50,
  },
});
