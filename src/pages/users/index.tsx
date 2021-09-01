import NextLink from 'next/link';
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

import useUsers from '../../services/hooks/useUsers';
import { useState } from 'react';

export default function UserList(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isFetching, isLoading } = useUsers(currentPage);

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
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Create new
              </Button>
            </NextLink>
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
              <Table data={data.users} isMobileVersion={isWideVersion} />

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
