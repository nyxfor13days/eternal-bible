// Expo Imports
import { StatusBar } from "expo-status-bar";

// Navigation Imports
import type { RootParams } from "./@types/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens";

// Stack Navigator
const Stack = createNativeStackNavigator<RootParams>();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>

      <StatusBar style="light" />
    </NavigationContainer>
  );
};
