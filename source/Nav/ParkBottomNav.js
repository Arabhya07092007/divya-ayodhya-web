import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  OthersIcon,
  TempleIcon,
  FoodIcon,
  TicketsIcons,
} from "../Components/SvgIcon";
import ParkingFeed from "../Parking/ParkingFeed";
import BookingHistory from "../Parking/BookingHistory";

const Tab = createBottomTabNavigator();

function ParkBottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#B01432",
        tabBarLabelStyle: { fontWeight: "400", fontSize: 11 },
        tabBarStyle: { backgroundColor: "#FFFEDE" },
        headerTintColor: "black",
        headerStyle: { backgroundColor: "#FDFAE7" },

        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 20 },
      }}
    >
      <Tab.Screen
        name="BookingFeed"
        component={ParkingFeed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} />,
          headerShown: true,
          title: "Parkings in Ayodhya",
        }}
      />
      <Tab.Screen
        name="BookingHistory"
        component={BookingHistory}
        options={{
          tabBarLabel: "Your Tickets",
          tabBarIcon: ({ color, size }) => <TicketsIcons color={color} />,
          title: "Your Bookings",
        }}
      />
    </Tab.Navigator>
  );
}

export default ParkBottomNav;
