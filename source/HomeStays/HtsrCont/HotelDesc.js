import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { hts } from "../Styles/HotelScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import WhChose from "../Components/whChose";

const icons = (icon) => {
  return `https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/hmStays/${icon}.png`;
};

const location =
  "	https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/locationIcon.png";

export default function HotelDesc({ navigation, data }) {
  return (
    <View style={hts.cont}>
      <View style={{ flexDirection: "row" }}>
        <View style={hts.left}>
          <Text style={hts.heading}>{data.hotelName}</Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assests/stars.png")}
              style={hts.ratingImg}
            />
            <Image
              source={require("../assests/stars.png")}
              style={hts.ratingImg}
            />
            <Image
              source={require("../assests/stars.png")}
              style={hts.ratingImg}
            />
            <Image
              source={require("../assests/stars.png")}
              style={hts.ratingImg}
            />
            <Image
              source={require("../assests/stars.png")}
              style={hts.ratingImg}
            />
            <Text style={{ fontSize: 16, fontWeight: "500" }}>4.7 (232)</Text>
          </View>

          <View style={hts.locationCont}>
            <Image source={{ uri: location }} style={hts.locationIcon} />
            <Text style={hts.h2}>{data.address}</Text>
          </View>
        </View>

        <View style={hts.right}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 25, color: "#B01432", fontWeight: "700" }}>
              {data.rooms[0].pricing}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>/night</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 13,
            }}
          >
            <View style={hts.icnCont}>
              <Ionicons name="heart-outline" size={26} color="#black" />
            </View>
            <View style={hts.icnCont}>
              <Ionicons name="share-social-outline" size={26} color="#black" />
            </View>
          </View>
        </View>
      </View>

      <View style={hts.addrCont}>
        <Text style={hts.h1}>About this Place</Text>
        <View style={{ marginRight: 10 }}>
          <Text style={hts.h3}>{data.about}</Text>
        </View>
      </View>

      <View style={hts.choseUs}>
        <Text style={hts.h1}>Why chose us?</Text>
        <WhChose
          moreStyles={{ marginRight: 15 }}
          uri={icons("hi1")}
          text="Clean, fresh vibe"
        />
        <WhChose
          moreStyles={{ marginRight: 15 }}
          uri={icons("hi2")}
          text="Guest friendly staff."
        />
        <WhChose
          moreStyles={{ marginRight: 15 }}
          uri={icons("hi3")}
          text="Rated for high service standards."
        />
      </View>

      <View style={hts.amen}>
        <Text style={hts.h1}>Amenties Offered</Text>
        <WhChose
          moreStyles={{ marginRight: 15 }}
          uri={icons("hi4")}
          text="Free parking on premises"
        />
        <WhChose
          moreStyles={{ marginRight: 15 }}
          uri={icons("hi5")}
          text="Power backup"
        />
        <WhChose
          moreStyles={{ marginRight: 15 }}
          uri={icons("hi5")}
          text="Complementary Breakfast"
        />
        <WhChose
          moreStyles={{ marginRight: 15 }}
          uri={icons("hi6")}
          text="CCTV in common areas"
        />
        <WhChose
          moreStyles={{ marginRight: 15 }}
          uri={icons("hi11")}
          text="Front desk"
        />
      </View>

      <View style={hts.choseUs}>
        <Text style={hts.h1}>Cancellation Policies</Text>
        <WhChose
          moreStyles={{ marginRight: 15 }}
          uri={icons("hi9")}
          text="Free cancellation till 24 hours before check-in."
        />
        <WhChose
          moreStyles={{ marginRight: 15 }}
          uri={icons("hi10")}
          text="No refund if booking is cancelled within 24 hours of check-in."
        />
      </View>
    </View>
  );
}
