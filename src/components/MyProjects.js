import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Link,
  Center,
  Image,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useMediaQuery } from '@chakra-ui/react'
import Slider from 'react-slick';
import SRO from '../img/SRO-marketplace.png'
import gradient from '../img/alyra-gradient.png';
import snake from '../img/snake.png'

const MyProjects = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);
  const [isLessThan375] = useMediaQuery('(max-width: 375px)')

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'SRO marketplace',
      text:
        "The project board is an exclusive resource for artists to create and sell their arts as NFT, but also allows everyone to buy and sell NFTs The marketplace is fully decentralized and each address can have his own dashboard.\nThis project has been made for the Alyra's certification collaborating with 3 other students.",
      image: SRO,
      website: "https://prez-poc-marketplace.netlify.app/",
    },
    {
      title: 'Alyra gradient',
      text:
        "Simple website that allow you to retrieve the most common linerar gradient (and the code itself), using react and the Heroku API",
      image: gradient,
      website: "https://alyra-gradient-color.netlify.app/",
    },
    {
      title: 'Snake',
      text: "The famous snake game, we never get bored of that one :D",
      image: snake,
      website: "https://snaky-game.netlify.app/",
    },
  ];

  return ( <>
  
  { isLessThan375 ? 
    <Container p={5} mx={5} backdropFilter="blur(4px)" boxShadow='xl' borderWidth='1px' textAlign={'center'} width={[340, 340, 800, 1000, null]} minWidth={340} >
              
      <Center>
        <Heading mt={'-6rem'} lineHeight={1.3} borderTopRadius={'20px'} borderTop={'1px solid black'} boxShadow={'inner'} fontSize={'4xl'} fontFamily={'Rock Salt'}>My projects</Heading>
      </Center>
      <Wrap justify='center' color={'whiteAlpha.800'}>
          {cards.map((card, index) => (
            <WrapItem key={index}> 
              <Box width={300} bg={'blackAlpha.800'} borderRadius={5} p={3}>
                <Text mb='2' fontWeight={'bold'} fontSize={'3xl'}>
                  {card.title}
                </Text>
                <Center>
                  <a href={card.website} textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <Image borderRadius="2xl" boxSize='240xp' src={card.image} alt="ecole 42" objectFit="contain"/>
                  </a>
                </Center>
                <Text fontWeight={'bold'} fontSize={'xs'}>
                  {card.text}
                </Text>
              </Box>
          </WrapItem>
          ))}
    </Wrap>
  </Container>

  : 
  
  <Box as="section" id="Projects" minWidth={600} m={0} p={0}>
  <Center>
      <Heading mt={-20} lineHeight={1.3} borderTopRadius={'20px'} borderTop={'1px solid black'} boxShadow={'inner'} fontSize={'6xl'} fontFamily={'Rock Salt'}>My projects</Heading>
  </Center>
  <Box
    position={'relative'}
    height={'600px'}
    overflow={'hidden'}>
    {/* CSS files for react-slick */}
    <link
      rel="stylesheet"
      type="text/css"
      charSet="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    {/* Left Icon */}
    <IconButton
      color={'teal.500'}
      aria-label="left-arrow"
      variant="ghost"
      position="absolute"
      left={side}
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickPrev()}>
      <BiLeftArrowAlt size="40px" />
    </IconButton>
    {/* Right Icon */}
    <IconButton
      color={'teal.500'}
      aria-label="right-arrow"
      variant="ghost"
      position="absolute"
      right={side}
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickNext()}>
      <BiRightArrowAlt size="40px" />
    </IconButton>
    {/* Slider */}
    <Slider  ref={(slider) => setSlider(slider)}>
      {cards.map((card, index) => (
        <Box
          key={index}
          position="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${card.image})`}>
          {/* This is the block you need to change, to customize the caption */}
          <Link href={card.website} key={index} isExternal>
              <Container size="container.lg" height="600px" position="relative">
                  <Stack
                      spacing={6}
                      maxW={'lg'}
                      p={5}
                      position="absolute"
                      top="70%"
                      bg={'blackAlpha.700'}
                      color={'white'}
                      alignItems={'center'}
                      transform="translate(0, -50%)">
                      <Heading  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                          {card.title}
                      </Heading>
                      <Text fontSize={{ base: 'md', lg: 'lg' }}>
                      {card.text}
                      </Text>
                  </Stack>
              </Container>
          </Link>
        </Box>
      ))}
    </Slider>
  </Box>
  </Box>}
  </>
  );
}

export default MyProjects