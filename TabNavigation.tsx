import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CerbrasStackNavigator, DuraplikStackNavigator } from "./StackNavigation";

const Tab = createBottomTabNavigator();

// Carrega a TabBar na Stack Navigation

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Cerbras">
      <Tab.Screen name="Cerbras" component={CerbrasStackNavigator} />
      <Tab.Screen name="Duraplik" component={DuraplikStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;