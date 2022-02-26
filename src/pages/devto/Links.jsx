import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Links = ({ name, Icon }) => {
  return (
    <>
      <Flex
        cursor={"pointer"}
        _hover={{ bg: "#f5d1fc", borderRadius: "8px" }}
        mb="10px"
        p="8px 16px"
        gap={"10px"}
        align={"center"}
      >
        <Box h={"24px"} w={"24px"}>
          {Icon}
        </Box>
        <Text>{name}</Text>
      </Flex>
    </>
  );
};

export default Links;
