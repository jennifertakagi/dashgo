import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';

export default function UserList(): JSX.Element {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="small"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Create new
            </Button>
          </Flex>

          <Table />

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
