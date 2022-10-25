export async function uploadFile(file){
  const MAX_FILE_SIZE = (uploadFile.MAX_FILE_SIZE_IN_MB || 200) * 1000000
  if (!file) throw new Error(`file is required`)
  if (file.size > MAX_FILE_SIZE)
    throw new Error(
      `"${file.name}" is too big. Please select a file smaller ` +
      `than ${uploadFile.MAX_FILE_SIZE_IN_MB}mb.`
    )
  const formData = new FormData()
  formData.append('file', file)
  const response = await fetch(
    `/api/uploads`,
    {method: 'POST', body: formData}
  )
  if (!response.ok){
    throw new Error(`file upload failed ${response.statusCode}`)
  }
  const { error, url } = await response.json()
  if (error) throw new Error(error)
  return url
}
uploadFile.MAX_FILE_SIZE_IN_MB = 200