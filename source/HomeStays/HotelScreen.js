import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import { styles } from "./Styles/HotelScreen";
import hotelsData from "./Dataset/data2";
import NavBar from "./Components/NavBar";
import HotelDesc from "./HtsrCont/HotelDesc";
import selectRooms from "./Styles/selectRoom";

const { width, height } = Dimensions.get("window");
const icons = (icon) => {
  return `https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/hmStays/${icon}.png`;
};

export default function HotelScreen({ navigation, route }) {
  const data = hotelsData[0];

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
        setBookingDetail(newData);
      }
    }
  };

  const handleRemoveRoom = (item, index) => {
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
        setBookingDetail(newData);
      }
    }
  };

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

  function Card({ item, index }) {
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
                source={{ uri: icons("hi7") }}
                style={selectRooms.amenitiesIcon}
              />
              <Image
                source={{ uri: icons("hi2") }}
                style={selectRooms.amenitiesIcon}
              />
              <Image
                source={{ uri: icons("hi5") }}
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
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={selectRooms.roomsBtn}
                onPress={() => {
                  handleAddRoom(item, index);
                }}
              >
                <Image
                  source={{
                    uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/plus.png",
                  }}
                  style={{ width: 27, height: 27 }}
                />
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
                <Image
                  source={{
                    uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/minus.png",
                  }}
                  style={{ width: 27, height: 27 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.cont}>
      <NavBar navigation={navigation} />
      <View style={styles.flexCont}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "70%", flex: 1, height: height - 80 }}
        >
          <HotelDesc data={data} />

          <View style={{ marginHorizontal: 30, marginTop: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              Featured Rooms
            </Text>

            <View style={{ marginLeft: 15, marginTop: 20 }}>
              <FlatList
                horizontal
                data={data.rooms}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <Card item={item} index={index} navigation={navigation} />
                )}
                style={{ backgroundColor: "#FDFAE7", marginHorizontal: -15 }}
              />
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            width: "30%",
            backgroundColor: "#e9f5e3",
          }}
        >
          <View
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "red",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              position: "absolute",
            }}
          />
        </View>
      </View>
    </View>
  );
}
