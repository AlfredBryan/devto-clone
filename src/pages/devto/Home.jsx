import { Box, Flex } from "@chakra-ui/react";
import React from "react";

import { Header, OtherLinks, PostNav } from "../../components";
import { linkList, posts } from "../../data";
import Challenge from "./Challenge";
import Discuss from "./Discuss";
import Explain from "./Explain";
import Links from "./Links";
import Listings from "./Listings";
import Meta from "./Meta";
import Post from "./Post";
import PostListing from "./PostListing";
import WaterCooler from "./WaterCooler";

export const Home = () => {
  return (
    <>
      <Header />
      <Flex pt="80px" w="100%" justify={"center"}>
        <Box w={{ lg: "86.5%", xl: "65%" }}>
          <Flex gap={"2%"} w="100%">
            <Box w="17%">
              {linkList?.map((link, i) => (
                <Links key={i} Icon={link.icon} name={link.name} />
              ))}
              <OtherLinks />
            </Box>
            <Box w="62%">
              <PostNav />
              {posts?.map((post, i) => (
                <Post
                  BgImage={post.bg_image}
                  title={post.title}
                  tags={post.tags}
                  commentsNum={post.comment_num}
                  likesNum={post.post_likes}
                  authorImage={post.author_dp}
                  authorName={post.author}
                />
              ))}
            </Box>
            <Box w="30%">
              <PostListing />
              <Listings />
              <Discuss />
              <Explain />
              <Challenge />
              <Meta />
              <WaterCooler />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
