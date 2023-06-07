import devices from '../data/devices';

const useDevice = (id: string) => {
  const data = devices.results.find((device) => device.id === parseInt(id))
  || { id: 0, name: 'Not Found' }
  return { data };
}

export default useDevice