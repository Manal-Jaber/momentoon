import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";

import background from "../../assets/pics/background.jpg";
import Head from "../head/Head";
import { posts } from "../posts/posts";

export default function ViewVideos() {
  const navigation = useNavigation();
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <ScrollView>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.container}>
          <Head />
          <View style={styles.imageContainer}>
            <FlatList
              numColumns={2}
              data={posts}
              // keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    navigation.navigate("MyPost", {
                      type: item.type,
                      src: item.src,
                      text: item.text,
                      date: item.date,
                    })
                  }
                >
                  <View style={styles.onePost}>
                    {item.type === "image" ? (
                      <Image source={item.src} style={styles.image} />
                    ) : (
                      <Video
                        ref={video}
                        style={styles.image}
                        source={item.src}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={(status) =>
                          setStatus(() => status)
                        }
                      />
                    )}
                    <Text style={styles.caption}>{item.caption}</Text>
                  </View>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
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
    justifyContent: "flex-start",
    marginTop: 10,
  },
  bigProfile: {
    height: 70,
    width: 70,
    borderRadius: 70,
  },
  ProfileText: {
    fontSize: 15,
    paddingVertical: 6,
    fontFamily: "Salsa_400Regular",
  },
  Text: {
    width: 50,
    margin: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  image: {
    width: 165,
    height: 165,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    minHeight: 700,
  },
  onePost: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 5,
  },
  caption: {
    color: "#E5FAFF",
    fontSize: 10,
    fontFamily: "Play_400Regular",
  },
});
