// Expo Imports
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

// Navigation Imports
import type { RootParams } from "./@types/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens";

// NativeBase Imports
import { NativeBaseProvider } from "native-base";
import theme from "./theme";
import { loadAsync } from "expo-font";

// Stack Navigator
const Stack = createNativeStackNavigator<RootParams>();

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync();

export default () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

        <StatusBar style="light" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
