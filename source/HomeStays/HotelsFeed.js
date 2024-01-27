import React, { useState, useEffect } from "react";
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
} from "react-native";
import styles from "./Styles/Hotelsfeed";
import hotelsData from "./Dataset/data2";
import Card from "./Components/styledCard";
import Tab from "./Components/Tab";

export default function HotelsFeed({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(hotelsData);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text) {
      const newData = hotelsData.filter((item) => {
        const itemData = item.hotelName.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.startsWith(textData);
      });
      setFilteredData(newData);
    } else {
      setFilteredData(hotelsData);
    }
  };

  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[date.getDay()];
  const tarikh = date.getDate();
  const month = date.getMonth() + 1;

  const [tab, setTab] = useState(0);

  return (
    <View style={styles.cont}>
      <View style={styles.navbar}>
        <Image
          source={{ uri: "https://divyaayodhya.com/assets/images/adalogo.png" }}
          style={styles.logo}
        />

        <View>
          <Text style={styles.navHeading}>Divya Ayodhya</Text>
        </View>

        <View
          style={{
            marginLeft: "auto",
            marginRight: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.navTxt}>Home</Text>
          <Text style={styles.navTxt}>Utilities</Text>
          <Text style={styles.navTxt}>Parkings</Text>
          <Text style={styles.navTxt}>E-Buses</Text>
          <Text style={styles.navTxt}>Cabs</Text>

          <Image
            source={{
              uri: "https://divyaayodhya.com/assets/images/ada_logo.png",
            }}
            style={{
              width: 64,
              height: 60,
              resizeMode: "contain",
              marginLeft: 100,
            }}
          />
        </View>
      </View>

      <ImageBackground
        source={require("./assests/bg2.jpg")}
        // source={{
        //   uri: "https://uptourism.gov.in/site/writereaddata/siteContent/Year_2024/202401161034006294ayodhya-banner.jpg",
        // }}
        style={styles.imgBack}
      >
        <Text style={styles.bgHeading}>
          Make your travel {`\n`}whishlist, we'll do {`\n`}the rest
        </Text>
        <Text style={styles.bgdesc}>Special offers to suit your plan</Text>
      </ImageBackground>

      <View style={styles.detailsCard}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1, marginRight: 10 }}>
            <View style={styles.srTopCont}>
              <Text style={styles.srTop}>Enter HomeStay</Text>
            </View>

            <View style={styles.srTxtCont}>
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/search.png",
                }}
                style={{ width: 30, height: 30 }}
              />
              <TextInput
                onChangeText={handleSearch}
                placeholder="Search Hotels & Homestays"
                value={searchText}
                placeholderTextColor={"#5F6368"}
                style={styles.srTxt}
              />
            </View>
          </View>

          <View style={{ marginRight: 10, width: 200 }}>
            <View style={styles.srTopCont}>
              <Text style={styles.srTop}>Check In</Text>
            </View>

            <View style={styles.srTxtCont}>
              <View style={styles.srTxt}>
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "black" }}
                >
                  {day}, {tarikh}/{month}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/date.png",
                }}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </View>

          <View style={{ marginRight: 10, width: 200 }}>
            <View style={styles.srTopCont}>
              <Text style={styles.srTop}>Check Out</Text>
            </View>

            <View style={styles.srTxtCont}>
              <View style={styles.srTxt}>
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "black" }}
                >
                  {day}, {tarikh}/{month}
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/date.png",
                }}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </View>

          <View style={{ width: 200, marginRight: 10 }}>
            <View style={styles.srTopCont}>
              <Text style={styles.srTop}>Enter HomeStay</Text>
            </View>

            <View style={styles.srTxtCont}>
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/user.png",
                }}
                style={{ width: 30, height: 30 }}
              />
              <View style={styles.srTxt}>
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "black" }}
                >
                  1 room,2 guests
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.searchBtn}>
            <Image
              source={{
                uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/search.png",
              }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Tab
            name="Homestays"
            length="253"
            tab={tab}
            onPress={() => {
              setTab(0);
            }}
            active={0}
          />
          <Vrline />
          <Tab
            name="Containers"
            length="4"
            tab={tab}
            onPress={() => {
              setTab(1);
            }}
            active={1}
          />
          <Vrline />
          <Tab
            name="Hotels"
            length="124"
            tab={tab}
            active={2}
            onPress={() => {
              setTab(2);
            }}
          />
          <Vrline />
          <Tab
            name="Dormatories"
            length="68"
            tab={tab}
            active={3}
            onPress={() => {
              setTab(3);
            }}
          />
        </View>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <Card {...item} navigation={navigation} />}
        numColumns={4}
        columnWrapperStyle={{
          marginHorizontal: 50,
          marginTop: 20,
          rowGap: 20,
          columnGap: 20,
        }}
      />
    </View>
  );
}

function Vrline() {
  return (
    <View
      style={{
        width: 2,
        backgroundColor: "grey",
        marginVertical: 10,
        // marginLeft: 10,
      }}
    />
  );
}
