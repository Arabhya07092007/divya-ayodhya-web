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
} from "react-native";
import { Dimensions } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function Tickets({ navigation, route }) {
  const parkEnt = "ticketidparkingEntity";

  const gettingDate = () => {
    var date = new Date().getDate();

    return date;
  };

  const gettingHours = () => {
    var hours = new Date().getHours();

    let slot =
      hours.toString() +
      ":00 - " +
      (hours + ticketData.duration).toString() +
      ":00";

    return slot;
  };

  const { ticketData } = route.params;

  return (
    <SafeAreaView style={styles.cont}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#FDFAE7"} />
      <View style={{ margin: 20 }}>
        <ImageBackground
          source={{
            uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/scannerBackground.png",
          }}
          style={styles.ticketImg}
          imageStyle={{ borderRadius: 20 }}
        >
          <Text
            style={{
              color: "black",
              textAlign: "center",
              marginBottom: 20,
              fontWeight: "600",
            }}
          >
            Scan this QR code on the scanner machine when you are in the parking
            lot
          </Text>
          <View
            style={{
              padding: 10,
              backgroundColor: "white",
              borderRadius: 10,
              marginBottom: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QRCode
              value={`ticketid${ticketData.parkingId}-${ticketData.qrID}`}
              size={220}
            />
            <Text
              style={{
                color: "black",
                textAlign: "center",
                // marginBottom: 20,
                fontWeight: "600",
                fontSize: 16,
                marginTop: 5,
              }}
            >
              {ticketData.parkingName}
            </Text>
          </View>

          <View>
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt1}>Name</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt1}>Vehicle No</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt2}>{ticketData.name}</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt2}>{ticketData.vehicleNo}</Text>
                </View>
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt1}>Parking Location</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt1}>Validity</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt2}>{ticketData.address}</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt2}>
                    {ticketData.timestamp.slice(0, 15)}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt1}>Duration</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt1}>Phone Number</Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt2}>{ticketData.duration} hours</Text>
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={styles.txt2}>{ticketData.phoneNo}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#FDFAE7",
    flex: 1,
    alignItems: "center",
    // paddingHorizontal: 15,
    // paddingTop: 20,
  },
  ticketImg: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  qr: {
    width: 200,
    height: 200,
    marginBottom: 45,
  },
  txt1: { color: "#757575", fontWeight: "600" },
  txt2: { color: "black", fontWeight: "600" },
});
