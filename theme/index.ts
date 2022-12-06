import { extendTheme } from "native-base";
import components from "./components";
import fontConfig from "./fontConfig";
import fonts from "./fonts";

export default extendTheme({
  fontConfig: fontConfig,
  fonts: fonts,
  components: components,
});
