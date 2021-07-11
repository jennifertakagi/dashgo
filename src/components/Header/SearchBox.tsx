import { Icon, Input, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import useDebounce from '../../utils';

export default function SearchBox(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Make the search');
    }
  }, [debouncedSearchTerm]);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth="400"
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search on platform"
        _placeholder={{ color: 'gray.400' }}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
