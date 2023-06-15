import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Icon, Button, SocialIcon } from "react-native-elements";
import { colors } from "../global/styles";

export default function FoodCard({
  item,
  onPressFoodCard,
  restaurantName,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReviews,
  businessAddress,
  farAway,
  averageReview,
  image,
  screenWidth,
}) {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image style={{ ...styles.image, width: "100%" }} source={item.image} />

        <View>
          <View>
            <Text style={styles.restaurantName}>{item.restaurantsName}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", marginBottom: 5 }}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                color={colors.grey2}
                size={18}
                iconStyle={{
                  marginTop: 5,
                  marginRight: 3,
                }}
              />
              <Text style={styles.minute}>{item.farAway}Min</Text>
            </View>
            <View style={{ flex: 9, flexDirection: "row" }}>
              <Text style={styles.address}>{item.businessAddress}</Text>
            </View>
          </View>
        </View>
        <View style={styles.review}>
          <Text style={styles.average}>{item.averageReview}</Text>
          <Text style={styles.numberReviews}>
            {item.numberOfReviews} reviews
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.cardbackground,
    borderColor: colors.grey5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 5,
    height: 150,
    resizeMode: "contain",
    overflow: "hidden",
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.grey1,
    marginTop: 5,
    marginLeft: 15,
  },
  distance: {
    // flex: 4,
    flexDirection: "row",
    borderRightColor: colors.grey4,
    paddingHorizontal: 10,
    borderRightWidth: 2,
  },
  minute: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    // paddingHorizontal: 10,
    fontWeight: "bold",
  },
  address: {
    fontSize: 12,
    paddingTop: 5,
    color: colors.grey2,
    paddingHorizontal: 10,
    fontWeight: "bold",
  },
  review: {
    position: "absolute",
    top: 0,
    right: 10,
    backgroundColor: "rgba(52,52,52,0.3)",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },
  numberReviews: {
    color: "white",
  },
});
