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
const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;
import Parking from "../Database/data";
import call from "react-native-phone-call";

export default function ParkingFeed({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFAE7" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#FDFAE7"} />
      <FlatList
        data={Parking}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <ParkingCard {...item} navigation={navigation} />}
        style={{ backgroundColor: "#FDFAE7" }}
      />
    </SafeAreaView>
  );
}

function ParkingCard({ item, navigation }) {
  const makeCall = () => {
    const args = {
      number: "7607778926",
      prompt: false,
      skipCanOpen: true,
    };

    call(args).catch(console.error);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ParkingComplex", { parkingComplex: item });
      }}
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 1,
        marginTop: 20,
        borderColor: "lightgrey",
        borderWidth: 0.7,
      }}
    >
      <Image
        source={{ uri: item.mainImg }}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      />

      <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
          {item.name}
        </Text>
        <Text style={{ color: "black" }}>
          {item.address.length > 33 ? item.address.slice(0, 40).trim() : null}..
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "black" }}>Total Spots: </Text>
          <Text style={{ color: "darkgreen", fontWeight: "700" }}>
            {item.totalSlots}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              makeCall("7607778926");
            }}
            style={[styles.button, { marginRight: 5 }]}
          >
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(item.direction);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Directions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    // padding: 10,
    backgroundColor: "lightyellow",
    borderRadius: 10,
    elevation: 3,
    // flex: 1,
    marginTop: 10,
    // flexWrap: 'wrap',
    // width:winWidth/2
  },
  image: {
    aspectRatio: 1,
    borderRadius: 10,
    marginRight: 10,
    width: 118,
    height: 118,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  cardDetails: {
    // flex: 0.7,
    // backgroundColor: 'red',
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    // marginBottom: 2,
    color: "black",
  },
  location: {
    fontSize: 14,
    // marginBottom: 5,
    color: "black",
  },
  distance: {
    fontSize: 14,
    // marginBottom: 5,
    color: "black",
  },
  availability: {
    fontSize: 14,
    marginBottom: 10,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    padding: 7,
    borderRadius: 10,
    backgroundColor: "#B01432",
    // marginRight: 5,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 12,
  },
});
