import { Grid, GridItem, Show } from '@chakra-ui/react';
import DeviceGrid from '../components/DeviceGrid';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          Aside
        </GridItem>
      </Show>

      <GridItem area="main">
        <DeviceGrid/>
      </GridItem>
    </Grid>
  )
}

export default HomePage