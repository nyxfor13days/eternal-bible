import { Heading, Text, VStack } from "native-base";
import { ScreenWrapper } from "../components";

export default () => {
  return (
    <ScreenWrapper>
      <VStack flex={1}>
        <Heading>Login to your Eternal Bible</Heading>
      </VStack>
    </ScreenWrapper>
  );
};
