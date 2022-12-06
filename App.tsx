// Expo Imports
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

// Navigation Imports
import type { RootParams } from "./@types/navigation";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { Home } from "./screens";

// NativeBase Imports
import { NativeBaseProvider } from "native-base";
import theme from "./theme";

// Stack Navigator
const Stack = createNativeStackNavigator<RootParams>();

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync();

export default () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: theme.colors.gray[800],
    },
    headerTintColor: theme.colors.gray[300],
    headerShadowVisible: false,
    headerTitleAlign: "left",
    headerTitleStyle: {
      fontSize: theme.fontSizes.lg,
      fontWeight: "600",
    },
  };

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTitle: "Eternal Bible" }}
          />
        </Stack.Navigator>

        <StatusBar style="light" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
