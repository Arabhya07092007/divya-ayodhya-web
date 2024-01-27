import React, { Component, useState } from "react";
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
  Animated,
} from "react-native";
import hotelsData from "./Dataset/data2";
import NavBar from "./Components/NavBar";
import styles from "./Styles/HotelScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import Paginator from "./Components/Paginator";
import WhChose from "./Components/whChose";
import selectRooms from "./Styles/selectRoom";
import ImageRender from "./Components/RenderImage";

import RulesComp from "./Components/RulesComp";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

export default function HotelScreen({ navigation, route }) {
  const { data } = route.params;
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesRef = React.useRef(null);

  const viewableItemsChanged = React.useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const houseRules = [
    "Guest can check-in only with ID Proof.",
    "Check-in: 12:00 PM - 11:00 PM",
    "Check-out: 11:00 AM",
    "Smoking within premises is not allowed.",
    "Alcohol consumption is not allowed.",
    "No loud music or noise allowed.",
  ];

  const price = () => {
    let price =
      (bookingDetail.rooms[0].data
        ? parseInt(bookingDetail.rooms[0].data.price.slice(1)) *
          parseInt(bookingDetail.rooms[0].data.count)
        : 0) +
      (bookingDetail.rooms[1].data
        ? parseInt(bookingDetail.rooms[1].data.price.slice(1)) *
          parseInt(bookingDetail.rooms[1].data.count)
        : 0) +
      (bookingDetail.rooms[2].data
        ? parseInt(bookingDetail.rooms[2].data.price.slice(1)) *
          parseInt(bookingDetail.rooms[2].data.count)
        : 0) +
      (bookingDetail.rooms[3].data
        ? parseInt(bookingDetail.rooms[3].data.price.slice(1)) *
          parseInt(bookingDetail.rooms[3].data.count)
        : 0) +
      (bookingDetail.rooms[4].data
        ? parseInt(bookingDetail.rooms[4].data.price.slice(1)) *
          parseInt(bookingDetail.rooms[4].data.count)
        : 0);
    return price;
  };

  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count4, setCount4] = React.useState(0);
  const [count5, setCount5] = React.useState(0);

  const availableRooms = 5;

  const handleAddRoom = (item, index) => {
    if (index == 0) {
      if (count1 < availableRooms) {
        setCount1(count1 + 1);
        let data = {
          name: item.name,
          price: item.pricing,
          count: count1 + 1,
          indexOfRoom: index,
        };

        let newData = bookingDetail;
        newData.rooms[index].data = data;
        //console.log(newData)
        setBookingDetail(newData);
      }
    } else if (index == 1) {
      if (count2 < availableRooms) {
        setCount2(count2 + 1);
        let data = {
          name: item.name,
          price: item.pricing,
          count: count2 + 1,
          indexOfRoom: index,
        };

        let newData = bookingDetail;
        newData.rooms[index].data = data;
        //console.log(newData)
        setBookingDetail(newData);
      }
    } else if (index == 2) {
      if (count3 < availableRooms) {
        setCount3(count3 + 1);
        let data = {
          name: item.name,
          price: item.pricing,
          count: count3 + 1,
          indexOfRoom: index,
        };

        let newData = bookingDetail;
        newData.rooms[index].data = data;
        //console.log(newData)
        setBookingDetail(newData);
      }
    } else if (index == 3) {
      if (count4 < availableRooms) {
        setCount4(count4 + 1);
        let data = {
          name: item.name,
          price: item.pricing,
          count: count4 + 1,
          indexOfRoom: index,
        };

        let newData = bookingDetail;
        newData.rooms[index].data = data;
        //console.log(newData)
        setBookingDetail(newData);
      }
    } else if (index == 4) {
      if (count5 < availableRooms) {
        setCount5(count5 + 1);
        let data = {
          name: item.name,
          price: item.pricing,
          count: count5 + 1,
          indexOfRoom: index,
        };

        let newData = bookingDetail;
        newData.rooms[index].data = data;
        //console.log(newData)
        setBookingDetail(newData);
      }
    }
  };

  const handleRemoveRoom = (item, index) => {
    // if (count > 0) {
    //     setCount(count - 1);
    //     let data = {
    //         name: item.name,
    //         price: item.pricing,
    //         count: count - 1,
    //         indexOfRoom: index
    //     }

    //     let newData = bookingDetail;
    //     newData.rooms[index].data = data;
    //     console.log(newData)
    //     setBookingDetail(newData);
    // }

    if (index == 0) {
      if (count1 > 0) {
        setCount1(count1 - 1);
        let data = {
          name: item.name,
          price: item.pricing,
          count: count1 - 1,
          indexOfRoom: index,
        };

        let newData = bookingDetail;
        newData.rooms[index].data = data;
        //console.log(newData)
        setBookingDetail(newData);
      }
    } else if (index == 1) {
      if (count2 > 0) {
        setCount2(count2 - 1);
        let data = {
          name: item.name,
          price: item.pricing,
          count: count2 - 1,
          indexOfRoom: index,
        };

        let newData = bookingDetail;
        newData.rooms[index].data = data;
        //console.log(newData)
        setBookingDetail(newData);
      }
    } else if (index == 2) {
      if (count3 > 0) {
        setCount3(count3 - 1);
        let data = {
          name: item.name,
          price: item.pricing,
          count: count3 - 1,
          indexOfRoom: index,
        };

        let newData = bookingDetail;
        newData.rooms[index].data = data;
        //console.log(newData)
        setBookingDetail(newData);
      }
    } else if (index == 3) {
      if (count4 > 0) {
        setCount4(count4 - 1);
        let data = {
          name: item.name,
          price: item.pricing,
          count: count4 - 1,
          indexOfRoom: index,
        };

        let newData = bookingDetail;
        newData.rooms[index].data = data;
        //console.log(newData)
        setBookingDetail(newData);
      }
    } else if (index == 4) {
      if (count5 > 0) {
        setCount5(count5 - 1);
        let data = {
          name: item.name,
          price: item.pricing,
          count: count5 - 1,
          indexOfRoom: index,
        };

        let newData = bookingDetail;
        newData.rooms[index].data = data;
        //console.log(newData)
        setBookingDetail(newData);
      }
    }
  };

  const [bookingDetail, setBookingDetail] = useState({
    from: "24 Jan",
    to: "27 Jan",
    hotelId: "3213123123",
    rooms: [
      { id: "1", data: null },
      { id: "2", data: null },
      { id: "3", data: null },
      { id: "4", data: null },
      { id: "5", data: null },
    ],
  });

  function Card({ item, navigation, onData, index }) {
    return (
      <View style={selectRooms.superCont}>
        <View style={selectRooms.imgCont}>
          <Image
            source={{ uri: item.roomImages[0] }}
            style={selectRooms.roomsImg}
          />
        </View>
        <View style={selectRooms.detailsCont}>
          <Text style={selectRooms.htName}>{item.name}</Text>

          <View style={selectRooms.hrcards}>
            <Text style={selectRooms.hrCardtxt}>Attached Bathroom</Text>
            <Text style={selectRooms.hrCardtxt}>2 Adults & 1 Child</Text>
          </View>

          <View style={selectRooms.amentitiesCont}>
            <View style={selectRooms.amenitiesIconsCont}>
              <Image
                source={require("./assests/hi7.png")}
                style={selectRooms.amenitiesIcon}
              />
              <Image
                source={require("./assests/hi2.png")}
                style={selectRooms.amenitiesIcon}
              />
              <Image
                source={require("./assests/hi5.png")}
                style={selectRooms.amenitiesIcon}
              />

              <Text style={selectRooms.amnsMore}>+3 more</Text>
            </View>

            <Text style={selectRooms.amnsMore}>11 Rooms Left</Text>
          </View>

          <View style={selectRooms.cardBCont}>
            <View>
              <Text style={selectRooms.pricing}>{item.pricing}</Text>
              <Text style={{ color: "grey", marginTop: -5 }}>
                Per room for one night
              </Text>
            </View>
            {/* <TouchableOpacity style={selectRooms.bottomBtn}>
            <Text style={selectRooms.btnTxt}>Add</Text>
          </TouchableOpacity> */}
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={selectRooms.roomsBtn}
                onPress={() => {
                  handleAddRoom(item, index);
                }}
              >
                <Ionicons name="add-outline" size={32} color="black" />
              </TouchableOpacity>

              <View
                style={{
                  width: 35,
                  height: 35,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  {index == 0
                    ? count1
                    : index == 1
                    ? count2
                    : index == 2
                    ? count3
                    : index == 3
                    ? count4
                    : index == 4
                    ? count5
                    : 0}
                </Text>
              </View>

              <TouchableOpacity
                style={selectRooms.roomsBtn}
                onPress={() => {
                  handleRemoveRoom(item, index);
                }}
              >
                <Ionicons name="remove-outline" size={32} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.cont}>
      <NavBar />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.SvCont}>
        <FlatList
          data={data.rooms[0].roomImages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ImageRender}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={32}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          style={{}}
        />

        <Paginator data={data.rooms[0].roomImages} scrollX={scrollX} />

        <View style={{ paddingHorizontal: 50 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.heading}>{data.hotelName}</Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("./assests/stars.png")}
                  style={styles.ratingImg}
                />
                <Image
                  source={require("./assests/stars.png")}
                  style={styles.ratingImg}
                />
                <Image
                  source={require("./assests/stars.png")}
                  style={styles.ratingImg}
                />
                <Image
                  source={require("./assests/stars.png")}
                  style={styles.ratingImg}
                />
                <Image
                  source={require("./assests/stars.png")}
                  style={styles.ratingImg}
                />
                <Text style={{ fontSize: 16, marginTop: 4 }}> 5.0 (89)</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{
                    uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/locationIcon.png",
                  }}
                  style={styles.locationIcon}
                />
                <Text style={styles.desc}>{data.address}</Text>
              </View>
            </View>

            <View>
              <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text style={styles.price}>{data.rooms[0].pricing}</Text>
                <Text style={{ fontSize: 16, top: -9, marginLeft: 2 }}>
                  /night
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.icontCont}>
                  <Ionicons name="heart-outline" size={26} color="#black" />
                </View>
                <View style={[styles.icontCont, { marginLeft: 10 }]}>
                  <Ionicons
                    name="share-social-outline"
                    size={26}
                    color="#black"
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
              About this place
            </Text>
            <Text style={{ fontSize: 16, marginTop: 10 }}>{data.about}</Text>
          </View>

          <View style={{ height: 1, backgroundColor: "grey", marginTop: 20 }} />

          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
              Why chose us ?
            </Text>

            <WhChose
              uri={require("./assests/hi1.png")}
              text={"Clean, fresh vibe"}
            />
            <WhChose
              uri={require("./assests/hi2.png")}
              text={"Guest friendly."}
            />
            <WhChose
              uri={require("./assests/hi3.png")}
              text={"Rated for high service and staff"}
            />

            <View
              style={{
                height: 1,
                backgroundColor: "grey",
                marginTop: 20,
                marginBottom: 20,
              }}
            />

            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
              Why chose us ?
            </Text>

            <WhChose uri={require("./assests/hi4.png")} text={"Free Wifi"} />
            <WhChose uri={require("./assests/hi5.png")} text={"Free Parking"} />
            <WhChose uri={require("./assests/hi6.png")} text={"CCTV"} />
            <WhChose
              uri={require("./assests/hi7.png")}
              text={"24*7 check-in"}
            />
            <WhChose uri={require("./assests/hi8.png")} text={"Laundry"} />

            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
              Cancellation Policies
            </Text>

            <WhChose
              moreStyles={{ marginRight: 15 }}
              uri={require("./assests/hi9.png")}
              text={"Free cancellation till 24 hours before check-in"}
            />
            <WhChose
              moreStyles={{ marginRight: 15 }}
              uri={require("./assests/hi10.png")}
              text={
                "No refund if booking is cancelled within 24 hours of check-in"
              }
            />

            <RulesComp houseRules={houseRules} />
          </View>
        </View>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 20,
            marginLeft: 50,
            marginBottom: 20,
            marginTop: -40,
          }}
        >
          Select Rooms
        </Text>

        <FlatList
          horizontal
          data={data.rooms}
          style={{ marginLeft: 50 }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Card item={item} index={index} navigation={navigation} />
          )}
        />
      </ScrollView>
    </View>
  );
}
