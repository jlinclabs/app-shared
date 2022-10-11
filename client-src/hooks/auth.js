import { useCallback, useEffect } from 'react'
import { useQuery } from './cqrpc'

export function useCurrentUser(){
  const { result: currentUser, loading, error, mutate } = useQuery('auth.getCurrentUser')
  const reload = useCallback(() => { mutate() }, [mutate])
  return { currentUser, loading, error, mutate, reload }
}

export function useLoggedIn(){
  return {}
}

export function useRedirectIfLoggedIn(){
  // const navigate = useNavigate()
  // useEffect(
  //   () => {
  //     if (loading) return
  //     if (redirectToIfFound && currentAgent){
  //       navigate(redirectToIfFound)
  //     }else if (redirectToIfNotFound && !currentAgent){
  //       navigate(redirectToIfNotFound)
  //     }
  //   },
  //   [
  //     navigate,
  //     loading,
  //     currentAgent,
  //     redirectToIfFound,
  //     redirectToIfNotFound
  //   ]
  // )
}

export function useRedirectIfNotLoggedIn(){

}
