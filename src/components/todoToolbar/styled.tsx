import styled from 'styled-components';

const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0 20px;
`;

const StyledTodoCount = styled.div`
  color: #8a9ca5;
  font-size: 14px;
`;

export {
  StyledToolbar,
  StyledTodoCount,
}
