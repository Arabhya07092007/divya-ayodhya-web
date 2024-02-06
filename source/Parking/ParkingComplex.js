import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import Modal from "react-native-modal";
const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;
import Parking from "../Database/data";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import call from "react-native-phone-call";

function renderItem({ item }) {
  return (
    <View style={{ width: winWidth, height: 230 }}>
      <Image
        source={{
          uri: item,
        }}
        style={Styles.cmplx}
      />
    </View>
  );
}

function TmSlotCont({ day, date, item }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#F3F2F3",
        padding: 10,
        paddingHorizontal: 12,
        marginRight: 10,
        borderRadius: 5,
        elevation: 1,
        marginVertical: 5,
        // marginLeft:5
      }}
    >
      <Text style={{ color: "#777777" }}>{day}</Text>
      <Text style={{ color: "#060606", fontWeight: "700" }}>{date}</Text>
    </TouchableOpacity>
  );
}

export default function ParkingComplex({ navigation, route }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const { parkingComplex } = route.params;
  const data = parkingComplex;

  const [vehicleNo, setVehicleNo] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [amount, setAmount] = useState(100);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [startTime, setStartTime] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const makeCall = () => {
    const args = {
      number: "7607778926", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#FDFAE7"} />
      <TouchableOpacity
        style={styles.backdrop}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/back.png",
          }}
          style={{ width: 27, height: 27 }}
        />
      </TouchableOpacity>

      <View style={Styles.cont}>
        <FlatList
          data={data.images}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          horizontal={true}
          pagingEnabled={true}
        />

        <ScrollView>
          {/* <View style={Styles.indicators}>
            <View style={Styles.circles} />
            <View style={Styles.circles} />
            <View style={Styles.circles} />
            <View style={Styles.circles} />
          </View> */}

          <View style={{ marginHorizontal: 15 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={Styles.prkName}>{data.name}</Text>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/bookmark.png",
                  }}
                  style={{ width: 27, height: 27 }}
                />
              </TouchableOpacity>
            </View>
            <Text style={Styles.txt1}>{data.address}</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: "#f1781e",
                    borderRadius: 5,
                    paddingHorizontal: 1,
                    marginRight: 5,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/car.png",
                    }}
                    style={{
                      width: 27,
                      height: 27,
                    }}
                  />
                </View>

                <View
                  style={{
                    borderWidth: 2,
                    borderColor: "green",
                    justifyContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "green",
                      paddingHorizontal: 5,
                    }}
                  >
                    {data.totalSlots}
                  </Text>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={[Styles.txt1, { color: "green", fontWeight: "600" }]}
                  >
                    {" "}
                    Available Spots
                  </Text>
                </View>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    backgroundColor: "#f1781e",
                    borderRadius: 5,
                    paddingHorizontal: 1,
                    marginRight: 5,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/route.png",
                    }}
                    style={{
                      width: 27,
                      height: 27,
                    }}
                  />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text style={Styles.txt1}>4.2 km away</Text>
                </View>
              </View>
            </View>
          </View>

          {/*  */}

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#F4F4F4",
              // backgroundColor:'red',
              justifyContent: "space-between",
              marginTop: 10,
              paddingVertical: 10,
              paddingHorizontal: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                makeCall(data.phoneNumber);
              }}
              style={{ flexDirection: "row" }}
            >
              <View
                style={{
                  backgroundColor: "#f1781e",
                  borderRadius: 50,
                  padding: 5,
                  marginRight: 5,
                }}
              >
                <Image
                  source={{
                    uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/call.png",
                  }}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </View>
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={[Styles.txt1, { color: "#f1781e", fontWeight: "600" }]}
                >
                  Call
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL(data.direction);
              }}
              style={{ flexDirection: "row" }}
            >
              <View
                style={{
                  backgroundColor: "#f1781e",
                  borderRadius: 50,
                  padding: 5,
                  marginRight: 5,
                }}
              >
                <Image
                  source={{
                    uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/direction.png",
                  }}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </View>
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={[Styles.txt1, { color: "#f1781e", fontWeight: "600" }]}
                >
                  Directions
                </Text>
              </View>
            </TouchableOpacity>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#f1781e",
                  borderRadius: 50,
                  padding: 5,
                  marginRight: 5,
                }}
              >
                <Image
                  source={{
                    uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/share.png",
                  }}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </View>
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={[Styles.txt1, { color: "#f1781e", fontWeight: "600" }]}
                >
                  Share
                </Text>
              </View>
            </View>
          </View>

          {/*  */}

          <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <Text style={[Styles.txt1, { fontWeight: "600", fontSize: 18 }]}>
              Timing
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

            <Text style={[Styles.txt1, { fontWeight: "400", color: "black" }]}>
              This service is available 24 x 7, but parking is mainly available
              from 8AM to 10PM.
            </Text>
          </View>

          {/* <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <Text style={[Styles.txt1, { fontWeight: "600", fontSize: 18 }]}>
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

            <Text style={[Styles.txt1, { fontWeight: "400", color: "black" }]}>
              {`Charges for four wheeler parking:\n\nParking fees up to 4 hrs – INR 50/-\n\nParking fees from 4 – 8 hrs – INR 70/-\n\nParking fees for more than (8 Hours) INR 110/-\n\nParking monthly pass - INR 2000/-`}
            </Text>
          </View> */}

          {/* <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <Text style={[Styles.txt1, { fontWeight: "600", fontSize: 18 }]}>
              About
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

            <Text style={[Styles.txt1, { fontWeight: "400", color: "black" }]}>
              {`To provide better commute facilities to devotees, various routes connecting Ayodhya with other districts and roads to Shri Ram Janmabhoomi Temple are being widened and strengthened.\n\nAs the much-awaited Pran Pratishtha ceremony of Ram Mandir, scheduled to be held on December 22, is around the corner, Ayodhya is gearing up to welcome a humongous crowd of devotees. To provide parking facilities to the visitors, the city administration has undertaken several projects, including building five multi-storey parking.\n\nOf the five multi-storey parking being built, the construction works of Tedhibazar East, Tedhibazar West, Kaushalaj Kunj and Amaniganj are complete. The construction of smart vehicle parking near the Collectorate are completed. All these parking lots will accommodate around 600 vehicles.`}
            </Text>
          </View> */}

          {/* <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <Text style={[Styles.txt1, { fontWeight: "600", fontSize: 18 }]}>
              Terms & Conditions
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

            <Text style={[Styles.txt1, { fontWeight: "400", color: "black" }]}>
              {`Service is not free of charge. There may be fees applied when you avail of the services.\n\n • The vehicle should be locked properly and with all technical facilities.\n\n • Properly locked and parked inside the parking lots.\n\n • Cancellation is not allowed for this service
`}
            </Text>
          </View> */}

          <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <Text style={[Styles.txt1, { fontWeight: "600", fontSize: 18 }]}>
              Disclaimer
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
            <Text style={[Styles.txt1, { fontWeight: "400", color: "black" }]}>
              {`Info may not be accurate or current. Verify with the original source before use. You're responsible for decisions based on this info. It's for informational purposes only, not professional advice. We're not liable for any errors, omissions, or actions taken based on this info.`}
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          // onPress={() => navigation.navigate('ComingSoon', { data: data })}
          onPress={() => navigation.navigate("BookingEntry", { data: data })}
          style={{
            backgroundColor: "#F0A936",
            padding: 10,
            marginHorizontal: 10,
            borderRadius: 10,
            elevation: 1,
            marginBottom: 10,
            marginTop: 10,
            paddingVertical: 12,
            marginTop: 10,
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
            Book Parking
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "#feeed6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    width: 35,
    height: 35,
    position: "absolute",
    marginLeft: 10,
    marginTop: 10,
    zIndex: 1,
  },
});

const Styles = StyleSheet.create({
  cont: {
    backgroundColor: "#FDFAE7",
    flex: 1,
    justifyContent: "space-between",
  },
  headingBar: {},
  card: {
    flex: 1,
  },
  cmplx: {
    // width: winWidth,
    // height: 200,

    height: 235,
    resizeMode: "cover",
  },
  prkName: {
    color: "#411609",
    fontSize: 18,
    fontWeight: "700",
  },
  txt1: {
    color: "black",
    fontSize: 15,
    // marginTop:5
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
    alignSelf: "center",
    marginTop: 6,
  },
  circles: {
    width: 8,
    height: 8,
    backgroundColor: "orange",
    borderRadius: 100,
  },
});

const vnStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F2F3",
    // backgroundColor: 'red',
    borderRadius: 5,
    // paddingVertical: 8,
    paddingHorizontal: 12,
    // margin: 10,
    elevation: 1,
    marginTop: 10,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
