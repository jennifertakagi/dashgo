import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export default function Profile(): JSX.Element {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Jennifer Takagi</Text>
        <Text color="gray.300" fontSize="small">
          jennitakagi@email.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Jennifer Takagi"
        src="https://github.com/jennifertakagi.png"
      />
    </Flex>
  );
}
