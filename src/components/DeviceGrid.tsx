import { SimpleGrid } from '@chakra-ui/react';

import DeviceCardContainer from './DeviceCardContainer';
import DeviceCard from './DeviceCard';
import useDevices from '../hooks/useDevices';

const DeviceGrid = () => {
  const { data } = useDevices();

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>


      {data.map(device =>
        <DeviceCardContainer key={device.id}>
          <DeviceCard device={device}/>
        </DeviceCardContainer>
      )}


    </SimpleGrid>
  )
}

export default DeviceGrid