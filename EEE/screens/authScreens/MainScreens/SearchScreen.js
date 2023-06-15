import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import SearchComponent from "../../../components/SearchComponenet";
import TempHeader from "../../../components/TempHeader";
import { colors, parameter } from "../../../global/styles";
import { searchData } from "../../../global/Data";
import { useNavigation } from "@react-navigation/native";
const SCREEN_WIDTH = Dimensions.get("window").width;
const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 20, marginBottom: 30 }}>
      <View style={{}}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 20, marginBottom: 30 }}
          data={searchData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                // keyboard.dismiss;
                navigation.navigate("RestaurantSearchScreen", {
                  item: item.name,
                });
              }}
            >
              <View style={styles.imageView}>
                <ImageBackground style={styles.image} source={item.image}>
                  <View style={styles.textView}>
                    <Text style={{ color: colors.cardbackground }}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={styles.listHeader}>More Categories</Text>
          }
        />
      </View>
    </View>
  );
};
const SearchScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <TempHeader />
      <View style={{ marginHorizontal: 10 }}>
        <SearchComponent />
        <View style={{ marginTop: 10, marginBottom: 60 }}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 190, marginBottom: 30 }}
            data={searchData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  // keyboard.dismiss;
                  navigation.navigate("RestaurantSearchScreen", {
                    item: item.name,
                  });
                }}
              >
                <View style={styles.imageView}>
                  <ImageBackground style={styles.image} source={item.image}>
                    <View style={styles.textView}>
                      <Text style={{ color: colors.cardbackground }}>
                        {item.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={
              <Text style={styles.listHeader}>Top Categories</Text>
            }
            ListFooterComponent={<Footer />}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },
  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
  },
  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },
  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52,52,52,0.3",
  },
  categoryTitle1: { fontWeight: "400", fontSize: 15, color: "#000000" },
});
