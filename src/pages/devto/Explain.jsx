import { Box, Text } from "@chakra-ui/react";
import React from "react";

import { explain } from "../../data";

const Explain = () => {
  return (
    <>
      <Box mt="2rem" bg="#FAFAFA" boxShadow={"0 1px 1px #e4e1d8"}>
        <Box p="20px">
          <Text fontSize={"20px"} fontFamily={"bold"}>
            #explainlikeimfive
          </Text>
        </Box>
        <Box mb="10px">
          {explain?.map((d, i) => (
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
      </Box>
    </>
  );
};

export default Explain;
