import { Box, Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

import NavLink from './NavLink';
import NavSection from './NavSection';

export default function SideBar(): JSX.Element {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GENERAL">
          <NavLink icon={RiDashboardLine} title="Dashboard" />
          <NavLink icon={RiContactsLine} title="Users" />
        </NavSection>

        <NavSection title="AUTOMATION">
          <NavLink icon={RiInputMethodLine} title="Forms" />
          <NavLink icon={RiGitMergeLine} title="Automation" />
        </NavSection>
      </Stack>
    </Box>
  );
}
