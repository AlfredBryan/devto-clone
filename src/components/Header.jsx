import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

import { SearchButton, Notification } from "../data";

export const Header = () => {
  return (
    <>
      <Flex
        boxShadow={"0 1px 1px #e4e1d8"}
        w="100%"
        justify={"center"}
        height={"56px"}
        bg={"#fff"}
        pos={"fixed"}
        zIndex={"200"}
      >
        <Flex w={{ lg: "86.5%", xl: "65%" }} justify={"space-between"}>
          <Flex gap={"15px"} h={"100%"} w="35%" align={"center"}>
            <Image
              h={"40px"}
              w={"auto"}
              src={
                "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              }
              alt="logo"
            />

            <InputGroup>
              <Input
                h={"42px"}
                color={"#050404"}
                fontSize={"16px"}
                placeholder="Search..."
                boxShadow={"0 1px 1px #e4e1d8"}
              />
              <InputRightElement top={"22%"} right={"1rem"}>
                {SearchButton}
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex justify={"flex-end"} gap={"15px"} w="25%" align={"center"}>
            <Button
              border={"1px solid #626EE5"}
              fontSize={"16px"}
              padding={"7px 15px"}
              h={"42px"}
              color={"#626EE5"}
              borderRadius={"8px"}
              bg="#fff"
              _hover={{
                color: "#ffff",
                bg: "#626EE5",
                textDecor: "underline",
              }}
            >
              Create Post
            </Button>
            <Box>{Notification}</Box>
            <Avatar boxSize={"35px"} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
