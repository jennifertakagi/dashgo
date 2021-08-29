import { useQuery } from 'react-query';
import Link from 'next/link';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  useBreakpointValue,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import SideBar from '../../components/SideBar';
import Table from '../../components/Table';

export default function UserList(): JSX.Element {
  const { data, error, isLoading } = useQuery('users', async () => {
    const response = await fetch('https:localhost:3000/api/users');
    const data = await response.json();
    const users = data.users.map(user => {
      return {
        createdAt: new Date(user.createdAt).toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
        email: user.email,
        id: user.id,
        name: user.name,
      };
    });

    return users;
  });

  const isWideVersion = useBreakpointValue({ base: false, lg: true });

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

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Create new
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Fail on getting user data</Text>
            </Flex>
          ) : (
            <>
              <Table data={data} isMobileVersion={isWideVersion} />

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
