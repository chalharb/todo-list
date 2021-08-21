import styled from 'styled-components';

const StyledPill = styled.button`
  border: 0;
  padding: 4px 10px;
  background: 0;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  font-family: var(--font);
  color: #8a9ca5;
  border-radius: 20px;

  &:focus,
  &:hover {
    color: #546066;
    transition: color 0.2s ease;
    text-decoration: underline;
  }
`;

const StyledPillActive = styled(StyledPill)`
  background-color: #7996a5;
  color: #fff;

  &:focus,
  &:hover {
    background-color: #546066;
    color: #fff;
    transition: background-color 0.2s ease;
    text-decoration: underline;
  }
`;

export {
  StyledPill,
  StyledPillActive
}
