import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { PostLabel } from "../../components";

const Meta = () => {
  return (
    <>
      <Box mt="2rem" bg="#FAFAFA" boxShadow={"0 1px 1px #e4e1d8"}>
        <Box p="20px">
          <Text fontSize={"20px"} fontFamily={"bold"}>
            #meta
          </Text>
        </Box>
        <Box
          cursor={"pointer"}
          p="20px"
          _hover={{ color: "#3B4ADF", bg: "#fff" }}
        >
          <Text fontSize={"16px"}>
            It *IS* possible to get a voice here! [tips to grow on DEV.to + a
            mini rant!]
          </Text>
          <Text fontSize={"14px"} color={"#717171"}>
            77 comments
          </Text>
        </Box>
        <Box mb="10px">
          <PostLabel text="Gather - Aproximando contato mesmo através do home office" />
        </Box>
      </Box>
    </>
  );
};

export default Meta;
