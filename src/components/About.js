import {
    Box,
    Container,
    Heading,
    Text,
    Grid,
    GridItem,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'

const About = () => {
    const [isLessThan375] = useMediaQuery('(max-width: 375px)')
    return (
    <Container as="section" id="About" maxW={'full'}  mt={10}>
      <Wrap justify='center' textAlign={'center'} spacing={20} my={10} p={5}>
        <WrapItem>
            <Box w={ isLessThan375 ? '375px' : "600px"} p='2'>
                <Heading pb={5} fontSize={'3xl'} fontFamily={'Rock Salt'}>About me</Heading>
                <Text color={'gray.600'} fontSize={'md'}>
                    Previously independant in the construction as a flooring-installer, i decided to dedicate my life in compute science to
                    pursue a true passion since my youngest age and developing my skills in a constantly evolving industry.
                    
                    Crypto-enthusiast, I have been interested and passionate for more than 2 years in the world of the blockchain technologies and its
                    innovations, I intend to develop myself in thiat direction in order to be able in my turn to build the solutions of
                    tomorrow.
                </Text>
            </Box>
        </WrapItem>

        <WrapItem>
            <Box>
                <Heading pb={3} fontSize={'3xl'} fontFamily={'Rock Salt'} >Informations</Heading>
                <Grid templateColumns='repeat(3, 1fr)' templateRows='repeat(4, 1fr)' gap={1}>
                    <GridItem colSpan={1} h='8'>
                        <Text fontWeight={"bold"}>AGE:</Text>
                    </GridItem>
                    <GridItem colSpan={1} h='8'/>
                    <GridItem colSpan={1} h='8'>
                        <Text>27</Text>
                    </GridItem>

                    <GridItem colSpan={1} h='8'>
                        <Text fontWeight={"bold"}>EMAIL:</Text>
                    </GridItem>
                    <GridItem colSpan={1} h='8'/>
                    <GridItem colSpan={1} h='8'>
                        <Text>jonh.t@icloud.com</Text>
                    </GridItem>
                    
                    <GridItem colSpan={1} h='8'>
                        <Text fontWeight={"bold"}>PHONE:</Text>
                    </GridItem>
                    <GridItem colSpan={1} h='8'/>
                    <GridItem colSpan={1} h='8'>
                        <Text>010-3044-2186</Text>
                    </GridItem>

                    <GridItem colSpan={1} h='8'>
                        <Text fontWeight={"bold"}>LANGUAGE:</Text>
                    </GridItem>
                    <GridItem colSpan={1} h='8'/>
                    <GridItem colSpan={1} h='8'>
                        <Text fontSize={"xl"}>🇫🇷 🇬🇧 🇰🇷</Text>
                    </GridItem>
                </Grid>
            </Box>
        </WrapItem>
      </Wrap>
    </Container>
    );
  }

export default About