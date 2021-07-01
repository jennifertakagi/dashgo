import { Table as ChakraTable, Tbody } from '@chakra-ui/react';

import TableHead from './TableHead';
import TableRow from './TableRow';

interface TableProps {
  isMobileVersion?: boolean;
}

export default function Table({
  isMobileVersion = false,
}: TableProps): JSX.Element {
  return (
    <ChakraTable colorScheme="whiteAlpha">
      <TableHead isMobileVersion={isMobileVersion} />

      <Tbody>
        <TableRow
          date="01st July, 2021"
          email="jennifer@email.com"
          name="Jennifer Takagi"
          isMobileVersion={isMobileVersion}
        />
      </Tbody>
    </ChakraTable>
  );
}
