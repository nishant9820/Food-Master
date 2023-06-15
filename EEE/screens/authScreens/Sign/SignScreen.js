import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { colors, parameter, titleText } from "../../../global/styles";
import Header from "../../../components/Header";

export default function SignScreen({ navigation }) {
  const [TextInput2Focussed, setTextInput2Focussed] = useState(false);
  const TextInput1 = useRef(1);
  const TextInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header
        title={"My Account"}
        type={"arrow-left"}
        navigation={navigation}
      />
      <View style={{ marginTop: 20, marginLeft: 10 }}>
        <Text style={titleText}>Sign-In</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Text style={styles.text1}>Please Enter the email and password</Text>
        <Text style={styles.text1}>register with your account </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={TextInput1}
          />
        </View>
        <View style={styles.TextInput2}>
          <Animatable.View
            animation={TextInput2Focussed ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
            />
          </Animatable.View>
          <TextInput
            style={{ width: "75%" }}
            placeholder="Password"
            secureTextEntry
            ref={TextInput2}
            onFocus={() => {
              setTextInput2Focussed(false);
            }}
            onBlur={() => {
              setTextInput2Focussed(true);
            }}
          />
          <Animatable.View
            animation={TextInput2Focussed ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
        <Button
          title="SIGN IN"
          buttonStyle={parameter.styleButton}
          titleStyle={parameter.buttonTitle}
          onPress={() => navigation.navigate("Loader")}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>
          Forgot Password ?
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 25, marginBottom: 25 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>OR</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <SocialIcon
          type="facebook"
          title="Sing in with Facebook"
          button
          style={styles.socialIcon}
          onPress={() => {}}
        />
        <SocialIcon
          type="google"
          button
          title="Sing in with Goggle"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View style={{ marginTop: 15, marginLeft: 20 }}>
        <Text style={{ ...styles.text1 }}>New on Eat Eat Eat ?</Text>
      </View>
      <View
        style={{ alignItems: "flex-end", marginTop: 20, marginHorizontal: 20 }}
      >
        <Button
          title="Create an Account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    height: 42,
    borderWidth: 1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 20,
  },
  TextInput2: {
    height: 42,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  socialIcon: {
    borderRadius: 12,
    height: 50,
  },
  createButton: {
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ff8c52",
    paddingHorizontal: 20,
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
