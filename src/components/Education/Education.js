import React from 'react';
import {
  Box,
  SimpleGrid,
  GridItem,
  Heading,
  Center,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'
import bgHeader from '../../img/education.jpg'
import Alyra from "./Alyra"
import Extra from "./Extra"

const Education = () => {
  const [isLessThan375] = useMediaQuery('(max-width: 375px)')

  return (<>
    {isLessThan375 ? 

      <Box as="section" id="Education" minWidth={375} m={0} p={0} style={{backgroundImage: `url(${bgHeader})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundAttachment: "fixed"}} height={['280vh', '170vh', '170vh', "140h", "130vh"]}>
        <Center>
          <Heading p={3} mt={5} color={"white"} fontSize={'4xl'} fontFamily={'Rock Salt'}>Education</Heading>
        </Center>
          <SimpleGrid columns={{sm: 1, md: 2, lg: 4, xl: 6}} >
            <GridItem m='0' colSpan={{sm: 1, md: 2, lg: 2, xl: 2}} colStart={{sm: 2, md: 2, lg: 3, xl: 4}} colEnd={{sm: 2, md: 2, lg: 4, xl: 7}} >
              <Alyra />
            </GridItem>
            <GridItem colSpan={{sm: 1, md: 2, lg: 2, xl: 2}} colStart={{sm: 1, md: 1, lg: 1, xl: 2}} colEnd={{sm: 2, md: 3, lg: 5, xl: 6}} >
              <Extra />
            </GridItem>
          </SimpleGrid>
      </Box>
    
    :
      
    <Box  as="section" id="Education" minWidth={isLessThan375 ? 375 : 600} m={0} p={0} style={{backgroundImage: `url(${bgHeader})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundAttachment: "fixed"}} height={['170vh', '170vh', "140h", "130vh"]}>
      <Center>
        <Heading p={3} mt={5} color={"white"} fontSize={'6xl'} fontFamily={'Rock Salt'}>Education</Heading>
      </Center>
        <SimpleGrid columns={{sm: 1, md: 2, lg: 4, xl: 6}} >
          <GridItem m='0' colSpan={{sm: 1, md: 2, lg: 2, xl: 2}} colStart={{sm: 2, md: 2, lg: 3, xl: 4}} colEnd={{sm: 2, md: 2, lg: 4, xl: 7}} >
            <Alyra />
          </GridItem>
          <GridItem colSpan={{sm: 1, md: 2, lg: 2, xl: 2}} colStart={{sm: 1, md: 1, lg: 1, xl: 2}} colEnd={{sm: 2, md: 3, lg: 5, xl: 6}} >
            <Extra />
          </GridItem>
        </SimpleGrid>
    </Box>
    }
    </>
  )
};

export default  Education;