import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "../pages/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../pages/SplashScreen";
import LoginScreen from "../pages/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../pages/ProfileScreen";
import HistoryScreen from "../pages/HistoryScreen";
import RegisterScreen from "../pages/RegisterScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainRoute = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Riwayat" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="splash" component={SplashScreen} />

      <Stack.Screen name="login" component={LoginScreen} />

      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="main" component={MainRoute} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
