import React, { useState, useEffect } from "react";
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
} from "react-native";
const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;
import database from "../Firebase/config";
import { getDatabase, ref, set, push, update, child } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";

const date = new Date();
const timestamp = date.toString();

export default function ReviewSum({ navigation, route }) {
  const { paymentData } = route.params;

  const newPostKey = push(
    child(
      ref(database),
      `/Parking/parkingEntity/${paymentData.parkingId}/bokings`
    )
  ).key;

  function writeRef(parkingRef) {
    const newRefKey = push(child(ref(database), `/Parking/bookingsPanel`)).key;
    const updates = {};
    updates[`Parking/bookingsPanel/${newRefKey}`] = parkingRef;
    return update(ref(database), updates);
  }

  function writeData() {
    const data = {
      username: paymentData.name,
      phoneNo: paymentData.phoneNo,
      vehicleNo: paymentData.vehicleNo,
      duration: paymentData.duration,
      parkingName: paymentData.parkingName,
      address: paymentData.address,
      amount: paymentData.amount,
      verified: false,
      timestamp: timestamp,
      entryTime: "",
      exitTime: "",
    };

    const updates = {};
    updates[
      `/Parking/parkingEntity/${paymentData.parkingId}/bookings/` + newPostKey
    ] = data;
    writeRef(newPostKey);
    return update(ref(database), updates);
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("tickets", jsonValue);
      console.log("Data saved");
      // alert("Data saved");
    } catch (e) {
      // saving error
    }
  };

  return (
    <SafeAreaView style={styles.cont}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#FDFAE7"} />
      <View>
        <View
          style={{
            margin: 10,
            paddingHorizontal: 15,
            paddingTop: 20,
            backgroundColor: "white",
            borderRadius: 10,
            elevation: 1,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
            marginTop: 10,
          }}
        >
          <View style={styles.itemCont}>
            <Text style={styles.lft}>Name</Text>
            <Text style={styles.rht}>{paymentData.name}</Text>
          </View>

          <View style={styles.itemCont}>
            <Text style={styles.lft}>Phone No.</Text>
            <Text style={styles.rht}>{paymentData.phoneNo}</Text>
          </View>

          <View style={styles.itemCont}>
            <Text style={styles.lft}>Vehicle No</Text>
            <Text style={styles.rht}>{paymentData.vehicleNo}</Text>
          </View>

          <View style={styles.itemCont}>
            <Text style={styles.lft}>Duration</Text>
            <Text style={styles.rht}>{paymentData.duration} hours</Text>
          </View>

          <View style={styles.itemCont}>
            <Text style={styles.lft}>Parking Area</Text>
            <Text style={styles.rht}>{paymentData.parkingName}</Text>
          </View>

          <View style={styles.itemCont}>
            <Text style={styles.lft}>Address</Text>
            <Text style={styles.rht}>{paymentData.address}</Text>
          </View>
        </View>

        <View
          style={{
            margin: 10,
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: "white",
            borderRadius: 10,
            elevation: 1,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <View style={styles.itemCont}>
            <Text style={styles.lft}>Amount</Text>
            <Text style={styles.rht}>Rs {paymentData.amount}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          writeData();
          // storeData();
          const ticketData = {
            qrID: newPostKey,
            name: paymentData.name,
            phoneNo: paymentData.phoneNo,
            vehicleNo: paymentData.vehicleNo,
            duration: paymentData.duration,
            parkingName: paymentData.parkingName,
            address: paymentData.address,
            amount: paymentData.amount,
            verfied: false,
            timestamp: timestamp,
            parkingId: paymentData.parkingId,
          };

          storeData(ticketData);

          navigation.navigate("Tickets", { ticketData: ticketData });
        }}
        style={{
          backgroundColor: "#F0A936",
          padding: 10,
          marginHorizontal: 10,
          borderRadius: 10,
          elevation: 2,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "700",
            letterSpacing: 0.17,
            textAlign: "center",
          }}
        >
          Confirm
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#FDFAE7",
    flex: 1,
    justifyContent: "space-between",
  },
  lft: {
    color: "#616161",
    fontWeight: "600",
    width: "50%",
  },
  rht: {
    justifyContent: "flex-end",
    color: "black",
    fontWeight: "600",
    width: "50%",
    // backgroundColor: 'red',
    // textAlign: 'right',
  },
  itemCont: {
    // backgroundColor:"red",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
