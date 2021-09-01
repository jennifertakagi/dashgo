import { Box, HStack, Stack, Text } from '@chakra-ui/react';

import PaginationItem from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number): number[] {
  return [...[to - from]]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0);
}

export default function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps): JSX.Element {
  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);
  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];

  return (
    <Stack
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
      direction={['column', 'row']}
    >
      <Box>
        <strong>0</strong> - <strong>{registerPerPage}</strong> of{' '}
        <strong>{totalCountOfRegisters}</strong>
      </Box>
      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length &&
          previousPages.map(page => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}

        <PaginationItem
          isCurrent
          number={currentPage}
          onPageChange={onPageChange}
        />

        {nextPages.length &&
          nextPages.map(page => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </HStack>
    </Stack>
  );
}
