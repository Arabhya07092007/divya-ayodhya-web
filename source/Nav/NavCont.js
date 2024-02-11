import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./StackNav";
import HotelStack from "../HomeStays/HotelStack";
// import ParkStack from "./ParkingStack";
import ParkStack from "../Payments/paymentStack";

export default function NavCont() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
