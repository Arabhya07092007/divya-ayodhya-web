import React, { useState } from "react";
import {
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function BookingEntry({ navigation, route }) {
  const [vehicleNo, setVehicleNo] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("50");
  const [duration, setDuration] = useState(1);
  const { data } = route.params;

  const addHours = () => {
    if (duration < 11) {
      setDuration(duration + 1);

      if (duration < 4) {
        setAmount("50");
      } else if (duration >= 4 && duration <= 7) {
        setAmount("70");
      } else if (duration > 7 || duration === 8) {
        setAmount("110");
      }
    }
  };

  const removeHours = () => {
    if (duration > 1) {
      setDuration(duration - 1);
      if (duration <= 5) {
        setAmount("50");
      } else if (duration >= 5 && duration <= 9) {
        setAmount("70");
      } else if (duration > 9) {
        setAmount("110");
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FDFAE7" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#FDFAE7"} />
      <View
        style={{
          flex: 1,

          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            // flex: 1,
            // backgroundColor: 'white',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "black", fontWeight: "600", fontSize: 18 }}>
            {data.name}
          </Text>

          <View>
            <View style={vnStyles.container}>
              <TextInput
                style={vnStyles.input}
                placeholder="Name"
                placeholderTextColor="#888"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={vnStyles.container}>
              <TextInput
                style={vnStyles.input}
                placeholder="Enter Phone Number"
                placeholderTextColor="#888"
                keyboardType={"name-phone-pad"}
                value={phoneNo}
                inputMode={"tel"}
                onChangeText={(text) => setPhoneNo(text)}
                maxLength={10}
              />
            </View>
            <View style={vnStyles.container}>
              <TextInput
                style={vnStyles.input}
                placeholder="Enter Vehicle Number"
                placeholderTextColor="#888"
                value={vehicleNo}
                onChangeText={(text) => setVehicleNo(text.toUpperCase())}
                maxLength={10}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              // backgroundColor: 'lightgreen',
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "black", fontWeight: "600", fontSize: 18 }}>
              No of hours
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#F0A936",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  padding: 3,
                }}
                onPress={() => {
                  removeHours();
                }}
              >
                <Image
                  source={{
                    uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/minus.png",
                  }}
                  style={{
                    width: 27,
                    height: 27,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: 20,
                    // marginTop: 20,
                  }}
                >
                  {duration}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "#F0A936",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  padding: 3,
                }}
                onPress={() => {
                  addHours();
                }}
              >
                <Image
                  source={{
                    uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/plus.png",
                  }}
                  style={{
                    width: 27,
                    height: 27,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 18,
                color: "black",
                fontSize: 15,
              }}
            >
              Price
            </Text>
            <View
              style={{
                width: 65,
                height: 2.5,
                backgroundColor: "orange",
                marginTop: 5,
                marginBottom: 5,
              }}
            />

            <Text
              style={{
                fontWeight: "400",
                color: "black",
                color: "black",
                fontSize: 15,
              }}
            >
              {`Charges for four wheeler parking:\n\nParking fees up to 4 hrs – INR 50/-\n\nParking fees from 4 – 8 hrs – INR 70/-\n\nParking fees for more than (8 Hours) INR 110/-\n\nParking monthly pass - INR 2000/-`}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "black",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingHorizontal: 20,
            paddingTop: 20,
            flexDirection: "row",
            // position:"absolute",
            // bottom:0
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
              ₹{amount}
            </Text>
            <Text style={{ fontWeight: "600" }}>Total Amount</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (
                name !== "" &&
                phoneNo !== "" &&
                vehicleNo !== "" &&
                phoneNo.length === 10 &&
                vehicleNo.length === 10
              ) {
                const paymentData = {
                  name: name,
                  phoneNo: phoneNo,
                  vehicleNo: vehicleNo,
                  amount: amount,
                  duration: duration,
                  address: data.address,
                  parkingName: data.name,
                  parkingId: data.id,
                };
                navigation.navigate("ReviewSum", { paymentData: paymentData });
              } else {
                alert("Please fill details properly.");
              }
            }}
            style={{
              backgroundColor: "#FEEF02",
              width: "50%",
              justifyContent: "center",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                textAlign: "center",
                fontWeight: "700",
                fontSize: 18,
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default BookingEntry;

const vnStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,

    elevation: 2,
    marginTop: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    padding: 15,
  },
});
