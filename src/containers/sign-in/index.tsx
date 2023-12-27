import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Flex, FormControl, FormHelperText, Heading, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Stack, chakra, useToast } from '@chakra-ui/react';
import { AuthError } from '@supabase/supabase-js';
import React, { useState } from 'react';
import { FaLock, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthService } from '../../services/auth-service';

interface SignInContainerProps {
  authService: AuthService;
}

export const SignInContainer: React.FC<SignInContainerProps> = ({ authService }) => {

  const navigate = useNavigate();
  const toast = useToast();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignInError = (authError: AuthError) =>
    toast({
      title: 'Failed to sign in...',
      status: 'error',
      description: authError.message,
      isClosable: true
    })

  const handleSignInSuccess = () => navigate('/')

  const handleSignInFormSubmit = () =>
    authService.signInWithPassword({ email: email, password: password }, handleSignInSuccess, handleSignInError);

  const CFaUserAlt = chakra(FaUserAlt);
  const CFaLock = chakra(FaLock);

  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSignInFormSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="email address"
                    onChange={event => setEmail(event.currentTarget.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={event => setPassword(event.currentTarget.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <IconButton aria-label='show-password-toggle' h="1.75rem" size="sm" onClick={handleToggleShowPassword} icon={showPassword ? <ViewIcon /> : <ViewOffIcon />} >
                    </IconButton>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link to='/forgot-my-password'>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box >
      </Stack >
      <Box>
        New to us?{' '}
        <Link color="teal.500" to='/sign-up'>
          Sign Up
        </Link>
      </Box>
    </Flex >
  )
};
