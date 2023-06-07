import { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode
}

const DeviceCardContainer = ({ children }: Props) => {
  return (
    <Box width='100%' height='400px' borderRadius={10} overflow='hidden'>
      {children}
    </Box>
  )
}

export default DeviceCardContainer