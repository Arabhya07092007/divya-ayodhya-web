import { StyleSheet } from "react-native";

const hts = StyleSheet.create({
  cont: {
    flex: 1,
    // backgroundColor: "pink",
    marginHorizontal: 30,
  },
  left: {
    flex: 1,
    // backgroundColor: "lightblue",
  },
  ratingImg: {
    width: 18,
    height: 18,
    marginRight: 5,
    marginTop: 5,
  },
  locationIcon: {
    width: 20,
    height: 20,
  },
  locationCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    // color: "red",
  },
  h1: {
    fontSize: 22,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 18,
    fontWeight: "500",
  },
  h3: {
    fontSize: 16,
    fontWeight: "400",
  },
  icnCont: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    width: 37,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#B01432",
  },
  right: {
    justifyContent: "center",
  },
  addrCont: {
    marginTop: 20,
  },
  choseUs: {
    marginTop: 20,
  },
  amen: {
    marginTop: 20,
  },
});

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: "#fdfae7",
  },
  flexCont: {
    flex: 1,
    flexDirection: "row",
  },
});

export { hts, styles };
