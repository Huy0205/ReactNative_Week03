import { StyleSheet, View, Text, Pressable } from "react-native";

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.view2}>
        <Text style={styles.textView2}>
          GROW<br></br>YOUR BUSINESS
        </Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.textView3}>We will help you to grow your business using online server</Text>
      </View>
      <View style={styles.view4}>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Login</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #87CEFA 0%, #1E90FF 100%)',
  },
  view1: {
    flex: 3,
    alignItems: "center",
    paddingTop: "150px",
  },
  circle: {
    width: "140px",
    height: "140px",
    border: "15px solid black",
    borderRadius: "100%",
  },
  view2: {
    flex: 1,
    
  },
  textView2:{
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "25px",
    fontWeight: "700",
  },

  view3: {
    flex: 1,
  },

  textView3:{
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "15px",
    fontWeight: "700",
    paddingStart: "40px",
    paddingEnd: "40px",
    paddingTop: "30px",
  },

  view4: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: "50px",
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 7,
    backgroundColor: '#E3C000',
  },

  textButton:{
    color: "black",
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "700",
  }
});
