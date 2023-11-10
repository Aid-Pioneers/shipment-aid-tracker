import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 800px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const FormItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
