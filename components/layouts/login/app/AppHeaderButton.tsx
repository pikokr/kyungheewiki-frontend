import styled from '@emotion/styled'

export const AppHeaderButton = styled.button`
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: rgba(0, 0, 0, 0.2);
  }

  background: #0000;
  border: none;

  &:focus {
    outline: none;
  }

  cursor: pointer;
  user-select: none;
  padding: 2px 6px;
  border-radius: 4px;

  transition: all ease 0.2s;
`
