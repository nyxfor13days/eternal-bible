// Expo Imports
import { StatusBar } from "expo-status-bar";

// Navigation Imports
import type { RootParams } from "./@types/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens";
import { NativeBaseProvider } from "native-base";

// NativeBase Imports
import theme from "./theme";

// Stack Navigator
const Stack = createNativeStackNavigator<RootParams>();

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
