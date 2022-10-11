import * as React from 'react'
import Button from '@mui/material/Button'
import { useLogout } from '../hooks/auth'

export default function LogoutButton({ children, ...props }){
  const logout = useLogout()
  const onClick = React.useCallback(() => { logout.call() }, [logout.call])
  return <Button {...{...props, onClick }}>{children || 'logout'}</Button>
}
