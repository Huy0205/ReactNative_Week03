import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { TextInput } from "react-native-web";

export default function Bai1b() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          source={require("./assets/lock.png")}
          style={{ width: 120, height: 130 }}
        />
      </View>
      <View style={styles.view2}>
        <Text style={styles.textView2}>FORGET PASSWORD</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.textView3}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View style={styles.view4}>
        <View style={styles.inputView4}>
          <Image
            source={require("./assets/mail.png")}
            style={{ width: 50, height: 50 }}
          />
          <TextInput placeholder="Email" style={styles.input} />
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
    paddingHorizontal: 60,
  },

  view1: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  view2: {
    flex: 1,
  },

  textView2: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: 700,
    paddingHorizontal: 60,
  },

  view3: {
    flex: 1,
  },

  textView3: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 18,
    letterSpacing: "0em",
  },

  view4: {
    flex: 3,
    justifyContent: "space-around",
  },

  inputView4: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C4C4C4",
    height: 50,
    marginBottom: 45,
  },

  input: {
    flex: 1,
    lineHeight: 40,
    height: "100%",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: 400,
    letterSpacing: "0em",
    padding: 8,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 3,
    backgroundColor: "#E3C000",
    marginBottom: 130,
  },

  textButton: {
    color: "black",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
  },
});
