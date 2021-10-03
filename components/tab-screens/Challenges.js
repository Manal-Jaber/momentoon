import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

import background from "../../assets/pics/background.jpg";

export default function Challenges() {
  return (
    <ScrollView style={{ minHeight: 500 }} nestedScrollEnabled={true}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
          <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={{ minHeight: 300 }}
          >
            <Text style={styles.text}>Coming Soon ...{"\n"}Stay Tuned</Text>
          </ScrollView>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    minHeight: 700,
  },
  text: {
    marginTop: 300,
    color: "#E5FAFF",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Play_400Regular",
  },
});
