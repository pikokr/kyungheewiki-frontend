import styled from '@emotion/styled'

export const DropdownItem = styled.div<{ active: boolean; disabled: boolean }>`
  padding: 6px 12px;
  cursor: pointer;
  transition: all ease 0.2s;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
`
