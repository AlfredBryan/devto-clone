import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { secondListing } from "../../data";

const Listings = () => {
  return (
    <>
      <Box mt="2rem" bg="#FAFAFA" boxShadow={"0 1px 1px #e4e1d8"}>
        <Box p="20px">
          <Flex justify={"space-between"} align={"center"}>
            <Text fontSize={"20px"} fontFamily={"bold"}>
              Listings
            </Text>
            <Text>See all</Text>
          </Flex>
        </Box>
        <Box mb="10px">
          {secondListing?.map((list, i) => (
            <Box
              cursor={"pointer"}
              p="20px"
              _hover={{ color: "#3B4ADF", bg: "#fff" }}
            >
              <Text key={i} fontSize={"16px"}>
                {list.list}
              </Text>
              <Text fontSize={"14px"} fontFamily={"bold"} color={"#717171"}>
                {list.label}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Listings;
