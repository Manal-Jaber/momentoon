import React, { useState, useRef } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import profile from "../../assets/pics/MomentoonHead.png";
import { Video } from "expo-av";

export default function Post({ type, src, text, date }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.postContainer}>
      <Text style={styles.postDate}>{date}</Text>
      <View style={styles.profileHead}>
        <Image source={profile} style={styles.profile} />
        <Text style={styles.postText}>{text}</Text>
      </View>
      {type === "image" ? (
        <Image source={src} style={styles.postImage} />
      ) : (
        <Video
          ref={video}
          style={styles.video}
          source={src}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  postContainer: {
    paddingTop: 10,
    borderStyle: "solid",
    borderTopColor: "rgba(256,256,256,0.4)",
    borderTopWidth: 1,
    marginTop: 10,
  },
  profileHead: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    paddingLeft: 5,
    paddingRight: 5,
  },
  profile: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  postImage: {
    width: 365,
    height: 400,
  },
  postText: {
    color: "#E5FAFF",
    fontSize: 14,
    fontFamily: "Play_400Regular",
    marginBottom: 10,
    marginLeft: 10,
    maxWidth: 300,
  },
  postDate: {
    color: "#E5FAFF",
    fontSize: 10,
    fontFamily: "Amaranth_400Regular",
    marginBottom: 5,
    marginRight: 5,
    alignSelf: "flex-end",
  },
  video: {
    alignSelf: "center",
    width: 365,
    height: 250,
  },
});
