import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
// import CountDown from "react-native-countdown-component";
import HomeHeader from "../../../components/HomeHeader";
import { colors, parameter } from "../../../global/styles";
import { filterData, restaurantsData } from "../../../global/Data";
const SCREEN_WIDTH = Dimensions.get("window").width;
import FoodCard from "../../../components/FoodCard";

function HomeScreen({ navigation }) {
  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState("0");
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView
        stickyHeaderHiddenOnScroll={[0]}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            // zIndex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setDelivery(true);
            }}
          >
            <View
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.buttons : colors.grey5,
              }}
            >
              <Text style={styles.deliveryText}>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDelivery(false);
              navigation.navigate("RestaurantsMapScreen");
            }}
          >
            <View
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.grey5 : colors.buttons,
              }}
            >
              <Text style={styles.deliveryText}>Pick Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Filler}>
          <View style={styles.SearchBar}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 15,
              }}
            >
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>102, Shiv-Bhumi</Text>
            </View>
            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>Now</Text>
            </View>
          </View>
          <Icon
            type="material-community"
            name="tune"
            color={colors.grey1}
            size={26}
          />
        </View>

        <View style={styles.categoryView}>
          <View style={{ width: "50%" }}>
            <Text style={styles.categoryTitle1}>Categories</Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("More")}
              style={styles.buttonMore}
            >
              <Text style={styles.buttonMoreTitle}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginRight: 10, height: 130 }}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}
              >
                <View
                  style={
                    indexCheck === item.id
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }
                >
                  <Image
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                    source={item.image}
                  />
                  <View style={{ marginTop: 3 }}>
                    <Text
                      style={
                        indexCheck === item.id
                          ? { ...styles.smallCardTextSelected }
                          : { ...styles.smallCardText }
                      }
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.categoryView}>
          <View style={{ width: "50%" }}>
            <Text style={styles.categoryTitle1}>Free Delivery Now</Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("More")}
              style={styles.buttonMore}
            >
              <Text style={styles.buttonMoreTitle}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.textOptions}>Options changing in</Text>
            {/* <CountDown
              until={3600}
              size={13}
              digitStyle={{ backgroundColor: colors.lightgreen }}
              digitTxtStyle={{ color: colors.cardbackground }}
              timeToShow={["M", "S"]}
              timeLabels={{ m: "min", s: "sec" }}
            /> */}
          </View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <FoodCard screenWidth={SCREEN_WIDTH * 0.8} item={item} />
            )}
          />
        </View>
        <View style={styles.categoryView}>
          <View style={{ width: "50%" }}>
            <Text style={styles.categoryTitle1}>Promotions Available</Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("More")}
              style={styles.buttonMore}
            >
              <Text style={styles.buttonMoreTitle}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            data={restaurantsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <FoodCard screenWidth={SCREEN_WIDTH * 0.8} item={item} />
              </View>
            )}
          />
        </View>
        <View style={styles.categoryView}>
          <View style={{ width: "50%" }}>
            <Text style={styles.categoryTitle1}>Restaurant In Your Area</Text>
          </View>
          <View
            style={{
              width: "50%",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("More")}
              style={styles.buttonMore}
            >
              <Text style={styles.buttonMoreTitle}>More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.nearContainer}>
          {restaurantsData.map((item, index) => (
            <View key={index} style={{ paddingBottom: 20 }}>
              <FoodCard screenWidth={SCREEN_WIDTH * 0.95} item={item} />
            </View>
          ))}
        </View>
        <View style={{ height: 50 }}></View>
      </ScrollView>
      {delivery && (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("RestaurantsMapScreen")}
          >
            <Icon
              name="place"
              type="material"
              size={32}
              color={colors.buttons}
            />
            <Text style={{ color: colors.grey2 }}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 17,
    paddingVertical: 7,
  },
  deliveryText: {
    marginLeft: 5,
    fontsize: 16,
  },
  Filler: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 5,
    marginVertical: 15,
    marginTop: 25,
  },
  SearchBar: {
    flexDirection: "row",
    backgroundColor: colors.grey5,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  clockView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 20,
    paddingHorizontal: 13,
  },
  categoryView: {
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  categoryTitle1: { fontWeight: "400", fontSize: 15, color: "#000000" },
  buttonMore: {
    backgroundColor: colors.statusbar,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 15,
  },
  buttonMoreTitle: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#fff",
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    elevation: 13,
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardTextSelected: {
    fontWeight: "600",
    color: colors.cardbackground,
  },
  smallCardText: {
    fontWeight: "600",
    color: colors.grey2,
  },
  nearContainer: { width: SCREEN_WIDTH, paddingTop: 10 },
  textOptions: {
    marginLeft: 20,
    fontSize: 13,
    marginTop: -10,
    marginRight: 15,
    color: "gray",
  },
  floatButton: {
    position: "absolute",
    bottom: 60,
    right: 15,
    backgroundColor: "white",
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
  },
});
