import { css } from '@emotion/react'
import { Menu } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { useCurrentUser } from '../../../../utils/auth'
import { DropdownContent } from '../../../DropdownContent'
import { DropdownItem } from '../../../DropdownItem'
import { AppHeaderButton } from './AppHeaderButton'

export const AuthMenu: React.FC = () => {
  const user = useCurrentUser()!

  return (
    <Menu
      as="div"
      css={css`
        position: relative;
      `}
    >
      {({ open }) => (
        <>
          <AppHeaderButton as={Menu.Button}>{user.name}</AppHeaderButton>
          <AnimatePresence>
            {open && (
              <DropdownContent
                static
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu.Item>
                  {({ active, disabled }) => (
                    <DropdownItem disabled={disabled} active={active}>
                      로그아웃
                    </DropdownItem>
                  )}
                </Menu.Item>
              </DropdownContent>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  )
}
