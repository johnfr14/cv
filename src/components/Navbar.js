import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Text,
  Image,
  Link,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/Connectors"
import john from '../img/moi.jpg'
import github from '../img/github.png'

const Links = ['About', 'Education', 'Skills', 'Projects', 'Contact'];

const NavLink = ({ children }) => {
  return <Link
    duration={1000}
    _hover={{
      textDecoration: 'none',
      transition: 'width 0.5s, height 0.5s, transform 0.5s',
    }}
    href={`#${children}`}>
    {children}
  </Link>
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { active, account, activate, deactivate } = useWeb3React()
  const [isLessThan375] = useMediaQuery('(max-width: 375px)')

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <Box style={{position: "sticky", top: "0px", backdropFilter: "blur(8px)"}} zIndex={200} mt={isLessThan375 ? '' : "-20"} bg="blackAlpha.600" color="white" w="100%" px={4} fontFamily={'Rock Salt'}>
        <Flex  h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => {
                  return <NavLink as={'a'} key={link}>{link}</NavLink>
              })}
            </HStack>
            <a href="https://github.com/johnfr14" target="_blank" rel="noreferrer">
              <Image m={5} _hover={{boxSize: '100px', transition: 'width 0.5s, height 0.5s'}} border={'2px solid white'} boxSize='50px' align="center" borderRadius='full' src={github} alt="github"  boxShadow='dark-lg' />
            </a>
          </HStack>


          <Flex alignItems={'center'}>
            { active ? <Text mx={4}>Connected with <b>{account.slice(0, 6) + '...' + account.slice(-4)}</b></Text> : ''}
            { active ? 
            <Button onClick={disconnect} variant={'solid'} colorScheme={'red'} size={'sm'} mr={4}> Disconnect</Button>
            :
            <Button onClick={connect} variant={'solid'} colorScheme={'teal'} size={'sm'} mr={4}> Connect wallet </Button> 
            }
            <Menu >
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={john}
                />
              </MenuButton>
              <MenuList 
              bgGradient='linear(to-r, teal.500, green.500)'
              _hover={{
              bgGradient: 'linear(to-r, green.500, teal.500)',
            }}>
                <MenuItem>In progress...</MenuItem>
                <MenuItem>In progress...</MenuItem>
                <MenuDivider />
                <MenuItem>In progress...</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack 
              as={'nav'} 
              spacing={4}
              duration={1000}
              bgGradient='linear(to-r, teal.500, green.500)'
              _hover={{
              bgGradient: 'linear(to-r, red.500, yellow.500)',
            }}>
              {Links.map((link) => (
                <NavLink  style={{scrollBehavior: 'smooth'}} href={link} key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
  );
}

export default Navbar