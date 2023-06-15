import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/authScreens/MainScreens/HomeScreen";
import Ionic from "react-native-vector-icons/Ionicons";
import SearchScreen from "../screens/authScreens/MainScreens/SearchScreen";
import MyAccountScreen from "../screens/authScreens/MainScreens/MyAccountScreen";
import MyOrderScreen from "../screens/authScreens/MainScreens/MyOrderScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          position: "absolute",
          borderTopColor: "transparent",
          elevation: 10,
          height: 54,
          overflow: "hidden",
        },
        tabBarIcon: ({ focused, colour }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = focused ? "home-sharp" : "home-outline";
            colour = focused && "#ff8c52";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search-sharp" : "search-outline";
            colour = focused && "#ff8c52";
          } else if (route.name === "My Order") {
            iconName = focused ? "cart-sharp" : "cart-outline";
            colour = focused && "#ff8c52";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-sharp" : "person-outline";
            colour = focused && "#ff8c52";
          }
          return (
            <>
              <Ionic
                name={iconName}
                style={{ marginBottom: 4 }}
                size={22}
                color={colour ? colour : "grey"}
              />
              <Ionic
                name="ellipse"
                style={{ display: colour ? "flex" : "none" }}
                size={4}
                color={colour ? colour : "transparent"}
              />
            </>
          );
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="My Order" component={MyOrderScreen} />
      <Tab.Screen name="Profile" component={MyAccountScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
