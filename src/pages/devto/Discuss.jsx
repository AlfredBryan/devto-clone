import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { PostLabel } from "../../components";

import { discuss } from "../../data";

const Discuss = () => {
  return (
    <>
      <Box mt="2rem" bg="#FAFAFA" boxShadow={"0 1px 1px #e4e1d8"}>
        <Box p="20px">
          <Text fontSize={"20px"} fontFamily={"bold"}>
            #discuss
          </Text>
        </Box>
        <Box>
          {discuss?.map((d, i) => (
            <Box
              key={i}
              cursor={"pointer"}
              p="20px"
              _hover={{ color: "#3B4ADF", bg: "#fff" }}
            >
              <Text fontSize={"16px"}>{d.discuss}</Text>
              <Text fontSize={"14px"} color={"#717171"}>
                {d.comment} comments
              </Text>
            </Box>
          ))}
        </Box>
        <Box mb="10px">
          <PostLabel text="My 5 Apprenticeship Patterns for 2022" />
        </Box>
      </Box>
    </>
  );
};

export default Discuss;
