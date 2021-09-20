import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationStrings from "../constants/navigationStrings";
import { EditProfile, Home, ProductDetails } from "../Screens";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name={navigationStrings.HOME} component={Home} />
        <Stack.Screen name={navigationStrings.PRODUCT_DETAILS} component={ProductDetails} />
      </Stack.Navigator>
    );
  }
