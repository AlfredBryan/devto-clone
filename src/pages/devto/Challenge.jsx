import { Box, Text } from "@chakra-ui/react";
import React from "react";

import { challenge } from "../../data";
import { PostLabel } from "../../components";

const Challenge = () => {
  return (
    <>
      <Box mt="2rem" bg="#FAFAFA" boxShadow={"0 1px 1px #e4e1d8"}>
        <Box p="20px">
          <Text fontSize={"20px"} fontFamily={"bold"}>
            #challenge
          </Text>
        </Box>
        <Box mb="10px">
          {challenge?.map((c, i) => (
            <PostLabel text={c} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Challenge;
