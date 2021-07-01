import { Box, Button, Checkbox, Icon, Td, Text, Tr } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

interface TableRowProps {
  date: string;
  email: string;
  name: string;
}

export default function TableRow({
  date,
  email,
  name,
}: TableRowProps): JSX.Element {
  return (
    <Tr>
      <Td px="6">
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.300">
            {email}
          </Text>
        </Box>
      </Td>
      <Td>{date}</Td>
      <Td>
        <Button
          as="a"
          size="sm"
          fontSize="small"
          colorScheme="yellow"
          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
        >
          Edit
        </Button>
      </Td>
    </Tr>
  );
}
