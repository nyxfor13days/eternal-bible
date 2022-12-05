import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen Imports
import Home from "./screens/Home";

// Stack Navigator
const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>

      <StatusBar style="light" />
    </NavigationContainer>
  );
};
