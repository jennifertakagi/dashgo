import { Checkbox, Th, Thead, Tr } from '@chakra-ui/react';

interface TableHeadProps {
  isMobileVersion?: boolean;
}
export default function TableHead({
  isMobileVersion = false,
}: TableHeadProps): JSX.Element {
  return (
    <Thead>
      <Tr>
        <Th px={['4', '4', '6']} color="gray.300" width="8">
          <Checkbox colorScheme="pink" />
        </Th>
        <Th>User</Th>
        {isMobileVersion && <Th>Register Date</Th>}
        <Th width="8"></Th>
      </Tr>
    </Thead>
  );
}
