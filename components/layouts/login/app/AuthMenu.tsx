import { css } from '@emotion/react'
import { Menu } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

import { useCurrentUser, useLogout } from '../../../../utils/auth'
import { DropdownContent } from '../../../DropdownContent'
import { DropdownItem } from '../../../DropdownItem'
import { AppHeaderButton } from './AppHeaderButton'

export const AuthMenu: React.FC = () => {
  const user = useCurrentUser()!

  const logout = useLogout()

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
              // @ts-ignore
              <DropdownContent
                static
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                css={css`
                  width: 180px;
                `}
              >
                <div
                  css={css`
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                    padding: 4px 8px;
                  `}
                >
                  <div
                    css={css`
                      font-size: 18px;
                    `}
                  >
                    {user.name}
                  </div>
                  <div
                    css={css`
                      color: rgba(0, 0, 0, 0.6);
                      font-size: 14px;
                    `}
                  >
                    <span>{user.class.grade}</span>학년 <span>{user.class.classNum}</span>반{' '}
                    <span>{user.classNum}</span>번
                  </div>
                </div>
                {
                  // @ts-ignore
                  <Menu.Item>
                    {({ active, disabled }) => (
                      <DropdownItem onClick={logout} disabled={disabled} active={active}>
                        로그아웃
                      </DropdownItem>
                    )}
                  </Menu.Item>
                }
              </DropdownContent>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  )
}
