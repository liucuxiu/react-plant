import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit='cover' />
      </Link>
    </HStack>
  )
}

export default NavBar