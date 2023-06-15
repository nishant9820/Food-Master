import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

export default Onboardingitem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <View>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Text style={styles.discription}>{item.description}</Text>
      </View>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -250,
    marginTop: 60,
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
    color: "#064F60",
    textAlign: "center",
  },

  discription: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 54,
  },
});
