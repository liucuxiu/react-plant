import { Outlet } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Box>
        <Outlet/>
      </Box>
    </>
  );
};

export default Layout;
