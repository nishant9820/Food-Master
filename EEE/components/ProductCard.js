import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { restaurantsData } from "../global/Data";
import { colors } from "../global/styles";
const ProductCard = ({ productName, price, image, item }) => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={styles.text1}>{item.name}</Text>
          <Text style={styles.text1}>INR{item.price}</Text>
        </View>
        <View style={styles.view4}>
          <Image style={styles.image} source={item.image} />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  view1: {
    marginHorizontal: 9,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey5,
    backgroundColor: "white",
    flexDirection: "row",
    shadowOpacity: 0.4,
    shadowColor: "black",
    margin: 5,
    width: 210,
    padding: 10,
  },
  view2: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
  },
  view3: {
    justifyContent: "space-between",
    width: 110,
  },
  text1: {
    fontSize: 15,
    color: colors.grey1,
  },
  view4: {
    width: 75,
    height: 65,
  },
  image: {
    height: 65,
    width: 75,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
