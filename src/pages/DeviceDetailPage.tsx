import { useParams } from 'react-router-dom';
import useDevice from '../hooks/useDevice';

const DeviceDetailPage = () => {
  const { id } = useParams()

  const { data } = useDevice(id!)

  return (
    <>
      <h1>{data.name}</h1>
    </>
  )
}

export default DeviceDetailPage