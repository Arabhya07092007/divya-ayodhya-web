import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#FDFAE7",
    margin: 0,
    padding: 0,
  },
  navbar: {
    backgroundColor: "#f0ab52",
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
    color: "white",
    marginLeft: 10,
  },

  navTxt: {
    color: "white",
    marginRight: 20,
    fontSize: 18,
    fontWeight: "500",
  },
  detailsCard: {
    marginHorizontal: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    marginTop: -130,
    marginBottom: 20,
    // top: -140,
  },
  srTxt: {
    backgroundColor: "white",
    fontSize: 18,
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 10,
    flex: 1,
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
  searchBtn: {
    backgroundColor: "#fba6ac",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    width: 55,
    alignSelf: "center",
    borderRadius: 10,
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
});

export default styles;
