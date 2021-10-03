import React from "react";
import { ScrollView, ImageBackground, StyleSheet } from "react-native";
import Post from "./Post";

import background from "../../assets/pics/background.jpg";

export default function MyPost(props) {
  return (
    <ScrollView>
      <ImageBackground source={background} style={styles.background}>
        <Post
          src={props.route.params.src}
          text={props.route.params.text}
          date={props.route.params.date}
          type={props.route.params.type}
        />
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    minHeight: 500,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
});
