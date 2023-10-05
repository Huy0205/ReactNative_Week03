import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

export default function Bai1e() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.textView1}>REGISTER</Text>
      </View>
      <View style={styles.wrapper}>
        <TextInput style={styles.textInput} placeholder="Name"></TextInput>
        <TextInput style={styles.textInput} placeholder="Phone"></TextInput>
        <TextInput style={styles.textInput} placeholder="Email"></TextInput>
        <View style={styles.viewPassword}>
          <TextInput
            placeholder="Password"
            style={styles.txtPasword}
          ></TextInput>
          <Image
            source={require("./assets/eye.png")}
            style={{ width: 40, height: 40 }}
          ></Image>
        </View>
        <TextInput style={styles.textInput} placeholder="Birthday"></TextInput>
        <View style={styles.radioButtonView}>
          <RadioButtonGroup containerStyle={styles.radioButton}>
            <RadioButtonItem value="male" label="Male" />
            <RadioButtonItem value="female" label="Female" />
          </RadioButtonGroup>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>REGISTER</Text>
        </Pressable>
        <Text style={styles.text}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31AA5230",
  },

  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textView1: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 29,
    letterSpacing: 0,
  },

  wrapper: {
    flex: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  textInput: {
    width: 330,
    height: 54,
    border: "1px solid #F2F2F2",
    paddingHorizontal: 10,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: 0,
    backgroundImage: "linear-gradient(0deg, #F2F2F2, #F2F2F2)",
  },

  viewPassword: {
    flexDirection: "row",
    backgroundImage: "linear-gradient(0deg, #F2F2F2, #F2F2F2)",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  txtPasword: {
    width: 280,
    height: 54,
    border: "1px solid #F2F2F2",
    paddingHorizontal: 10,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: 0,
  },

  button: {
    width: 330,
    height: 45,
    borderRadius: 2,
    backgroundColor: "#E53935",
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23,
    letterSpacing: 0,
    color: "#FFFFFF",
  },

  text: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "center",
    height: 40,
  },

  radioButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  radioButtonView:{
    width: 330,
  }
});
