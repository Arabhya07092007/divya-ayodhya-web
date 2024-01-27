import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

function Card({ item, navigation }) {
  return (
    <View style={styles.cardCont}>
      <ImageBackground
        source={{ uri: item.mainImage }}
        style={{
          height: 370,
          width: 290,
          resizeMode: "cover",
          borderRadius: 10,
          justifyContent: "flex-end",
          paddingHorizontal: 10,
          paddingBottom: 10,
        }}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "700" }}>
              {item.hotelName}
            </Text>
            <Text style={{ fontSize: 15, color: "white", fontWeight: "400" }}>
              {item.address}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "700" }}>
              {item.rooms[0].pricing}{" "}
            </Text>
            <Text style={{ fontSize: 15, color: "white", fontWeight: "400" }}>
              per night
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#B01432",
            width: "100%",
            height: 45,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "400" }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cardCont: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,

    backgroundColor: "white",

    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
});

export default Card;
