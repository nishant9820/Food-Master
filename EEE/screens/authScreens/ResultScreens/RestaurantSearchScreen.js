import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import TempHeader from "../../../components/TempHeader";
import { restaurantsData } from "../../../global/Data";
import FoodCard from "../../../components/FoodCard";
import SearchResultCard from "../../../components/SearchResultCard";
const SCREEN_WIDTH = Dimensions.get("window").width;
const RestaurantSearchScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1 }}>
      <TempHeader />
      <ScrollView style={{ flex: 1, marginTop: 15 }}>
        <Text style={styles.categoryTitle1}>
          Search Results for {route.params.item}{" "}
        </Text>
        <View style={styles.nearContainer}>
          {restaurantsData.map((item, index) => (
            <View key={index} style={{ paddingBottom: 20 }}>
              <SearchResultCard screenWidth={SCREEN_WIDTH * 0.95} item={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantSearchScreen;

const styles = StyleSheet.create({
  nearContainer: { width: SCREEN_WIDTH, paddingTop: 10 },
  categoryTitle1: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#000000",
    marginLeft: 5,
  },
});
