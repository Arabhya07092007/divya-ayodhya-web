import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFAE7",
    // justifyContent: "center",
    // alignItems: "center",
    margin: 0,
    padding: 0,
  },
  navbar: {
    backgroundColor: "#f0ab52",
    // width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 105,
    height: 60,
  },

  navHeading: {
    fontSize: 25,
    fontWeight: "600",
    // color: "rgb(176, 20, 50)",
    color: "white",
    marginLeft: 10,
  },

  navTxt: {
    color: "white",
    marginRight: 20,
    fontSize: 18,
    fontWeight: "500",
    // color: "rgb(176, 20, 50)",
  },
  imgBack: {
    width: "100%",
    height: 480,
  },
  bgHeading: {
    fontSize: 40,
    fontWeight: "700",
    color: "white",
    marginTop: 50,
    marginLeft: 20,
    paddingHorizontal: 60,
  },
  bgdesc: {
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    marginTop: 20,
    marginLeft: 20,
    paddingHorizontal: 60,
  },
  detailsCard: {
    marginHorizontal: 50,
    backgroundColor: "white",
    // marginTop: -40,
    // height: 150,
    borderRadius: 20,
    padding: 20,
    top: -60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    // elevation: 5,
    // paddingBottom: 30,
  },
  dtHeading: {
    fontSize: 25,
    fontWeight: "500",
    color: "black",
  },
  srTxt: {
    backgroundColor: "white",
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  srTxtCont: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#79747E",
    top: -10,
  },
  srTop: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    backgroundColor: "white",
    paddingHorizontal: 8,
  },
  srTopCont: {
    zIndex: 1,
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 10,
  },

  hrCradsMainCont: {
    marginHorizontal: 50,
    marginTop: 50,
  },

  superCardCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "lightgreen",
    // padding: 20,
    marginTop: 30,
  },
});

export default styles;
