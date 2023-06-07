import { SimpleGrid } from '@chakra-ui/react';

import DeviceCardContainer from './DeviceCardContainer';
import DeviceCard from './DeviceCard';
import Device from '../entities/Device';

const DeviceGrid = () => {
  const data: Device[] = [
    {
      id: 1,
      name: 'Device 1',
    },
    {
      id: 2,
      name: 'Device 2',
    },
    {
      id: 3,
      name: 'Device 3',
    }
  ]
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