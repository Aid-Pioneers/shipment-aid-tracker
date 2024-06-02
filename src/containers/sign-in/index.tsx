import { useToast } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInWithPasswordComponent } from '../../components/sign-in/with-password';
import { AuthService, SignInWithPasswordData } from '../../services/auth-service';

interface SignInContainerProps {
  authService: AuthService;
}

export const SignInContainer: React.FC<SignInContainerProps> = ({ authService }) => {
  const navigate = useNavigate();
  const toast = useToast();

  async function signIn(signInData: SignInWithPasswordData) {
    const { error, data } = await authService.signInWithPassword(signInData);

    if (error) {
      toast({
        title: 'Failed to sign in...',
        status: 'error',
        description: error.message,
        isClosable: true,
      });
    } else {
      console.log(JSON.stringify(data));
      navigate('/shipments');
    }
  }

  return <SignInWithPasswordComponent signIn={signIn} />;
};
