import * as React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import Home from "./Home";
import HotelsFeed from "./HotelsFeed";
import HotelScreen from "./HotelScreen";

const Stack = createStackNavigator();

function HotelStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name="HotelsFeed" component={HotelsFeed} />
      <Stack.Screen name="HotelScreen" component={HotelScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HotelStack;
