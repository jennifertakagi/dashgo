import { Table as ChakraTable, Tbody } from '@chakra-ui/react';

import TableHead from './TableHead';
import TableRow from './TableRow';

export default function Table(): JSX.Element {
  return (
    <ChakraTable colorScheme="whiteAlpha">
      <TableHead />

      <Tbody>
        <TableRow
          date="01st July, 2021"
          email="jennifer@email.com"
          name="Jennifer Takagi"
        />
      </Tbody>
    </ChakraTable>
  );
}
