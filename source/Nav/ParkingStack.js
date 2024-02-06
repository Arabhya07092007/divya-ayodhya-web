import * as React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ParkingFeed from "../Parking/ParkingFeed";
import ParkingComplex from "../Parking/ParkingComplex";
import BookingEntry from "../Parking/BookingEntry";
import ReviewSum from "../Parking/ReviewSum";
import Tickets from "../Parking/Tickets";
import ParkBottomNav from "./ParkBottomNav";

const Stack = createStackNavigator();

function ParkStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShadowVisible: true,
        headerTintColor: "black",
        headerStyle: { backgroundColor: "#FDFAE7" },
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 20 },
      }}
      initialRouteName="ParkBottomNav"
    >
      <Stack.Screen
        name="ParkBottomNav"
        component={ParkBottomNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ParkingComplex"
        component={ParkingComplex}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookingEntry"
        component={BookingEntry}
        options={{
          title: "Enter Details",
        }}
      />
      <Stack.Screen
        name="ReviewSum"
        component={ReviewSum}
        options={{
          title: "Review Summary",
        }}
      />
      <Stack.Screen
        name="Tickets"
        component={Tickets}
        options={{
          title: "Tickets",
        }}
      />
    </Stack.Navigator>
  );
}

export default ParkStack;
