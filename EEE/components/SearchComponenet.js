import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
  keyboard,
} from "react-native";
import React, { useState, useRef } from "react";
import { colors, parameter } from "../global/styles";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { filterData, restaurantsData } from "../global/Data";
import filter from "lodash/filter";

const SearchComponent = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([...filterData]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocused, setTextInputFocussed] = useState(true);
  const textInput = useRef(0);
  const contains = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };
  const handelSearch = (text) => {
    const dataS = filter(filterData, (userSearch) => {
      return contains(userSearch, text);
    });
    setData([...dataS]);
  };
  return (
    <View style={{ alignItems: "center", marginTop: 10 }}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.SearchView}>
          <Icon
            name="search"
            style={styles.searchIcon}
            type="material"
            iconStyle={{ marginLeft: 5 }}
            size={32}
          />
          <Text style={{ fontSize: 15 }}>What are you looking for?</Text>
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="false" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.View1}>
            <View style={styles.TextInput}>
              <Animatable.View
                animation={textInputFocused ? "fadeInRight" : "fadeInLeft"}
                duration={400}
              >
                <Icon
                  name={textInputFocused ? "arrow-back" : "search"}
                  onPress={() => {
                    if (textInputFocused) setModalVisible(false);
                    setTextInputFocussed(true);
                  }}
                  style={styles.Icon2}
                  type="material"
                  iconStyle={{ marginLeft: 5 }}
                />
              </Animatable.View>
              <TextInput
                style={{ width: "90%", paddingLeft: 20 }}
                placeholder=""
                autoFocus={false}
                ref={textInput}
                onFocus={() => setTextInputFocussed(true)}
                onBlur={() => setTextInputFocussed(false)}
                onChangeText={handelSearch}
              />
              <Animatable.View
                animation={textInputFocused ? "fadeInLeft" : ""}
                duration={400}
              >
                <Icon
                  name={textInputFocused ? "cancel" : null}
                  onPress={() => {
                    textInput.current.clear();
                    handelSearch();
                  }}
                  style={styles.Icon2}
                  type="material"
                  iconStyle={{ marginLeft: 5 }}
                />
              </Animatable.View>
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  // keyboard.dismiss;
                  navigation.navigate("RestaurantSearchScreen", {
                    item: item.name,
                  });
                  setModalVisible(false);
                  setTextInputFocussed(false);
                }}
              >
                <View style={styles.View2}>
                  <Text style={{ color: colors.grey2, fontSize: 15 }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 10,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 10,
  },
  SearchView: {
    width: "92%",
    height: 50,
    backgroundColor: colors.grey5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey4,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },
  View1: {
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  View2: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  Icon2: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },
  modal: { flex: 1 },
});
