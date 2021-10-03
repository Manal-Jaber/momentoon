import React, { useEffect } from "react";

import ViewVideos from "../stackScreen/ViewVideos";
import MyPost from "../posts/MyPost";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Profile({ render, setRender }) {
  return (
    <Stack.Navigator initialRouteName="ViewVideos">
      <Stack.Screen name="ViewVideos" options={{ headerShown: false }}>
        {(props) => <ViewVideos {...props} />}
      </Stack.Screen>
      <Stack.Screen name="MyPost">
        {(props) => <MyPost {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
