import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import {Explore, Search } from "../Screens";

const Stack = createNativeStackNavigator();

export default function ExploreStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name={navigationStrings.EXPLORE} component={Explore} />
        <Stack.Screen name={navigationStrings.SEARCH} component={Search} />
      </Stack.Navigator>
    );
  }
