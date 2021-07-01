import { Box, HStack, Stack } from '@chakra-ui/react';

import PaginationItem from './PaginationItem';

export default function Pagination(): JSX.Element {
  return (
    <Stack
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
      direction={['column', 'row']}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> of strong <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem isCurrent={true} number={1} />
        <PaginationItem number={2} />
      </HStack>
    </Stack>
  );
}
