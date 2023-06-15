import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { colors, parameter } from "../global/styles";

const Header = ({ title, type, navigation }) => {
  return (
    <View style={styles.header}>
      <View style={{ marginTop: 42, marginLeft: 10 }}>
        <Icon
          type="material-community"
          name={type}
          color={colors.headerText}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: parameter.headerHeight,
    backgroundColor: colors.buttons,
  },
  headerText: {
    color: colors.headerText,
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 42,
    marginLeft: 30,
  },
});
