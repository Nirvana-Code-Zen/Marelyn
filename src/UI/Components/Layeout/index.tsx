import { ChildrenPropType } from '~UI/shared/types/childrenPropType'

import { Menu } from '../Menu'

export const Layeout = ({ children }: ChildrenPropType) => {
  return (
    <>
      <Menu>
        {children}
      </Menu>
    </>
  )
}