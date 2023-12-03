import { Text, View } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import Homescreen from "./Screens/HomeScreen";
import DetailScreen from "./Screens/DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import SearchScreen from "./Screens/SearchScreen";
import CartScreen from "./Screens/CartScreen";
import UserProfile from "./Screens/UserProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// export const StackNavi = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="GG" component={BottomTabNavi} />
//       <Stack.Screen name="Saerch" component={SearchScreen} />
//     </Stack.Navigator>
//   );
// };

export const BottomTabNavi = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60 },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home" size={28} color="#67c4a7" />
            ) : (
              <Ionicons name="home-outline" size={28} color="#939393" />
            ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search" size={29} color="#67c4a7" />
            ) : (
              <Ionicons name="search" size={29} color="#939393" />
            ),
        }}
      />
      <Tab.Screen
        name="Cartscreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="shopping-cart" size={28} color="#67c4a7" />
            ) : (
              <Feather name="shopping-cart" size={28} color="#939393" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="user" size={28} color="#67c4a7" />
            ) : (
              <AntDesign name="user" size={28} color="#939393" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          }),
        }}
      >
        <Stack.Screen
          name="GG"
          component={BottomTabNavi}
          options={{
            transitionSpec: {
              open: { animation: "timing", config: { duration: 1 } },
              close: { animation: "timing", config: { duration: 1 } },
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            transitionSpec: {
              open: { animation: "timing", config: { duration: 1 } },
              close: { animation: "timing", config: { duration: 1 } },
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
