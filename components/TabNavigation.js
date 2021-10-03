import React from "react";
import { Image, StyleSheet } from "react-native";

import Home from "./tab-screens/Home";
import Videos from "./tab-screens/Videos";
import Challenges from "./tab-screens/Challenges";
import Momentoon from "./tab-screens/Momentoon";

import homeIcon from "../assets/pics/Parker.png";
import videoIcon from "../assets/pics/Video.png";
import challengesIcon from "../assets/pics/Challenges.png";
import momentoonIcon from "../assets/pics/MomentoonHead.png";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: "black" }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarOptions: { showIcon: true },
          tabBarIcon: () => <Image style={styles.icon} source={homeIcon} />,
        }}
      >
        {(props) => <Home {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Challenges"
        component={Challenges}
        options={{
          tabBarLabel: "Challenges",
          tabBarOptions: { showIcon: true },
          tabBarIcon: () => (
            <Image style={styles.icon} source={challengesIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={Videos}
        options={{
          tabBarLabel: "Videos",
          tabBarOptions: { showIcon: true },
          tabBarIcon: () => <Image style={styles.icon} source={videoIcon} />,
        }}
      />
      <Tab.Screen
        name="Momentoon"
        component={Momentoon}
        options={{
          tabBarLabel: "Momentoon",
          tabBarOptions: { showIcon: true },
          tabBarIcon: () => (
            <Image style={styles.icon} source={momentoonIcon} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarOptions: { showIcon: true },
          tabBarIcon: () => (
            <Image
              style={{ width: 25, height: 25, borderRadius: 25 }}
              source={profileIcon}
            />
          ),
        }}
      >
        {(props) => (
          <Profile {...props} render={render} setRender={setRender} />
        )}
      </Tab.Screen> */}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
