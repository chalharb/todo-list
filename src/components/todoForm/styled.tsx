import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  margin-top: 10px;
`;

const StyledFormInput = styled.input`
  flex: 1;
  font-size: 16px;
  font-family: var(--font);
  padding: 10px 20px;
  border: 0;
  box-shadow: 0 -1px 0 #e2e4ea inset;
  color: #455963;

  &:focus {
    box-shadow: 0 -1px 0 #bdcdd6 inset;
  }
`;

const StyledFormButton = styled.button`
  display: none;
`;


export {
  StyledForm,
  StyledFormInput,
  StyledFormButton,
}
