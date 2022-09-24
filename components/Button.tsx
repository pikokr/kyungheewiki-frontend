import styled from '@emotion/styled'

export const Button = styled.button`
  padding: 4px 8px;
  border: none;
  &:focus {
    outline: none;
  }
  background: #fff;

  transition: all ease 0.2s;

  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
`
