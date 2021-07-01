import { Flex, SimpleGrid } from '@chakra-ui/react';

import Graphic from '../components/Graphic';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

export default function Dashboard(): JSX.Element {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Graphic title="Weekly Subscription" type="area" />
          <Graphic title="Conversions" type="area" />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
