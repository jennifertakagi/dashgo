import { Box, HStack } from '@chakra-ui/react';

import PaginationItem from './PaginationItem';

export default function Pagination(): JSX.Element {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> of strong <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem isCurrent={true} number={1} />
        <PaginationItem number={2} />
      </HStack>
    </HStack>
  );
}
