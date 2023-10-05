import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";

export default function Bai1d() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.textView1}>LOGIN</Text>
      </View>

      <View style={styles.view2_3}>
        <TextInput
          placeholder="Email"
          style={styles.textInputView2}
        ></TextInput>
      </View>

      <View style={styles.view2_3}>
        <View style={styles.view3_wthin}>
          <TextInput
            placeholder="Password"
            style={styles.textInputView3}
          ></TextInput>
          <Image
            source={require("./assets/eye.png")}
            style={styles.eye}
          ></Image>
        </View>
      </View>

      <View style={styles.view4}>
        <Pressable style={styles.buttonView4}>
          <Text style={styles.textButtonView4}>LOGIN</Text>
        </Pressable>
      </View>

      <View style={styles.view5}>
        <Text style={styles.textView5}>
          When you agree to terms and conditions
        </Text>
        <Pressable style={styles.textView5}>
          <Text style={{ color: "#5D25FA" }}>For got your password?</Text>
        </Pressable>
        <Text style={styles.textView5}>Or login with</Text>
      </View>

      <View style={styles.view6}>
        <Pressable
          style={{
            width: 110,
            height: 45,
            borderRadius: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#25479B",
          }}
        >
          <Image
            source={require("./assets/icofacebook.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        </Pressable>
        <Pressable
          style={{
            width: 110,
            height: 45,
            borderRadius: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0F8EE0",
          }}
        >
          <Image
            source={require("./assets/icozalo.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        </Pressable>
        <Pressable
          style={{
            width: 110,
            height: 45,
            borderRadius: 2,
            border: 1,
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #0680F1",
          }}
        >
          <Image
            source={require("./assets/icogoogle.png")}
            style={{ width: 30, height: 30 }}
          ></Image>
        </Pressable>
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
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  textView1: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 29,
    letterSpacing: "0em",
    textAlign: "center",
  },

  view2_3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  view3_wthin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(0deg, rgba(196, 196, 196, 0.3), rgba(196, 196, 196, 0.3))",
    width: 330,
    height: 54,
  },

  textInputView2: {
    width: 330,
    height: 54,
    backgroundImage:
      "linear-gradient(0deg, rgba(196, 196, 196, 0.3), rgba(196, 196, 196, 0.3))",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: "0em",
    paddingHorizontal: 15,
  },

  textInputView3: {
    height: "100%",
    width: 270,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: "0em",
    paddingHorizontal: 5,
  },

  eye: {
    width: 38,
    height: 36,
  },

  view4: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonView4: {
    width: 330,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    backgroundColor: "#E53935",
  },

  textButtonView4: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23,
    letterSpacing: "0em",
    textAlign: "center",
    color: "white",
  },

  view5: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  textView5: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: "0em",
    textAlign: "center",
  },

  view6: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
});
