import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

import { listings } from "../../data";

const PostListing = () => {
  return (
    <>
      <Box>
        <Box boxShadow={"0 1px 1px #e4e1d8"}>
          <Image
            borderRadius={"8px"}
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--0ko9CYik--/c_limit,f_auto,fl_progressive,q_auto,w_500/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ji7njl81qbchj01hdgbt.png"
          />
          <Box bg="#FAFAFA" mt="20px">
            {listings?.map((list, i) => (
              <Text
                cursor={"pointer"}
                _hover={{ color: "#3B4ADF", bg: "#fff" }}
                p="20px"
                key={i}
                fontSize={i === 0 ? "20px" : "16px"}
                fontFamily={i === 0 ? "bold" : ""}
              >
                {list}
              </Text>
            ))}
            <Box p="20px">
              <Button
                h={"3.5rem"}
                bg={"#3B4ADF"}
                color={"#fff"}
                w="100%"
                fontSize={"16px"}
                _hover={{ opacity: "0.8" }}
              >
                Share your project
              </Button>
              <Button
                bg={"#D6D6D7"}
                h={"4rem"}
                mt="1.5rem"
                w="100%"
                fontSize={"16px"}
                _hover={{ opacity: "0.8" }}
              >
                See all post
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PostListing;
