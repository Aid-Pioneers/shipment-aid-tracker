import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Flex, FormControl, Heading, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Stack, chakra } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaLock, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { SignUpWithPasswordData } from '../../../services/auth-service';

interface SignUpComponentProps {
    signUp: (data: SignUpWithPasswordData) => void;
}

export const SignUpComponent: React.FC<SignUpComponentProps> = ({ signUp }) => {

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = () =>
        signUp({ firstName: firstName, lastName: lastName, email: email, password: password });

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
                    <form onSubmit={handleSubmit}>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input
                                        type="text"
                                        placeholder="first name"
                                        onChange={event => setFirstName(event.currentTarget.value)} />
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
                                <InputGroup>
                                    <Input
                                        type="text"
                                        placeholder="last name"
                                        onChange={event => setLastName(event.currentTarget.value)} />
                                </InputGroup>
                            </FormControl>
                            <FormControl isRequired>
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
                            <FormControl isRequired>
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
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Sign up
                            </Button>
                        </Stack>
                    </form>
                </Box >
            </Stack >
            <Box>
                Already have an account?{' '}
                <Link color="teal.500" to='/sign-in'>
                    Sign In
                </Link>
            </Box>
        </Flex >
    )
};
