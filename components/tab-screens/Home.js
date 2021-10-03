import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";

import background from "../../assets/pics/background.jpg";
import Head from "../head/Head";
import Post from "../posts/Post";
import { posts } from "../posts/posts";

export default function Home() {
  return (
    <ScrollView style={{ minHeight: 500 }} nestedScrollEnabled={true}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
          <Head />
          {/* <Svg height="10" width="500" style={{ alignSelf: "flex-start" }}>
            <Line
              x1="0"
              y1="0"
              x2="500"
              y2="0"
              stroke="black"
              strokeWidth="2"
            />
          </Svg> */}
          <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={{ minHeight: 300 }}
            style={styles.flat}
          >
            <FlatList
              data={posts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }, index) => (
                <Post
                  type={item.type}
                  src={item.src}
                  text={item.text}
                  date={item.date}
                />
              )}
              showsHorizontalScrollIndicator={false}
            />
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              There are no more posts to show
            </Text>
          </ScrollView>
          {/* <StatusBar style="auto" /> */}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    minHeight: 700,
  },
  flat: {
    flex: 1,
    display: "flex",
    flexDirection: "column-reverse",
  },
  post: {
    borderStyle: "solid",
    borderWidth: 1,
    borderEndColor: "#E5FAFF",
    marginBottom: 10,
  },
  postImage: {
    width: 500,
    height: 300,
  },
  postText: {
    color: "#E5FAFF",
    fontSize: 14,
    fontFamily: "Play_400Regular",
    marginBottom: 10,
  },
});
