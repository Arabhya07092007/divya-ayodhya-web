import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  SvCont: {
    flex: 1,
    // backgroundColor: "red",
    // paddingHorizontal: 50,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    // textAlign: "center",
    marginTop: 20,
  },
  ratingImg: {
    width: 18,
    height: 18,
    marginRight: 5,
    marginTop: 5,
  },
  desc: {
    fontSize: 20,
    fontWeight: "600",
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginRight: 5,
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    color: "#B01432",
  },
  icontCont: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#B01432",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
});

export default styles;
