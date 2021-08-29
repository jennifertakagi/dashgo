import { Table as ChakraTable, Tbody } from '@chakra-ui/react';

import TableHead from './TableHead';
import TableRow from './TableRow';

interface TableProps {
  data: {
    createdAt: string;
    email: string;
    id: string;
    name: string;
  }[];
  isMobileVersion?: boolean;
}

export default function Table({
  data,
  isMobileVersion = false,
}: TableProps): JSX.Element {
  return (
    <ChakraTable colorScheme="whiteAlpha">
      <TableHead isMobileVersion={isMobileVersion} />

      <Tbody>
        {data.map(user => {
          return (
            <TableRow
              key={user.id}
              date={user.createdAt}
              email={user.email}
              name={user.name}
              isMobileVersion={isMobileVersion}
            />
          );
        })}
      </Tbody>
    </ChakraTable>
  );
}
