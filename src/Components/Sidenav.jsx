import { Box, HStack, Heading, Icon, Stack } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Sidenav = () => {
  const navLinks = [
    {
      icons: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icons: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
    bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg"
      }}
      w={{
        base:"full",
        lg:"16rem"
      }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h3" pt="3.5rem">
          Options
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              borderRadius="10px"
              px="4"
              key={nav.text}
              py="3"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
            >
              <Icon as={nav.icons} />
              <text fontSize="14px" fontWeight="medium">
                {nav.text}
              </text>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <HStack
          borderRadius="10px"
          px="4"
          py="3"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <text fontSize="14px" fontWeight="medium">
            Support
          </text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
