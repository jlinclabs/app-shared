import { useCallback, useEffect } from 'react'
import { useQuery, useCommand } from './cqrpc'

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
  //     if (redirectToIfFound && currentUser){
  //       navigate(redirectToIfFound)
  //     }else if (redirectToIfNotFound && !currentUser){
  //       navigate(redirectToIfNotFound)
  //     }
  //   },
  //   [
  //     navigate,
  //     loading,
  //     currentUser,
  //     redirectToIfFound,
  //     redirectToIfNotFound
  //   ]
  // )
}

export function useRedirectIfNotLoggedIn(){

}

export function useCommandAndReloadCurrentUser(action, callbacks = {}){
  const { mutate } = useCurrentUser()
  return useCommand(action, {
    ...callbacks,
    onSuccess(currentUser){
      mutate(currentUser)
      if (callbacks.onSuccess) callbacks.onSuccess(currentUser)
    },
  })
}

export const useLogin = callbacks =>
  useCommandAndReloadCurrentUser('auth.login', callbacks)

export const useLogout = callbacks =>
  useCommandAndReloadCurrentUser('auth.logout', callbacks)

export const useSignup = callbacks =>
  useCommandAndReloadCurrentUser('auth.signup', callbacks)

