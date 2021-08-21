import React from 'react';
import {
  StyledHorizontalNavItem,
} from './styled';

interface Props {
  children: React.ReactNode;
}

const HorizontalNavItem: React.FC<Props> = ({
  children,
}) => {
  return (
    <StyledHorizontalNavItem>
      {children}
    </StyledHorizontalNavItem>
  )
}

export default HorizontalNavItem;
