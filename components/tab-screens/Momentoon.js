import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";

import background from "../../assets/pics/background.jpg";
import momentoon from "../../assets/pics/Momentoon.png";

import { about } from "../AboutMomentoon/about";

export default function Momentoon() {
  return (
    <ScrollView style={{ minHeight: 500 }} nestedScrollEnabled={true}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
          <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={{ minHeight: 300 }}
          >
            <View style={styles.wrap}>
              <Image source={momentoon} style={styles.image} />
              <View>
                <FlatList
                  // numColumns={2}
                  data={about}
                  // keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }, index) => (
                    <View style={styles.about}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.content}>{item.content}</Text>
                    </View>
                  )}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
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
    marginTop: 50,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    minHeight: 700,
  },
  wrap: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 100,
  },
  about: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
    paddingRight: 10,
    maxWidth: 200,
  },
  title: {
    color: "#E5FAFF",
    fontSize: 28,
    fontFamily: "Amaranth_400Regular",
  },
  content: {
    color: "#E5FAFF",
    fontSize: 14,
    fontFamily: "Play_400Regular",
  },
});
