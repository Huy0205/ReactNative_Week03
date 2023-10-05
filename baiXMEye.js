import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  Text,
} from "react-native";

export default function BaiXMEye() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          source={require("./assets/eyeball.svg")}
          style={styles.imageView1}
        />
      </View>
      <View style={styles.view2}>
        <View style={styles.txtView}>
          <Image
            source={require("./assets/user2.svg")}
            style={styles.iconTxt}
          ></Image>
          <TextInput
            style={styles.txt}
            placeholder="please input user name"
          ></TextInput>
        </View>
        <View style={styles.txtView}>
          <Image
            source={require("./assets/lock2.png")}
            style={styles.iconTxt}
          ></Image>
          <TextInput
            style={styles.txt}
            placeholder="please input password"
          ></TextInput>
        </View>
      </View>
      <View style={styles.view3}>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>LOGIN</Text>
        </Pressable>
      </View>
      <View style={styles.view4}>
        <Pressable>
          <Text style={styles.textView4_5}>Register</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.textView4_5}>Forgot Password</Text>
        </Pressable>
      </View>
      <View style={styles.view5}>
        <Text style={styles.textView4_5}>Other Login Methods</Text>
      </View>
      <View style={styles.view7}>
        <Pressable>
          <Image
            source={require("./assets/add.svg")}
            style={styles.ImageView7}
          ></Image>
        </Pressable>
        <Pressable>
          <Image
            source={require("./assets/wifi.svg")}
            style={styles.ImageView7}
          ></Image>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#3A579C",
            width: 74,
            height: 74,
            borderRadius: 10,
            paddingTop: 3,
          }}
        >
          <Image source={require("./assets/icofacebook.png")} style={{width:60, height:60}}></Image>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
  },

  view1: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  imageView1: {
    width: 150,
    height: 150,
  },

  view2: {
    flex: 3,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  txtView: {
    flexDirection: "row",
    width: 300,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
  },

  txt: {
    flex: 1,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: 0,
    height: "100%",
    paddingHorizontal: 10,
  },

  iconTxt: {
    width: 35,
    height: 35,
    marginRight: 10,
  },

  view3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    width: 300,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#386FFC",
    justifyContent: "center",
    alignItems: "center",
  },

  textBtn: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: 0,
    color: "#FFFFFF",
  },

  view4: {
    flex: 1,
    flexDirection: "row",
    width: 300,
    justifyContent: "space-between",
    alignItems: "center",
  },

  textView4_5: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: 0,
  },

  view5: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  view7: {
    flex: 2,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ImageView7: {
    width: 74,
    height: 74,
  },
});