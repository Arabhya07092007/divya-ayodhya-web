import React, { useEffect, useState } from "react";
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

export default function Card({ item, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HotelScreen", { data: item })}
      style={{
        backgroundColor: "white",
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
        width: 300,
      }}
    >
      <Image
        source={{ uri: item.mainImage }}
        style={{
          height: 200,
          width: 300,
          //   resizeMode: "center",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />

      <View style={{ padding: 10, flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: "#4B5563",
                fontSize: 16,
              }}
            >
              {item.hotelName}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              // alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/locationIcon.png",
              }}
              style={{ width: 15, height: 15, marginTop: 4 }}
            />
            <Text
              style={{
                color: "#6B7280",
                fontSize: 13.5,
                fontWeight: "400",
                marginLeft: 3,
              }}
            >
              {item.address}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: -4,
            }}
          >
            <Text
              style={{
                color: "#6B7280",
                fontSize: 14,
                fontWeight: "400",
                marginTop: 4,
              }}
            >
              4.3
            </Text>
            {/* <Image
              source={require("../Assests/stars.png")}
              style={{ width: 15, height: 15, marginLeft: 10 }}
            />
            <Image
              source={require("../Assests/stars.png")}
              style={{ width: 15, height: 15, marginLeft: 5 }}
            />
            <Image
              source={require("../Assests/stars.png")}
              style={{ width: 15, height: 15, marginLeft: 5 }}
            />
            <Image
              source={require("../Assests/stars.png")}
              style={{ width: 15, height: 15, marginLeft: 5 }}
            />
            <Image
              source={require("../Assests/stars.png")}
              style={{ width: 15, height: 15, marginLeft: 5 }}
            /> */}
            <Text
              style={{
                color: "#6B7280",
                fontSize: 14,
                fontWeight: "400",
                marginLeft: 10,
                marginTop: 4,
              }}
            >
              (89)
            </Text>
          </View>
        </View>

        <View
          style={{
            height: 1.5,
            width: "auto",
            backgroundColor: "#E5E7EB",
            marginTop: 10,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#4B5563",
              }}
            >
              {item.rooms[0].pricing}{" "}
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            {/* <Icon
              type={Icons.Ionicons}
              name={"business-outline"}
              color="#6B7280"
              size={18}
            /> */}
            <Text
              style={{
                color: "#6B7280",
                fontSize: 13,
                fontWeight: "400",
                marginLeft: 5,
              }}
            >
              Homestay
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
