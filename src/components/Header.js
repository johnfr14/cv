import { Text, Box, Img, Container, VStack, Grid, GridItem} from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import SlideFadeOnScroll from "./SlideFadeOnScroll"
import john from '../img/moi.jpg'
import bgHeader from '../img/bg-header.jpg'
import bgHeaderPhone from '../img/bg-header-phone.jpeg'

const Header = () => {
  const [isLessThan375] = useMediaQuery('(max-width: 375px)')
  
    return (
      <Box as="section" maxW="100%" minWidth={isLessThan375 ? 375 : 600} m={0} p={0} style={{backgroundImage: `url(${isLessThan375 ? bgHeaderPhone : bgHeader})`, height: `${isLessThan375 ?"60vh" : '100vh'}`, backgroundSize: `${isLessThan375 ? '' : "cover"}`, backgroundRepeat: 'no-repeat', backgroundAttachment: "fixed"}}>
        <Container m={0} maxW="100%" centerContent color="whiteAlpha.800">
          
          { isLessThan375 ? 
          
          <Box w='60%'>
              <SlideFadeOnScroll offsetY={"120px"}>
                <VStack spacing={3}>
                  <Img borderRadius="full" src={john} alt="it's me" />
                    <Text fontSize={['2xl', '3xl', '4xl', '5xl']}>Tondelier Jonathan</Text>
                  <Text fontSize={['lg', 'xl', '2xl']}>Blockchain developer </Text>
                </VStack>
              </SlideFadeOnScroll>
          </Box>
          
          :
          
          <Grid mt={[30, 30, 35, 40]} templateColumns='repeat(3, 1fr)'>
            <GridItem colSpan={1}>
              <SlideFadeOnScroll offsetY={"120px"}>
                <VStack spacing={3}>
                  <Img borderRadius="full" src={john} alt="it's me" />
                    <Text fontSize={['xl', '2xl', '3xl', '4xl', '5xl']}>Tondelier Jonathan</Text>
                  <Text fontSize={['md', 'lg', 'xl', '2xl']}>Blockchain developer </Text>
                </VStack>
              </SlideFadeOnScroll>
            </GridItem>
          </Grid>
          }

        </Container>
      </Box>
    )
}

export default Header