import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const TempHeader = ({ scale }) => {
  return (
    <View
      style={[
        {
          elevation: scale,
          height: 90,
          backgroundColor: "#fff",
        },
      ]}
    >
      <View
        style={{
          marginTop: "15%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "600" }}>Nishant</Text>
        <Ionicons
          name="person-outline"
          color={"#000"}
          size={28}
          style={{ marginTop: -6 }}
        />
      </View>
    </View>
  );
};

export default TempHeader;

const styles = StyleSheet.create({});
