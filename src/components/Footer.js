import {
    Container,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    FormLabel,
    Input,
    Textarea,
    Center,
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react'
  import { FaHeart } from 'react-icons/fa';
  
  const Footer = () => {
    const toast = useToast()
      const onSubmit = (e) => {
          console.log(e.target)
        toast({
        title: 'Mail sent.',
        description: "Your message has been sent successfully",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    return (
        <Container id="Contact" bgGradient="radial( gray.500, gray.800)" maxW="full" mt={0} centerContent overflow="hidden">
            <Center>
                <Heading my={10} p={3} color={'whiteAlpha.800'} fontSize={'6xl'} fontFamily={'Rock Salt'}>Contact</Heading>
            </Center>
            <Box w={['80%','70','60%','40%']} bg="white" borderRadius="lg">
                <Box m={8} color="#0B0E3F">

                    <VStack spacing={5}>
                    <form onSubmit={onSubmit} method='POST' action='https://formspree.io/f/xjvlgjep' target={"blank"} >
                        <FormLabel>Your Name</FormLabel>
                        <Input 
                        name="name" 
                        _hover={{
                            borderRadius: 'gray.300',
                        }} 
                        borderColor="gray.300"
                        type="text"
                        size="md" />

                        <FormLabel>Mail</FormLabel>
                        <Input 
                        name="_replyto"
                        _hover={{
                            borderRadius: 'gray.300',
                        }} 
                        borderColor="gray.300" type="text" size="md" />

                        <FormLabel>Message</FormLabel>
                        <Textarea
                        mb={3}
                        name="message"
                        borderColor="gray.300"
                        _hover={{
                            borderRadius: 'gray.300',
                        }}
                        placeholder="message"
                        />
                        <Button
                        type='submit'
                        bg="#0D74FF"
                        color="white"
                        _hover={{}}
                        value='Send'
                        >
                        Send message
                        </Button>
                    </form>
                        </VStack>
                </Box>
            </Box>       
        <Center>
          <Text my="4" color={'white'}>Made with <FaHeart display={'inline'} color='red' /> by me 😎</Text>
        </Center>
        </Container>
    );
}

export default Footer