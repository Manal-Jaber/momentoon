import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

export default function Head({ render, setRender }) {
  return (
    <View style={styles.head}>
      <Text style={styles.headLogoText}>Sundepia</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  headLogoText: {
    fontSize: 36,
    paddingVertical: 6,
    fontFamily: "Monoton_400Regular",
    height: 60,
    color: "#E5FAFF",
  },
});
