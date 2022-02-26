import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { PostLabel } from "../../components";

const WaterCooler = () => {
  return (
    <>
      <Box mt="2rem" bg="#FAFAFA" boxShadow={"0 1px 1px #e4e1d8"}>
        <Box p="20px">
          <Text fontSize={"20px"} fontFamily={"bold"}>
            #watercooler
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
        <Box
          cursor={"pointer"}
          p="20px"
          _hover={{ color: "#3B4ADF", bg: "#fff" }}
        >
          <Text fontSize={"16px"}>
            How writing 700 articles changed my life
          </Text>
          <Text fontSize={"14px"} color={"#717171"}>
            14 comments
          </Text>
        </Box>
        <Box mb="10px">
          <PostLabel text="Are you participating in the reply code challenge?" />
          <PostLabel text="How to have fun (and win) in a hackathon" />
        </Box>
      </Box>
    </>
  );
};

export default WaterCooler;
