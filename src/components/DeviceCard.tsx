import Device from '../entities/Device';
import { Card, CardBody, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  device: Device
}

const DeviceCard = ({ device }: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading fontSize='2xl'>
          <Link to={'/devices/' + device.id}>
            {device.name}
          </Link>
        </Heading>
      </CardBody>
    </Card>
  )
}

export default DeviceCard

