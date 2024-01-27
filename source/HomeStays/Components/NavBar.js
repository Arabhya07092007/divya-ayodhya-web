import React from "react";
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
import styles from "../Styles/HomeStyles";

export default function NavBar({ navigation }) {
  return (
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
        <TouchableOpacity>
          <Text style={styles.navTxt}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navTxt}>Utilities</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navTxt}>Parkings</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navTxt}>E-Buses</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.navTxt}>Cabs</Text>
        </TouchableOpacity>

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
  );
}
