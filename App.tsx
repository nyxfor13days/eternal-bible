// Expo Imports
import { StatusBar } from "expo-status-bar";

// Navigation Imports
import type { RootParams } from "./@types/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens";

// NativeBase Imports
import { NativeBaseProvider, View } from "native-base";
import theme from "./theme";
import loadFonts from "./utils/loadFonts";

// Stack Navigator
const Stack = createNativeStackNavigator<RootParams>();

export default () => {
  const { onLayoutRootView } = loadFonts();

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <View onLayout={onLayoutRootView}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>

          <StatusBar style="light" />
        </View>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
