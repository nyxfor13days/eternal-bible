import type { IScreenWrapperProps } from "../@types/components";
import { ScrollView } from "native-base";
import loadFonts from "../utils/loadFonts";

export default (props: IScreenWrapperProps) => {
  const { children } = props;
  const { onLayoutRootView } = loadFonts();

  return (
    <ScrollView
      px={4}
      _light={{ bg: "gray.900" }}
      _dark={{ bg: "gray.900" }}
      onLayout={onLayoutRootView}>
      {children}
    </ScrollView>
  );
};
