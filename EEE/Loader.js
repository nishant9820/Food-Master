import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomTabs from "./Tabs/BottomTabs";

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      {/* 2.9.1 */}
      {/* 0.70.5 */}
      <BottomTabs />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
