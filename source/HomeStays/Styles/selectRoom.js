import { StyleSheet, Dimensions } from "react-native";
const winWidth = Dimensions.get("window").width;

const selectRooms = StyleSheet.create({
  superCont: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    width: 370,
    // marginLeft: 15,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    // marginBottom: 10,
    height: 400,
    marginRight: 10,
  },
  imgCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  roomsImg: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  detailsCont: {
    flex: 1,
    marginHorizontal: 10,
  },
  htName: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
  },
  hrcards: {
    flexDirection: "row",
    // marginTop: 10,
    marginBottom: 7,
  },
  hrCardtxt: {
    fontSize: 14,
    color: "black",
    backgroundColor: "#FDFAE7",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
    paddingHorizontal: 5,
    // elevation: 1,
  },
  amentitiesCont: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amenitiesIconsCont: { flexDirection: "row", alignItems: "center" },
  amenitiesIcon: { width: 27, height: 27, marginRight: 7 },
  amnsMore: { fontSize: 14, color: "grey", fontWeight: "500" },
  cardBCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  pricing: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  bottomBtn: {
    borderColor: "#FFD428",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    elevation: 1,
    borderWidth: 1.5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    fontSize: 14,
    color: "black",
    fontWeight: "600",
  },
  roomsBtn: {
    borderRadius: 10,
    borderColor: "#6d6d6d",
    borderWidth: 1.5,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },
});

export default selectRooms;
