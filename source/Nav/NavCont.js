import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./StackNav";
import HotelStack from "../HomeStays/HotelStack";
import ParkStack from "./ParkingStack";

export default function NavCont() {
  return (
    <NavigationContainer>
      <ParkStack />
    </NavigationContainer>
  );
}
