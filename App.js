import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { Monoton_400Regular } from "@expo-google-fonts/monoton";
import { Play_400Regular, Play_700Bold } from "@expo-google-fonts/play";
import {
  Amaranth_400Regular,
  Amaranth_400Regular_Italic,
  Amaranth_700Bold,
  Amaranth_700Bold_Italic,
} from "@expo-google-fonts/amaranth";

import StartScreen from "./components/StartScreen";
import TabNavigation from "./components/TabNavigation";

import { LogBox } from "react-native";
LogBox.ignoreAllLogs();

export default function App() {
  const [start, setStart] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  // let [fontsLoaded] = useFonts({
  //   Monoton_400Regular,
  //   Play_400Regular,
  //   Amaranth_400Regular,
  // });

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        // await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Monoton_400Regular,
          Play_400Regular,
          Amaranth_400Regular,
        });
        // await fontsLoaded;
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    // <View style={styles.container}>
    // <Text>Hello team Momenteam!</Text>
    // <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      {/* <StartScreen setStart={setStart} /> */}
      {start ? (
        <TabNavigation />
      ) : (
        <StartScreen start={start} setStart={setStart} />
      )}
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
