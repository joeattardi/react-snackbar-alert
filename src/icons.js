import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  fill: currentColor;
  width: 12px;
  height: 12px;
`;

export function CloseIcon() {
  return (
    <Svg viewBox="0 0 8 8">
      <path d="M1.41 0l-1.41 1.41.72.72 1.78 1.81-1.78 1.78-.72.69 1.41 1.44.72-.72 1.81-1.81 1.78 1.81.69.72 1.44-1.44-.72-.69-1.81-1.78 1.81-1.81.72-.72-1.44-1.41-.69.72-1.78 1.78-1.81-1.78-.72-.72z" />
    </Svg>
  );
}
