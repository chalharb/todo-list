import React from 'react';
import { StyledHorizontalNav } from './styled';

interface Props {
  children: React.ReactNode;
}

const HorizontalNav: React.FC<Props> = ({
  children,
}) => {
  return (
    <StyledHorizontalNav>
      {children}
    </StyledHorizontalNav>
  )
}

export default HorizontalNav;
