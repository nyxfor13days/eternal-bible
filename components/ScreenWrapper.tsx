// Hooks
import { useCallback, useEffect, useState } from "react";

import type { IScreenWrapperProps } from "../@types/components";
import { View } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import { loadAsync } from "expo-font";

export default (props: IScreenWrapperProps) => {
  const { children } = props;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await loadAsync({
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
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View
      flex={1}
      px={4}
      bg="gray.300"
      _dark={{ bg: "gray.900" }}
      onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};
