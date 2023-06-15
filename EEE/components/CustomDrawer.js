import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors, parameter } from "../global/styles";

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          backgroundColor: colors.buttons,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            alt="Not find"
            source={require("../assets/Images/filterImages/burger.png")}
            style={styles.userAvtar}
          />
          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Nishant
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 13,
              }}
            >
              nish@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                color: colors.cardbackground,
                fontSize: 18,
              }}
            >
              1
            </Text>
            <Text style={{ color: colors.cardbackground, fontSize: 14 }}>
              My Favorites
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                color: colors.cardbackground,
                fontSize: 18,
              }}
            >
              0
            </Text>
            <Text style={{ color: colors.cardbackground, fontSize: 14 }}>
              Shopping Cart
            </Text>
          </View>
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: "#8200d6",
          marginTop: -50,
          zIndex: 10,
        }}
      >
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: colors.grey5,
          backgroundColor: colors.cardbackground,
        }}
      >
        <Text style={styles.preferences}>Preferences</Text>
        <View style={styles.switchTextContainer}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            //   thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
            thumbColor="#f4f3f4"
            style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
          />
          <Text
            style={{
              fontSize: 15,

              //   marginLeft: ,
            }}
          >
            Dark Theme
          </Text>
        </View>
      </View>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => {}}
          style={{ paddingBottom: 15, paddingTop: 5 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,

                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userAvtar: {
    height: 67.5,
    width: 67.5,
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 20,
  },
  preferences: {
    fontSize: 16,
    color: colors.grey2,
    paddingTop: 10,
    fontWeight: "500",
    paddingLeft: 20,
  },
  switchTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    marginLeft: 7,
    // paddingRight: 25,
    paddingVertical: 5,
  },
  switchText: {
    fontSize: 17,
    color: colors.grey2,
    paddingTop: 10,
    fontWeight: "bold",
  },
});
