import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RedirectPage({ to }) {
  const navigate = useNavigate()
  useEffect(() => { navigate(to) }, [])
  console.log('RedirectPage to', to)
  return null
}
