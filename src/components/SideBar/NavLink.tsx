import { ElementType } from 'react';
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from '@chakra-ui/react';

import ActiveLink from '../ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  href: string;
  title: string;
}

export default function NavLink({
  icon,
  href,
  title,
  ...rest
}: NavLinkProps): JSX.Element {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
