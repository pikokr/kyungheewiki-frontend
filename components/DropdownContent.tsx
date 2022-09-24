import styled from '@emotion/styled'
import { Menu } from '@headlessui/react'

export const DropdownContent = styled(Menu.Items)`
  position: absolute;
  top: 24px;
  right: 0;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  overflow: hidden;
` as typeof Menu['Items']
