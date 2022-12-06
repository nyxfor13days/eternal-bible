import { extendTheme } from "native-base";
import colors from "./colors";
import components from "./components";
import config from "./config";
import fontConfig from "./fontConfig";
import fonts from "./fonts";

export default extendTheme({
  colors: colors,
  fontConfig: fontConfig,
  fonts: fonts,
  components: components,
  config: config,
});
