import Link from 'next/link';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';

import Header from '../../components/Header';
import { Input } from '../../components/Form/Input';
import SideBar from '../../components/SideBar';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { useRouter } from 'next/router';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Email is not valid'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'At least 6 characters'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'The password must be equal'),
});

export default function CreateUser(): JSX.Element {
  const router = useRouter();

  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      const { data } = await api.post('users', {
        user: {
          ...user,
          created_at: new Date(),
        },
      });

      return data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    },
  );

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    await createUser.mutateAsync(values);
    router.push('/users');
  };

  return (
    <>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                error={errors.name}
                name="name"
                label="Full name"
                type="text"
                {...register('name')}
              />
              <Input
                error={errors.email}
                name="email"
                label="E-mail"
                type="email"
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                error={errors.password}
                name="password"
                label="Password"
                type="password"
                {...register('password')}
              />
              <Input
                error={errors.password_confirmation}
                name="password_confirmation"
                label="Password Confirmation"
                type="password"
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancel</Button>
              </Link>
              <Button
                colorScheme="pink"
                isLoading={formState.isSubmitting}
                type="submit"
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
