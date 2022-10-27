// Command. Query. Remote. Procedure. Call
import { useEffect, useCallback } from 'react'
import useSWR from 'swr'
import useAsync from './useAsync'
import wait from '../../shared/wait.js'

export async function fetchQuery(name, options = {}){
  const json = JSON.stringify(options)
  const params = json === '{}' ? '' :
    '?' + new URLSearchParams({ o: json })
  return await apiFetch('GET', `/api/${name}${params}`)
}

export async function fetchCommand(name, options){
  return await apiFetch('POST', `/api/${name}`, options)
}
/**/
global.cqrpc = {
  query: fetchQuery,
  command: fetchCommand,
}

async function apiFetch(method, path, body, tries = 0){
  const res = await fetch(path, {
    method,
    headers: {
      'Accepts': 'application/json',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (res.status === 502){
    throw new Error(`API server looks down or you're offline`)
  }
  if (res.status === 504 && tries < 5) {
    await wait(500)
    return apiFetch(method, path, body, tries + 1)
  }
  const { result, error } = await res.json()
  if (error) throw new Error(error.message)
  return result || null
}

export function useQuery(name, options = {}, config){
  const swrKey = name ? [name, options] : null
  const { data: result, error, mutate } = useSWR(swrKey, {
    ...config,
    fetcher: fetchQuery,
  })
  const loading = typeof result === 'undefined' && !error
  const reload = useCallback(() => { mutate() }, [mutate])
  return { result, loading, error, mutate, reload }
}

export function useCommand(name, config){
  return useAsync(
    options => fetchCommand(name, options),
    config
  )
}

export function useCommandOnMount(name, options, config){
  const command = useCommand(name, config)
  useEffect(
    () => { if (command.idle) command.call(options) },
    [name, options]
  )
  return command
}
