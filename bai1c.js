import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";

export default function Bai1c() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.textView1}>CODE</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.textView2}>VERIFICATION</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.textView3}>Enter ontime password sent on ++849092605798</Text>
      </View>
      <View style={styles.view4}>
        <TextInput style={styles.textInputView4}></TextInput>
        <TextInput style={styles.textInputView4}></TextInput>
        <TextInput style={styles.textInputView4}></TextInput>
        <TextInput style={styles.textInputView4}></TextInput>
        <TextInput style={styles.textInputView4}></TextInput>
        <TextInput style={styles.textInputView4}></TextInput>
      </View>
      <View style={styles.view5}>
        <Pressable style={styles.buttonView5}>
          <Text style={styles.textButtonView5}>VERIFY CODE</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',

  },

  view1: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  textView1: {
    fontFamily: "Roboto",
    fontSize: 60,
    fontWeight: 700,
    lineHeight: 70,
    letterSpacing: "0em",
  },

  view2: {
    flex: 1,
    alignItems: "center",
  },

  textView2: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 23,
    letterSpacing: "0em",
  },

  view3:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,

  },

  textView3:{
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 18,
    letterSpacing: "0em",
    textAlign: "center",
  },

  view4:{
    flex: 2,
    flexDirection: "row",
    justifyContent:'center',
    alignItems: "center",
  },

  textInputView4:{
    border: "1px solid black",
    width: 50,
    height: 50,
  },

  view5:{
    flex: 3,
    alignItems: "center",
  },

  buttonView5:{
    backgroundColor: '#E3C000',
    width: 339,
    height: 50,
    justifyContent: "center",
  },

  textButtonView5:{
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 21,
    letterSpacing: "0em",
    textAlign: "center",
  }
});
