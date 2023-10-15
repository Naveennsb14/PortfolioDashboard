import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";

const SupportCard = () => {
  return (
    <Flex gap="6" flexDir={{
        base: "column",
        xl: "row"
    }}>
      <Stack maxW="24rem">
        <Icon as={IoMdMail} boxSize="6" color="p.purple" />
        <Text textStyle="h1" fontWeight="medium">
          Contact Us
        </Text>
        <Text fontSize="sm" color="black.60">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card p="6" borderRadius="1rem" flexGrow={1}>
        <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack flexDir={{
            base:"column",
            md: "row"
        }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name" />
          </FormControl>
          <FormControl>
            <FormLabel>SurName</FormLabel>
            <Input placeholder="Enter Your Surname" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter Your E-mail" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Input type="textarea" placeholder="Enter Your Message" />
        </FormControl>
        <Checkbox defaultChecked fontSize="xs">
          <Text fontSize="xs">
          I Agree
          <Box as="span" color="p.purple">Terms & Condition</Box>
          </Text>
        </Checkbox>
        <Stack>
            <Button fontSize="sm">Send a Mesage</Button>
            <Button colorScheme="gray" fontSize="sm">Book a Meeting</Button>
        </Stack>
        </Stack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
