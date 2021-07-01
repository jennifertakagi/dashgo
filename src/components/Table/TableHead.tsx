import { Checkbox, Th, Thead, Tr } from '@chakra-ui/react';

export default function TableHead(): JSX.Element {
  return (
    <Thead>
      <Tr>
        <Th px="6" color="gray.300" width="8">
          <Checkbox colorScheme="pink" />
        </Th>
        <Th>User</Th>
        <Th>Register Date</Th>
        <Th width="8"></Th>
      </Tr>
    </Thead>
  );
}
