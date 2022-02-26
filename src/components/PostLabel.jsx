import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const PostLabel = ({ text }) => {
  return (
    <>
      <Box
        cursor={"pointer"}
        p="20px"
        _hover={{ color: "#3B4ADF", bg: "#fff" }}
      >
        <Text fontSize={"16px"}>{text}</Text>
        <Flex
          h="3rem"
          w="5rem"
          align={"center"}
          justify={"center"}
          borderRadius={"8px"}
          fontSize={"14px"}
          bg={"#FBD44C"}
          color={"#874616"}
          mt="0.6rem"
        >
          New
        </Flex>
      </Box>
    </>
  );
};
