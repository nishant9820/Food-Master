import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignScreen from "./screens/authScreens/Sign/SignScreen";
import Onboarding from "./screens/authScreens/Onboarding/Onboarding";
import HomeScreen from "./screens/authScreens/MainScreens/HomeScreen";
import BottomTabs from "./Tabs/BottomTabs";
import SearchScreen from "./screens/authScreens/MainScreens/SearchScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import MyAccountScreen from "./screens/authScreens/MainScreens/MyAccountScreen";
import MyOrderScreen from "./screens/authScreens/MainScreens/MyOrderScreen";
import Loader from "./Loader";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import RestaurantsMapScreen from "./screens/authScreens/Map/RestaurantsMapScreen";
import CustomDrawer from "./components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import RestaurantSearchScreen from "./screens/authScreens/ResultScreens/RestaurantSearchScreen";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Drawer1() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      useLegacyImplementation={true}
      initialRouteName="Loader"
      screenOptions={{
        headerShown: false,
        // drawerActiveBackgroundColor: "#aa18ea",
        // drawerActiveTintColor: "#fff",
        // drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          // marginLeft: -25,
          // fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Loader}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Business Console"
        component={""}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="business-sharp" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Driver Console"
        component={""}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="car-outline" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="payment"
        component={""}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="card-outline" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Promotions"
        component={""}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="pricetag-outline" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={""}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Help"
        component={""}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="help-buoy-outline" size={22} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Onboarding">
        <stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name="Loader"
          component={Drawer1}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="SignScreen"
          component={SignScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="MyAccountScreen"
          component={MyAccountScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="MyOrderScreen"
          component={MyOrderScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="RestaurantsMapScreen"
          component={RestaurantsMapScreen}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="RestaurantSearchScreen"
          component={RestaurantSearchScreen}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
