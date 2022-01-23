import { Text, Box, Img, Container, VStack, Grid, GridItem } from "@chakra-ui/react"
import SlideFadeOnScroll from "./SlideFadeOnScroll"
import john from '../img/moi.jpg'
import bgHeader from '../img/bg-header.jpg'

const Header = () => {
    return (
      <Box as="section" maxW="100%" minWidth={600} m={0} p={0} style={{backgroundImage: `url(${bgHeader})`, height: "100vh", backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundAttachment: "fixed"}}>
        <Container m={0} maxW="100%" centerContent color="whiteAlpha.800">
          
          <Grid mt={[30, 30, 35, 40]} templateColumns='repeat(3, 1fr)'>
            <GridItem colSpan={1}>
              <SlideFadeOnScroll offsetY={"120px"}>
                <VStack spacing={3}>
                  <Img borderRadius="full" src={john} alt="it's me" />
                  <Text fontSize={['2xl', '3xl', '4xl', '5xl']}>Tondelier Jonathan</Text>
                  <Text fontSize={['lg', 'xl', '2xl']}>Blockchain developer </Text>
                </VStack>
              </SlideFadeOnScroll>
            </GridItem>
          </Grid>

        </Container>
      </Box>
    )
}

export default Header