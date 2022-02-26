import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

import { Likes, commentCount } from "../../data";

const Post = ({
  tags,
  commentsNum,
  likesNum,
  BgImage,
  authorImage,
  authorName,
  title,
}) => {
  return (
    <>
      <Box
        h={BgImage ? "51rem" : "auto"}
        boxShadow={"0 1px 1px #e4e1d8"}
        borderRadius={"10px"}
        bg="#fff"
        mb="10px"
      >
        <Image borderTopRadius={"10px"} src={BgImage} />
        <Flex p="20px" gap={"10px"}>
          <Image h="4rem" w="4rem" borderRadius={"100%"} src={authorImage} />
          <Box color={"#525252"}>
            <Text fontSize={"13px"} fontFamily={"bold"}>
              {authorName}
            </Text>
            <Text fontSize={"12px"}>Feb 21 (1 day ago)</Text>
          </Box>
        </Flex>
        <Box pt={"10px"} pl={"65px"} pr={"30px"}>
          <Text fontFamily={"bold"} fontSize={"30px"}>
            {title}
          </Text>
          <Flex
            flexWrap={"wrap"}
            color={"#525252"}
            align={"center"}
            gap={"15px"}
          >
            {tags?.map((tag, i) => (
              <Box
                p="4px 7px"
                _hover={{
                  bg: "#bebdbd",
                  color: "black",
                  boxShadow: "0 1px 1px #e4e1d8",
                  borderRadius: "5px",
                }}
                key={i}
                cursor={"pointer"}
              >
                <Text>#{tag}</Text>
              </Box>
            ))}
          </Flex>
          <Flex pb="15px" mt="15px" color={"#525252"} justify={"space-between"}>
            <Flex gap={"10px"} align={"center"}>
              <Flex gap={"5px"} className="reactions">
                {Likes}
                <Text>{likesNum} Reactions</Text>
              </Flex>
              <Flex gap={"5px"} className="reactions">
                {commentCount}
                <Text>{commentsNum} Comments</Text>
              </Flex>
            </Flex>
            <Flex gap={"10px"} align={"center"}>
              <Text fontSize={"11.2px"}>3 min read</Text>
              <Button
                padding={"1.5rem"}
                color={"#3d3d3d"}
                fontSize={"13px"}
                bg="#d6d6d7"
              >
                Save
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Post;
