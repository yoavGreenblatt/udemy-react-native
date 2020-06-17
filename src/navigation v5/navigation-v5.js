import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 
const Stack = createStackNavigator();
 
const Tab = createBottomTabNavigator();
 
const MainFlow = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackListScreen" component={TrackListScreen} />
      <Tab.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
};
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="MainFlow" component={MainFlow} />
        <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
 
 
// SignUpScreen:
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import SignInScreen from "./SignInScreen";
 
const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>go to sign in</Text>
      <Button
        onPress={() => navigation.navigate("SignIn")}
        title="go to sign in"
      />
      <Button
        title="go to main flow"
        onPress={() => navigation.navigate("MainFlow")}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({});
export default SignUpScreen;
 
 
// TrackListScreen:
 
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TrackDetailScreen from "./TrackDetailScreen";
 
const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("TrackDetailScreen")}
        title="go to track detail"
      />
    </View>
  );
};
 
const styles = StyleSheet.create({});
export default TrackListScreen;
 
 
 
// For Other Screens just give Appropriate names and exp