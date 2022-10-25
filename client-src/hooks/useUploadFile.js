import useAsync from './useAsync.js'

export function useUploadFile(config){
  return useAsync(uploadFile, config)
}
