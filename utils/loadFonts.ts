import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

export default () => {
  const [fontsLoaded] = useFonts({
    "Lato-Black": require("../assets/fonts/Lato-Black.ttf"),
    "Lato-BlackItalic": require("../assets/fonts/Lato-BlackItalic.ttf"),
    "Lato-Bold": require("../assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("../assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Italic": require("../assets/fonts/Lato-Italic.ttf"),
    "Lato-Light": require("../assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("../assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
    "Lato-Thin": require("../assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("../assets/fonts/Lato-ThinItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    fontsLoaded && (await SplashScreen.hideAsync());
  }, [fontsLoaded]);

  !fontsLoaded && SplashScreen.preventAutoHideAsync();

  return { fontsLoaded, onLayoutRootView };
};
