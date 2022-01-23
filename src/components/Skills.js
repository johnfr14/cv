import {
  Box,
  Grid,
  GridItem,
  Heading,
  Center,
  Container,
  Image,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'
import SlideFadeOnScroll from "./SlideFadeOnScroll"
import solidity from '../img/solidity.png'
import metamask2 from '../img/metamask2.jpeg'
import hardhat from '../img/hardhat.png'
import ethers from '../img/ethers-js.png'
import waffle from '../img/waffle.png'
import javascript from '../img/javascript.png'
import chakra from '../img/chakra.png'
import nodejs from '../img/nodejs.png'
import prisma from '../img/prisma.png'
import react from '../img/react.png'


const Skills = () => {
  const [isLessThan375] = useMediaQuery('(max-width: 375px)')

  return (
    <Box id="Skills" scrollBehavior={'smooth'} bgGradient='linear(to right,rgb(218, 226, 248),rgb(214, 164, 164))'>
      <Center>
        <Heading mt={10} p={3} fontSize={isLessThan375 ? '4xl' : '6xl'} fontFamily={'Rock Salt'} >Skills</Heading>
      </Center>
      <Container m={0} maxWidth={"none"}>
            <Grid templateColumns='repeat(5, 1fr)' templateRows={'repeat(5, 1fr)'} ml={[0, 50, 150, 400]} mr={50}>
                <GridItem m={3} colSpan={3} colStart={2} rowSpan={2} rowStart={2} >
                  <a href="https://docs.soliditylang.org/en/v0.8.11/#" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <Image src={solidity} borderRadius='full' alt="solidity" objectFit="contain" />
                  </a>
                </GridItem>
                <GridItem colSpan={1} colStart={1} rowSpan={1} rowStart={2}  >
                  <a href="https://metamask.io/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <SlideFadeOnScroll>
                      <Image mt={isLessThan375 ? 5 : 10} borderRadius='full' src={metamask2} alt="metamask2" objectFit="contain" boxShadow='dark-lg'/>
                    </SlideFadeOnScroll>
                  </a>
                </GridItem>
                <GridItem colSpan={1} colStart={2} rowSpan={1} rowStart={4} >
                  <a href="https://hardhat.org/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <SlideFadeOnScroll>
                      <Image mt={-10}  borderRadius='full' src={hardhat} alt="hardhat" objectFit="contain" boxShadow='dark-lg'/>
                    </SlideFadeOnScroll>
                  </a>
                </GridItem>
                <GridItem colSpan={1} colStart={4} rowSpan={1} rowStart={4} >
                  <a href="https://getwaffle.io/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <SlideFadeOnScroll>
                      <Image mt={-10} bg='white' borderRadius='full' src={waffle} alt="waffle" objectFit="contain" boxShadow='dark-lg'/>
                    </SlideFadeOnScroll>
                  </a>
                </GridItem>
                <GridItem colSpan={1} colStart={5} rowSpan={1} rowStart={2} >
                  <a href="https://docs.ethers.io/v5/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                    <SlideFadeOnScroll >
                      <Image  borderRadius='full' src={ethers} alt="ethers" objectFit="contain" boxShadow='dark-lg'/>
                    </SlideFadeOnScroll>
                  </a>
                </GridItem>
            </Grid>

            <Grid templateColumns='repeat(4, 1fr)' templateRows={'repeat(5, 1fr)'} ml={50} mr={[0, 50, 150, 200, 400]}>
              <GridItem m={3} colSpan={3} colStart={2} rowSpan={2} rowStart={2} >
                <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <Image mt={isLessThan375 ? '' :-10} src={javascript} alt="javascript" objectFit="contain" />
                </a>
              </GridItem>
              <GridItem colSpan={1} colStart={2} rowSpan={1} rowStart={1} >
                <a href="https://chakra-ui.com/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <SlideFadeOnScroll offsetX='-120px' offsetY='0px'>
                    <Image p={2} borderRadius='full' bg='white' src={chakra} alt="chakra" objectFit="contain" boxShadow='dark-lg'/>
                  </SlideFadeOnScroll>
                </a>
              </GridItem>
              <GridItem colSpan={1} colStart={1} rowSpan={1} rowStart={2}  >
                <a href="https://www.prisma.io/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  <SlideFadeOnScroll offsetX='-120px' offsetY='0px'>
                    <Image mb={9} align="center" bg='white' borderRadius='full' src={prisma} alt="prisma" objectFit="contain" boxShadow='dark-lg'/>
                  </SlideFadeOnScroll>
                </a>
              </GridItem>
              <GridItem colSpan={1} colStart={1} rowSpan={1} rowStart={3} >

                <a href="https://fr.reactjs.org/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <SlideFadeOnScroll offsetX='-120px' offsetY='0px'>
                  <Image mt={6} p={2} bg='white' borderRadius='full' src={react} alt="react" objectFit="contain" boxShadow='dark-lg'/>
                </SlideFadeOnScroll>
                </a>
              </GridItem>
                <GridItem colSpan={1} colStart={2} rowSpan={1} rowStart={4} >
                  <a href="https://nodejs.org/en/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <SlideFadeOnScroll offsetX='-120px' offsetY='0px'>
                    <Image p={2} borderRadius='full' bg='white' src={nodejs} alt="nodejs" objectFit="contain" boxShadow='dark-lg'/>
                </SlideFadeOnScroll>
                  </a>
              </GridItem>
            </Grid> 
      </Container>
      
    </Box>
  );
};

export default  Skills;