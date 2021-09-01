import {
  Box,
  Button,
  Checkbox,
  Icon,
  Link,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';
import { api } from '../../services/api';

import { queryClient } from '../../services/queryClient';

interface TableRowProps {
  date: string;
  id: string;
  email: string;
  name: string;
  isMobileVersion?: boolean;
}

export default function TableRow({
  date,
  id,
  email,
  name,
  isMobileVersion = false,
}: TableRowProps): JSX.Element {
  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const response = await api.get(`users/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes
      },
    );
  }

  return (
    <Tr>
      <Td px={['4', '4', '6']}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(id)}>
            <Text fontWeight="bold">{name}</Text>
          </Link>
          <Text fontSize="sm" color="gray.300">
            {email}
          </Text>
        </Box>
      </Td>
      {isMobileVersion && <Td>{date}</Td>}
      <Td>
        <Button
          as="a"
          size="sm"
          fontSize="small"
          colorScheme="yellow"
          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
        >
          {isMobileVersion ? 'Edit' : ''}
        </Button>
      </Td>
    </Tr>
  );
}
