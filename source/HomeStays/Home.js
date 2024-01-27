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
import homeStaysCard from "./homestays";
import styles from "./Styles/HomeStyles";
import Card from "./Components/styledCard";

export default function Home({ navigation }) {
  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = days[date.getDay()];
  const tarikh = date.getDate();
  const month = date.getMonth() + 1;

  return (
    <View style={styles.container}>
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

      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Text style={styles.dtHeading}>Find your stay in Divya Ayodhya</Text>
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
                  placeholder="Search places in Ayodhya"
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
          </View>

          <View
            style={{
              flex: 1,
              //   backgroundColor: "red",
              flexDirection: "row",
              marginHorizontal: 10,
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: "white" }}>.</Text>
            </View>

            <Text style={{ color: "black", fontSize: 18, marginRight: 10 }}>
              + Add Promo code
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#B01432",
                // flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: 200,
                height: 55,
                alignSelf: "center",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: -50 }}>
          <View style={styles.hrCradsMainCont}>
            <View style={styles.hrCardTxtCont}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 26, fontWeight: "600", color: "black" }}
                >
                  Homestays in Ayodhya
                </Text>

                <TouchableOpacity
                  style={{
                    borderRadius: 5,
                    borderWidth: 1.5,
                    width: 80,
                    borderColor: "#B01432",
                    padding: 5,
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontWeight: "500" }}>See All</Text>
                </TouchableOpacity>
              </View>

              <Text style={{ fontSize: 18, color: "black", marginTop: 10 }}>
                Embark on a spiritual journey in the sacred land of Lord Ram as
                you plan your divine {"\n"}experience in Ayodhya.
              </Text>
            </View>

            <View style={styles.superCardCont}>
              {homeStaysCard.map((item) => {
                return <Card item={item} navigation={navigation} />;
              })}
            </View>
          </View>

          <View style={styles.hrCradsMainCont}>
            <View style={styles.hrCardTxtCont}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 26, fontWeight: "600", color: "black" }}
                >
                  Containers in Ayodhya
                </Text>

                <TouchableOpacity
                  style={{
                    borderRadius: 5,
                    borderWidth: 1.5,
                    width: 80,
                    borderColor: "#B01432",
                    padding: 5,
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontWeight: "500" }}>See All</Text>
                </TouchableOpacity>
              </View>

              <Text style={{ fontSize: 18, color: "black", marginTop: 10 }}>
                Embark on a spiritual journey in the sacred land of Lord Ram as
                you plan your divine {"\n"}experience in Ayodhya.
              </Text>
            </View>

            <View style={styles.superCardCont}>
              {homeStaysCard.map((item) => {
                return <Card item={item} navigation={navigation} />;
              })}
            </View>
          </View>

          <View style={styles.hrCradsMainCont}>
            <View style={styles.hrCardTxtCont}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 26, fontWeight: "600", color: "black" }}
                >
                  Dormatories in Ayodhya
                </Text>

                <TouchableOpacity
                  style={{
                    borderRadius: 5,
                    borderWidth: 1.5,
                    width: 80,
                    borderColor: "#B01432",
                    padding: 5,
                    alignItems: "center",
                    marginTop: 5,
                  }}
                >
                  <Text style={{ fontWeight: "500" }}>See All</Text>
                </TouchableOpacity>
              </View>

              <Text style={{ fontSize: 18, color: "black", marginTop: 10 }}>
                Embark on a spiritual journey in the sacred land of Lord Ram as
                you plan your divine {"\n"}experience in Ayodhya.
              </Text>
            </View>

            <View style={styles.superCardCont}>
              {homeStaysCard.map((item) => {
                return <Card item={item} navigation={navigation} />;
              })}
            </View>
          </View>

          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "orange",
              justifyContent: "center",
              alignItems: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "black" }}>Footer</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
