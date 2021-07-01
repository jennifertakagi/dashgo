import { Text } from '@chakra-ui/react';

export default function Logo(): JSX.Element {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      frontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" color="pink.500" ml="1">
        .
      </Text>
    </Text>
  );
}
