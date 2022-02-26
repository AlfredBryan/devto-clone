import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import Links from "../pages/devto/Links";
import {
  otherLinks,
  Twitter,
  Facebook,
  Twitch,
  Github,
  Instagram,
  MyTags,
} from "../data";

export const OtherLinks = () => {
  return (
    <Box>
      <Text p="8px 16px" fontWeight={"900"} fontSize={"16px"}>
        Other
      </Text>
      {otherLinks?.map((l, i) => (
        <Links key={i} Icon={l.icon} name={l.name} />
      ))}
      <Flex
        justify={"space-between"}
        p="8px 16px"
        className="social-links"
        align={"center"}
      >
        {Twitter}
        {Facebook}
        {Github} {Instagram}
        {Twitch}
      </Flex>
      <Flex
        justify={"space-between"}
        mt="2rem"
        p="8px 16px"
        fontWeight={"900"}
        fontSize={"16px"}
      >
        <Text>My Tags</Text>
        {MyTags}
      </Flex>
      <Box
        mt="5rem"
        boxShadow={"0 1px 1px #e4e1d8"}
        bg={"#fff"}
        padding={"15px"}
      >
        <Image
          borderRadius={"8px"}
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--H03EII_F--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://thepracticaldev.s3.amazonaws.com/i/yulj7krmm6s7owlk3l7d.jpg"
        />
        <Text
          mt="2rem"
          mb="2rem"
          fontWeight={"900"}
          color={"#3B49Df"}
          fontSize={"2rem"}
        >
          New Champion-Brand DEV Wear is Here!
        </Text>
      </Box>
      <Box
        mt="2rem"
        boxShadow={"0 1px 1px #e4e1d8"}
        bg={"#fff"}
        padding={"15px"}
      >
        <Text fontSize={"16px"}>
          Contribute to the codebase or host your own!
        </Text>
        <Text fontSize={"16px"} color={"#3B49Df"}>
          Forem.
        </Text>
        <Text fontSize={"16px"}>
          Contribute to the codebase or host your own!
        </Text>
        <Text fontWeight={"900"} fontSize={"16px"}>
          Check these out! 👇
        </Text>
        <Flex mt="2rem" mb="2rem" justify={"flex-end"}>
          <Box>
            <Flex align={"center"}>
              <Box bg="black" h="0.5rem" w="0.5rem" borderRadius={"50%"} />
              <Text ml={".5rem"} fontSize={"16px"} color={"#3B49Df"}>
                Main Forem Repo
              </Text>
            </Flex>
            <Flex align={"center"}>
              <Box bg="black" h="0.5rem" w="0.5rem" borderRadius={"50%"} />
              <Text ml={".5rem"} fontSize={"16px"} color={"#3B49Df"}>
                Main Forem Repo
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
