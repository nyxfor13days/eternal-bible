import { Button, Heading, Icon, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { ScreenWrapper } from "../components";

export default () => {
  return (
    <ScreenWrapper>
      <VStack mt={10} space={6}>
        <Heading
          size="4xl"
          fontWeight="900"
          textTransform="uppercase"
          color="primary.800"
          _dark={{ color: "primary.400" }}>
          Login to your Eternal Bible
        </Heading>

        <VStack space={1}>
          <Text fontSize="xl">
            Eternal Bible Project aims to provide ad-free, offline and authentic
            bible reading. We are currently in beta and are working on adding
            more feature.
          </Text>
          <Text fontSize="xl">
            Please login to your account to access your saved notes and to sync
            your progress across devices.
          </Text>
        </VStack>

        <Button leftIcon={<Icon as={AntDesign} name="google" />}>
          Login with Google
        </Button>
      </VStack>
    </ScreenWrapper>
  );
};
