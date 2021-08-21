import React from 'react';
import { StyledPill, StyledPillActive } from './styled';

interface Props {
  text: String;
  active?: Boolean;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pill: React.FC<Props> = ({
  text,
  active = false,
  onClick,
}) => {

  return active ?
    (
      <StyledPillActive onClick={onClick}>
        {text}
      </StyledPillActive>
    ) :
    (
      <StyledPill onClick={onClick}>
        {text}
      </StyledPill>
    );
}

export default Pill;
