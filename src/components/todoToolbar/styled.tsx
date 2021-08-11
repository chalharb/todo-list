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

const StyledFiltersWrapper = styled.div`
  border: 0;
  padding: 3px 8px;
  background: 0;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  font-family: var(--font);
  color: #8a9ca5;
  border-radius: 20px;
`;

const StyledFilter = styled.button`
  border: 0;
  padding: 3px 8px;
  background: 0;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  font-family: var(--font);
  color: #8a9ca5;
  border-radius: 20px;
`;

const StyledFilterActive = styled(StyledFilter)`
  background-color: #7996a5;
  color: #fff;
`;

export {
  StyledToolbar,
  StyledTodoCount,
  StyledFiltersWrapper,
  StyledFilterActive,
  StyledFilter,
}
