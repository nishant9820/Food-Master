import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Icon, withBadge } from "react-native-elements";
import { colors, parameter } from "../global/styles";
import { useNavigation } from "@react-navigation/native";
function HomeHeader() {
  const BadgeIcon = withBadge(0)(Icon);
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
          marginTop: 25,
        }}
      >
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={32}
        />
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
          marginTop: 25,
        }}
      >
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Eat Eat Eat
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: 18,
          marginTop: 25,
        }}
      >
        <BadgeIcon
          type="material-community"
          name="cart"
          color={colors.cardbackground}
          size={35}
        />
      </View>
    </View>
  );
}

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: parameter.headerHeight,
    backgroundColor: colors.buttons,
    justifyContent: "space-between",
  },
});
