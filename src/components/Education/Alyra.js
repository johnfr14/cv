import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Center,
  Spacer,
} from '@chakra-ui/react';
import BlogTags from './BlogTags';
import alyra from '../../img/alyra.png'
import diplome from '../../img/diplome.png'

const Alyra = () => {
    return (
        <Box my={10} mx={5} p={5} backdropFilter="blur(4px)" borderWidth='1px'  minWidth={500} textAlign={'center'}>
            <Center>
                <a href="https://alyra.fr/" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                    borderRadius="lg"
                    src={alyra}
                    alt="sAlyra school"
                    objectFit="contain"  
                />
                </a>
            </Center>
            <Box bg={'whiteAlpha.800'} borderRadius={5} p={3}>
                <HStack pb={4}>
                    <BlogTags tags={['Solidity', 'React', 'Javascript', 'NodeJs']} />
                    <Spacer />
                    <Text fontWeight={'bold'} fontSize={'sm'}>From 2/2021 to 9/2021 </Text>
                </HStack>
                    <Heading marginTop="1" textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        Full stack developer
                    </Heading>
                <Text
                    as="p"
                    marginTop="2"
                    fontSize="lg">
                    With Alyra I learned from scratch how to build a responsive website using 'React' framework.
                    I also learn everything about Javascript and Solidity in order to connect the component with any blockchain to transform a simple website
                    to a true Web3 website allowing everyone to connect a decentralize wallet like "Metamask" and interact with any smart contracts.
                </Text>
                <Center>
                    <a href="https://certificate.bcdiploma.com/check/C0378707FABD56383010A4AAC941B113EDCD6044801F2B7416B60BCB782EED76TjcrWVdJWnZHYW96bTlWeGlvbXZnUlNQRWN0NVNwSnIxbjdFS0lQV2ExemdDWU02">
                        <Image p={1} src={diplome} boxSize='100px' objectFit="contain"/>
                    </a>
                </Center>
            </Box>                
        </Box>
    )
}

export default Alyra