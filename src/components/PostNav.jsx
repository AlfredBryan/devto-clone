import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const PostNav = () => {
  return (
    <Flex gap={"15px"} mb="2rem" align={"center"}>
      <Text fontSize={"18px"} fontFamily={"900"}>
        Relevant
      </Text>
      <Text color={"#575757"} fontSize={"18px"} fontWeight={"300"}>
        Latest
      </Text>
      <Text color={"#575757"} fontSize={"18px"} fontWeight={"300"}>
        Top
      </Text>
    </Flex>
  );
};
