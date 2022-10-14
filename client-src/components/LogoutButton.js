import { createElement as h, useCallback } from 'react'
import Button from '@mui/material/Button'
import { useLogout } from '../hooks/auth'

export default function LogoutButton({
  component = Button,
  children,
  ...props
}){
  const logout = useLogout()
  const onClick = useCallback(
    () => { logout.call() },
    [logout.call]
  )
  console.log('\n\n\n LogoutButton render !!!! \n\n\n')
  return h(
    component,
    { ...props, onClick },
    children || 'logout'
  )
}
