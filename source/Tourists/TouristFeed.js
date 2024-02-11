import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, get, set } from "firebase/database";
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
import SearchBar from "../Components/SearchBar";
import database from "../Firebase/config";
import { TouristTemple } from "../Components/SvgIcon";

export default function Touristfeed({ navigation, category }) {
  const [data, setData] = React.useState([]);

  const getcurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    const starCountRef = ref(database, "/TouristPlaces/" + category + "/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData(Object.values(data));
      }
    });
    getcurrentLocation();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFAE7" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#FDFAE7"} />

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <TouristCard {...item} navigation={navigation} />}
        style={{ backgroundColor: "#FDFAE7", paddingTop: 10 }}
      />
    </SafeAreaView>
  );
}

function TouristCard({ item, navigation }) {
  //   console.log(item.lat, item.long, item.name);
  //   console.log(parseFloat(item.lat), parseFloat(item.long));

  const [distance, setDistance] = useState("Loading...");
  const [duration, setDuration] = useState("Loading...");
  const getDistance = async (item) => {
    console.log(item.lat, item.long, item.name);
    // let url = `http://localhost:3000/distance?units=metric&origins=26.7956727,82.1939717&destinations=${item.lat},${item.long}`;
    let url = `http://192.168.45.202:3000/distance?units=metric&origins=26.7956727,82.1939717&destinations=${item.lat},${item.long}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setDistance(responseData.rows[0].elements[0].distance.text);
        setDuration(responseData.rows[0].elements[0].duration.text);
      });
  };

  useEffect(() => {
    getDistance(item);
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("TouristPlace", { item: item });
      }}
      style={{
        backgroundColor: "white",
        marginBottom: 20,
        marginHorizontal: 10,
        borderRadius: 10,
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
      <Image
        source={{ uri: item.images[0] }}
        style={{
          height: 160,
          width: "auto",
          resizeMode: "cover",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />

      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#4B5563", fontSize: 16, fontWeight: "600" }}>
            {item.name}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/locationIcon.png",
            }}
            style={{ width: 15, height: 15 }}
          />
          <Text
            style={{
              color: "#6B7280",
              fontSize: 14,
              fontWeight: "400",
              marginLeft: 3,
            }}
          >
            {item.address}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "#6B7280", fontSize: 14, fontWeight: "400" }}>
            {item.ratings}
          </Text>
          <Image
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
          />
          <Text
            style={{
              color: "#6B7280",
              fontSize: 14,
              fontWeight: "400",
              marginLeft: 10,
            }}
          >
            {item.reviews} reviews
          </Text>
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
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/routing.png",
              }}
              style={{ width: 18, height: 18, marginRight: 5 }}
            />
            <Text style={{ color: "#6B7280", fontSize: 14, fontWeight: "400" }}>
              {distance} from Ram mandir
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/temple.png",
              }}
              style={{ width: 17, height: 17, marginTop: -2 }}
            />
            <Text
              style={{
                color: "#6B7280",
                fontSize: 14,
                fontWeight: "400",
                marginLeft: 5,
              }}
            >
              Temple
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#FDFAE7",
  },
});

// http://localhost:19006/
