import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Center,
  Spacer,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import BlogTags from './BlogTags';
import fourtyTwo from '../../img/42.jpeg'
import openClassroom from '../../img/openClassroom.png'
import CS50 from "../../img/cs50.jpeg"

const Extra = () => {
    return (
        <Box p={5} mx={5} backdropFilter="blur(4px)" boxShadow='xl' borderWidth='1px' textAlign={'center'} width={[340, 340, 800, 1000, null]} minWidth={340}>
            
            <Heading mb={5} color="whiteAlpha.800">Bootcamps</Heading>
            <Wrap justify='center'>
                <WrapItem > 
                    <Box height={200} width={300} bg={'whiteAlpha.800'} borderRadius={5} p={3}>
                        <Center>
                            <a href="https://42seoul.kr/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image borderRadius="lg" boxSize='100px' src={fourtyTwo} alt="ecole 42" objectFit="contain"/>
                            </a>
                        </Center>
                        <BlogTags tags={['C', 'Shell']} />
                        <Spacer />
                        <Text fontWeight={'bold'} fontSize={'sm'}>Duration: 1 month </Text>
                    </Box>
                </WrapItem>
                
                <WrapItem >
                    <Box height={200} width={300} bg={'whiteAlpha.800'} borderRadius={5} p={3}>
                        <Center>
                            <a href="https://openclassrooms.com/en/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image borderRadius="lg" boxSize='100px' src={openClassroom} alt="OpenClassroom" objectFit="contain"/>
                            </a>
                        </Center>
                        <BlogTags tags={['C', 'Shell', 'Javascript', 'Git']} />
                        <Spacer />
                        <Text fontWeight={'bold'} fontSize={'sm'}>Duration: 3 month </Text>
                    </Box>
                </WrapItem>

                <WrapItem  >
                    <Box height={200} width={300} bg={'whiteAlpha.800'} borderRadius={5} p={3}>
                        <Center>
                            <a href="https://cs50.harvard.edu/x/2021/weeks/0/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                <Image borderRadius="lg" boxSize='100px' src={CS50} alt="CS50" objectFit="contain"/>
                            </a>
                        </Center>
                        <BlogTags tags={['C', 'Python', 'HTML', 'Data stuctures']} />
                        <Spacer />
                        <Text fontWeight={'bold'} fontSize={'sm'}>Duration: 1 month </Text>
                    </Box>                
                </WrapItem>
            </Wrap>
        </Box>
    )
}

export default Extra