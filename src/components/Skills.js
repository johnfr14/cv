import {
  Box,
  Grid,
  GridItem,
  Heading,
  Center,
  Container,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'
import SlideFadeOnScroll from "./SlideFadeOnScroll"
import solidity from '../img/solidity.png'
import theGraph from "../img/theGraph.png"
import metamask2 from '../img/metamask2.jpeg'
import hardhat from '../img/hardhat.png'
import ethers from '../img/ethers-js.png'
import waffle from '../img/waffle.png'
import javascript from '../img/javascript.png'
import chakra from '../img/chakra.png'
import nodejs from '../img/nodejs.png'
import prisma from '../img/prisma.png'
import react from '../img/react.png'

const textPopover = {
  colors: "white",
  fontSize: "1.2rem",
  textShadow: `0.01rem 0.01rem 0.01rem white, 0 0 0.1em white, 0 0 1em white`,
}

const headerPopover = {
  fontWeight: "bold",
  fontSize: "1.6rem",
}

const Skills = () => {
  const [isLessThan375] = useMediaQuery('(max-width: 375px)')
  
  return (
    <Box id="Skills" scrollBehavior={'smooth'} bgGradient='linear(to right,rgb(218, 226, 248),rgb(214, 164, 164))'>
      <Center>
        <Heading mt={10} p={3} fontSize={isLessThan375 ? '4xl' : '6xl'} fontFamily={'Rock Salt'} >Skills</Heading>
      </Center>
      <Container m={0} maxWidth={"none"}>
            <Grid templateColumns='repeat(5, 1fr)' templateRows={'repeat(6, 1fr)'} ml={[0, 50, 150, 400]} mr={50}>

                <GridItem m={3} colSpan={3} colStart={2} rowSpan={2} rowStart={3} >
                  <Popover placement='bottom' trigger="hover" closeDelay={500}>
                    <PopoverTrigger>
                      <a href="https://docs.soliditylang.org/en/v0.8.11/#" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <Image src={solidity} borderRadius='full' alt="solidity" objectFit="contain" />
                      </a>
                    </PopoverTrigger>
                    <PopoverContent color={'white'} style={textPopover}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader style={headerPopover}>Solidity</PopoverHeader>
                      <PopoverBody>Solidity is an object-oriented programming language dedicated to writing smart contracts 2 . It is used to implement smartcontracts on various blockchains , including Ethereum </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </GridItem>

                <GridItem colSpan={1} colStart={2} rowSpan={1} rowStart={2} >
                  <Popover placement='left' trigger="hover" closeDelay={500}>
                    <PopoverTrigger>
                      <a href="https://thegraph.com/en/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <SlideFadeOnScroll>
                          <Image mt={-10} borderRadius='full' src={theGraph} alt="metamask2" objectFit="contain" boxShadow='dark-lg'/>
                        </SlideFadeOnScroll>
                      </a>
                    </PopoverTrigger>
                    <PopoverContent color={'white'} style={textPopover}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader style={headerPopover}>The Graph</PopoverHeader>
                      <PopoverBody>The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </GridItem>

                <GridItem colSpan={1} colStart={1} rowSpan={1} rowStart={3}  >
                  <Popover placement='left' trigger="hover" closeDelay={500}>
                    <PopoverTrigger>
                      <a href="https://metamask.io/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <SlideFadeOnScroll>
                          <Image mt={isLessThan375 ? 5 : 10} borderRadius='full' src={metamask2} alt="metamask2" objectFit="contain" boxShadow='dark-lg'/>
                        </SlideFadeOnScroll>
                      </a>
                    </PopoverTrigger>
                    <PopoverContent color={'white'} style={textPopover}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader style={headerPopover}>Metamask</PopoverHeader>
                      <PopoverBody>Metamask is a crypto wallet and gateway to make transactions on blockchain apps</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </GridItem>

                <GridItem colSpan={1} colStart={2} rowSpan={1} rowStart={5} >
                  <Popover placement='bottom' trigger="hover" closeDelay={500}>
                    <PopoverTrigger>
                      <a href="https://hardhat.org/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <SlideFadeOnScroll>
                          <Image mt={-10}  borderRadius='full' src={hardhat} alt="hardhat" objectFit="contain" boxShadow='dark-lg'/>
                        </SlideFadeOnScroll>
                    </a>
                    </PopoverTrigger>
                    <PopoverContent color={'white'} style={textPopover}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader style={headerPopover}>Harhat</PopoverHeader>
                      <PopoverBody>Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </GridItem>

                <GridItem colSpan={1} colStart={4} rowSpan={1} rowStart={5} >
                  <Popover placement='bottom' trigger="hover" closeDelay={500}>
                    <PopoverTrigger>
                      <a href="https://getwaffle.io/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <SlideFadeOnScroll>
                          <Image mt={-10} bg='white' borderRadius='full' src={waffle} alt="waffle" objectFit="contain" boxShadow='dark-lg'/>
                        </SlideFadeOnScroll>
                      </a>
                    </PopoverTrigger>
                    <PopoverContent color={'white'} style={textPopover}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader style={headerPopover}>Waffle</PopoverHeader>
                      <PopoverBody>Waffle is a library for writing and testing smart contracts.</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </GridItem>

                <GridItem colSpan={1} colStart={5} rowSpan={1} rowStart={3} >
                  <Popover placement='bottom' trigger="hover" closeDelay={500}>
                    <PopoverTrigger>
                      <a href="https://docs.ethers.io/v5/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <SlideFadeOnScroll >
                          <Image  borderRadius='full' src={ethers} alt="ethers" objectFit="contain" boxShadow='dark-lg'/>
                        </SlideFadeOnScroll>
                      </a>
                    </PopoverTrigger>
                    <PopoverContent color={'white'} style={textPopover}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader style={headerPopover}>Ether.js</PopoverHeader>
                      <PopoverBody>The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem. It was originally designed for use with ethers.io and has since expanded into a more general-purpose library.</PopoverBody>
                    </PopoverContent>
                  </Popover>
                </GridItem>

            </Grid>

            <Grid templateColumns='repeat(4, 1fr)' templateRows={'repeat(5, 1fr)'} ml={50} mr={[0, 50, 150, 200, 400]}>

              <GridItem m={3} colSpan={3} colStart={2} rowSpan={2} rowStart={2} >
                <Popover placement='right' trigger="hover" closeDelay={500}>
                  <PopoverTrigger>
                    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <Image mt={isLessThan375 ? '' :-10} src={javascript} alt="javascript" objectFit="contain" />
                    </a>
                  </PopoverTrigger>
                  <PopoverContent color={'white'} style={textPopover}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader style={headerPopover}>Javascript</PopoverHeader>
                    <PopoverBody>JavaScript is a scripting language primarily used in interactive web pages and as such is an essential part of web applications . Along with HTML and CSS , JavaScript is at the heart of the languages ​​used by web developers </PopoverBody>
                  </PopoverContent>
                </Popover>
              </GridItem>

              <GridItem colSpan={1} colStart={2} rowSpan={1} rowStart={1} >
               
                <Popover placement='top' trigger="hover" closeDelay={500} >
                  <PopoverTrigger>
                    <a href="https://chakra-ui.com/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <SlideFadeOnScroll offsetX='-120px' offsetY='0px'>
                        <Image p={2} borderRadius='full' bg='white' src={chakra} alt="chakra" objectFit="contain" boxShadow='dark-lg'/>
                      </SlideFadeOnScroll>
                    </a>
                  </PopoverTrigger>
                  <PopoverContent color={'white'} style={textPopover}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader style={headerPopover}>Chakra</PopoverHeader>
                    <PopoverBody>Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.</PopoverBody>
                  </PopoverContent>
                </Popover>
              </GridItem>

              <GridItem colSpan={1} colStart={1} rowSpan={1} rowStart={2}  >
                <Popover placement='right' trigger="hover" closeDelay={500}>
                  <PopoverTrigger>
                    <a href="https://www.prisma.io/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <SlideFadeOnScroll offsetX='-120px' offsetY='0px'>
                        <Image mb={9} align="center" bg='white' borderRadius='full' src={prisma} alt="prisma" objectFit="contain" boxShadow='dark-lg'/>
                      </SlideFadeOnScroll>
                    </a>
                  </PopoverTrigger>
                  <PopoverContent color={'white'} style={textPopover}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader style={headerPopover}>prisma</PopoverHeader>
                    <PopoverBody>Prisma makes easy for developers to reason about their database queries by providing a clean and type-safe API for submitting database queries which returns plain old JavaScript objects.</PopoverBody>
                  </PopoverContent>
                </Popover>
              </GridItem>

              <GridItem colSpan={1} colStart={1} rowSpan={1} rowStart={3} >
                <Popover placement='right' trigger="hover" closeDelay={500}>
                  <PopoverTrigger>
                    <a href="https://reactjs.org/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <SlideFadeOnScroll offsetX='-120px' offsetY='0px'>
                        <Image mt={6} p={2} bg='white' borderRadius='full' src={react} alt="react" objectFit="contain" boxShadow='dark-lg'/>
                      </SlideFadeOnScroll>
                    </a>
                  </PopoverTrigger>
                  <PopoverContent color={'white'} style={textPopover}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader style={headerPopover}>React</PopoverHeader>
                    <PopoverBody>React is a JavaScript library for building user interfaces.<br />The main purpose of this library is to facilitate the creation of single-page web applications , through the creation of components depending on a state and generating an HTML page (or portion) at each change of state.</PopoverBody>
                  </PopoverContent>
                </Popover>
              </GridItem>

                <GridItem colSpan={1} colStart={2} rowSpan={1} rowStart={4} >
                  <Popover placement='right' trigger="hover" closeDelay={500}>
                  <PopoverTrigger>
                    <a href="https://nodejs.org/en/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <SlideFadeOnScroll offsetX='-120px' offsetY='0px'>
                        <Image p={2} borderRadius='full' bg='white' src={nodejs} alt="nodejs" objectFit="contain" boxShadow='dark-lg'/>
                      </SlideFadeOnScroll>
                    </a>
                  </PopoverTrigger>
                  <PopoverContent color={'white'} style={textPopover}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader style={headerPopover}>Nodejs</PopoverHeader>
                    <PopoverBody>Node.js is a free software platform in JavaScript , geared towards highly concurrent , event -driven network applications that need to be scalable .</PopoverBody>
                  </PopoverContent>
                </Popover>
              </GridItem>

            </Grid> 
      </Container>
      
    </Box>
  );
};

export default  Skills;