import { Box, Tag } from "@chakra-ui/react"

const BlogTags = (props) => {
    return (
      <Box spacing={2} marginTop={props.marginTop}>
        {props.tags.map((tag) => {
          return (
            <Tag ml={1} mb={1} size={'md'} variant="solid" colorScheme="orange" key={tag}>
              {tag}
            </Tag>
          );
        })}
      </Box>
    );
};

export default BlogTags