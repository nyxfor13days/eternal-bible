import AsyncStorage from "@react-native-async-storage/async-storage";
import { ColorMode, StorageManager } from "native-base";

export default {
  get: async () => {
    try {
      let value = await AsyncStorage.getItem("@colorMode");
      return value === "light" ? "light" : "dark";
    } catch (e) {
      return "dark";
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem("@colorMode", JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  },
} satisfies StorageManager;
