import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { ScreenWrapper } from "../components";

export default () => {
  return (
    <ScreenWrapper>
      <VStack py={12} space={8}>
        <VStack space={2}>
          <HStack space={4} alignItems="flex-end">
            <Heading size="4xl" color="primary.200">
              Hello,
            </Heading>
            <Heading size="xl" lineHeight="xl" color="primary.400">
              Guest
            </Heading>
          </HStack>

          <Box px={4} py={6} rounded="xl" bg="primary.900" shadow={2}>
            <HStack space={4} alignItems="center">
              <Icon
                as={Ionicons}
                name="ios-alert-circle"
                color="primary.200"
                size={6}
              />
              <Text flex={1} fontSize="md" color="primary.200">
                Login to your account to access your saved verses. Your data is
                completely safe and secure with us.
              </Text>
            </HStack>
          </Box>
        </VStack>

        <Box px={4} py={8} rounded="xl" bg="secondary.800" shadow={2}>
          <VStack space={6}>
            <Heading
              size="xs"
              textTransform="uppercase"
              letterSpacing="xl"
              color="secondary.600">
              Random Quote
            </Heading>
            <Text fontSize="2xl" color="secondary.200">
              “For God so loved the world, that he gave his only Son, that
              whoever believes in him should not perish but have eternal life.”
            </Text>
            <HStack space={4} alignItems="center">
              <Text fontSize="md" lineHeight="xl" color="secondary.200">
                John 3:16
              </Text>
              <Icon
                as={Ionicons}
                name="ios-heart"
                color="secondary.200"
                size={6}
              />
            </HStack>
          </VStack>
        </Box>

        <VStack mt={8} space={4}>
          <Button leftIcon={<Icon as={Ionicons} name="ios-reader" />}>
            Start Reading
          </Button>
          <Button leftIcon={<Icon as={Ionicons} name="ios-search" />}>
            Search
          </Button>
          <Button leftIcon={<Icon as={Ionicons} name="ios-bookmark" />}>
            Your Bookmarks
          </Button>
          <Button leftIcon={<Icon as={Ionicons} name="ios-musical-notes" />}>
            Gospels
          </Button>
          <Button leftIcon={<Icon as={Ionicons} name="ios-settings" />}>
            Settings
          </Button>
        </VStack>
      </VStack>
    </ScreenWrapper>
  );
};
