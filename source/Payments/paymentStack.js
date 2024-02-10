import * as React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./home";
import Response from "./Response";

const Stack = createStackNavigator();

function ParkStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      /> */}
      <Stack.Screen
        name="Response"
        component={Response}
        options={{
          title: "Response",
        }}
      />
    </Stack.Navigator>
  );
}

export default ParkStack;
