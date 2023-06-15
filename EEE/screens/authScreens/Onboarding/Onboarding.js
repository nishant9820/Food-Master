import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Icon, Button, SocialIcon } from "react-native-elements";
import { colors, parameter, titleText } from "../../../global/styles";
import React, { useRef, useState } from "react";
import Onboardingitem from "../../../components/Onboardingitem.js";
import Paginator from "../../../components/Paginator.js";
import slides from "../../../global/slides.js";
import { useNavigation } from "@react-navigation/native";

export default Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const navigation = useNavigation();
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <Onboardingitem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>

      <View style={{ justifyContent: "space-evenly" }}>
        <Button
          title="SIGN IN"
          buttonStyle={{
            ...parameter.styleButton,
            paddingHorizontal: 80,
            marginBottom: 20,
          }}
          titleStyle={parameter.buttonTitle}
        />
      </View>
      <View style={{ justifyContent: "space-evenly" }}>
        <TouchableOpacity
          title="Create an Account"
          style={styles.createButton}
          onPress={() => navigation.navigate("SignScreen")}
        >
          <Text style={styles.createButtonTitle}>Create an Account</Text>
        </TouchableOpacity>
      </View>
      <Paginator data={slides} scrollX={scrollX} style={{ marginTop: 10 }} />
      <View style={{}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  createButton: {
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#ff8c52",
    paddingHorizontal: 80,
    height: 40,
  },
  createButtonTitle: {
    color: "#ff8c52",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
