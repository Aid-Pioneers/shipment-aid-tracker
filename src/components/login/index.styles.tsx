import styled from 'styled-components';

export const LoginFormWrapper = styled.form`
  background-color: #f1f1f1;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > fieldset {
    width: 80%;
    margin: 0 auto;
  }
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 1rem;
`;

export const LoginFormButton = styled.button`
  width: 80%;
  background-color: #fed330;
  border-color: #fed330;
  border: 1px solid #fed330;
  display: block;
  width: 30%;
  font-size: 12px;
  margin: 0 auto;

  font-weight: 400;
  line-height: 1.5;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  user-select: none;
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
`;

// TODO: forget password button
export const ForgotPassword = styled.button`
  display: flex;
  font-size: 16px;
  justify-content: center;
`;

export const LoginText = styled.label`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;
