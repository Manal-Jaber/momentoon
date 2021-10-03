import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import momentoon from "../assets/pics/Momentoon.png";
import background from "../assets/pics/background.jpg";

export default function StartScreen({ start, setStart }) {
  return (
    <ScrollView style={styles.mainContainer} nestedScrollEnabled={true}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
          <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={{ minHeight: 300 }}
          >
            <Text style={styles.logo}>Sunpedia</Text>
            <Image style={styles.image} source={momentoon} />
            <Text style={styles.text}>
              Hello Everybody!!{"\n"}It's Momentoon here!!{"\n"}The Journey will
              begin in{"\n"}3 2 1 ...
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setStart(!start)}
            >
              <Text style={styles.text}>Let's Go</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    minHeight: 500,
    // backgroundImage: background,
    // backgroundColor: "#00001E",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    minHeight: 700,
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  logo: {
    color: "#E5FAFF",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Monoton_400Regular",
  },
  image: {
    width: 150,
    height: 250,
    margin: 30,
    alignSelf: "center",
  },
  text: {
    color: "#E5FAFF",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Play_400Regular",
  },
  button: {
    margin: 30,
    width: 100,
    height: 100,
    backgroundColor: "#A91A1F",
    borderStyle: "solid",
    borderColor: "#FBB041",
    borderWidth: 5,
    borderRadius: 50,
    alignSelf: "center",
    padding: 20,
  },
});
