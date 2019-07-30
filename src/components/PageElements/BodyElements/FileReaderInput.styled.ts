import styled from 'styled-components';

export const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const FileLabel = styled.label`
  display: block;
  padding: 0.5rem;
  background-color: lightblue;
  border: 1px solid blue;
  border-radius: 3px;
  cursor: pointer;
`;
