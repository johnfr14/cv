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
  useColorModeValue,
  Stack,
  Text,
} from '@chakra-ui/react';
import {Link} from 'react-scroll'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/Connectors"
import john from '../img/moi.jpg'

const Links = ['About', 'Education', 'Skills', 'Projects', 'Contact'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    smooth={true}
    rounded={'md'}
    duration={1000}
    offset={-70}
    spy={true}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    to={children}>
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { active, account, activate, deactivate } = useWeb3React()

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
    <Box style={{position: "sticky", top: "0px", backdropFilter: "blur(8px)"}} zIndex={200} mt="-20" bg="blackAlpha.600" color="white" w="100%" px={4} fontFamily={'Rock Salt'}>
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
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            { active ? <Text mx={4}>Connected with <b>{account.slice(0, 6) + '...' + account.slice(-4)}</b></Text> : ''}
            { active ? 
            <Button onClick={disconnect} variant={'solid'} colorScheme={'red'} size={'sm'} mr={4}> Disconnect</Button>
            :
            <Button onClick={connect} variant={'solid'} colorScheme={'teal'} size={'sm'} mr={4}> Connect wallet </Button> 
            }
            <Menu>
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
              <MenuList>
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
            <Stack as={'nav'} spacing={4}>
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