process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
import express from 'express'

const TEST_SERVERS = JSON.parse(process.env.TEST_SERVERS)

const checkedOut = new Set
function checkoutServer(){
  const host = Object.keys(TEST_SERVERS).find(host => !checkedOut.has(host))
  if (!host) throw new Error(`all servers are checked out`)
  checkedOut.add(host)
  function returnServer() {
    checkedOut.delete(host)
  }
  const port = TEST_SERVERS[host]
  return { host, port, returnServer }
}
export async function createHTTPSServer(){
  const { host, port, returnServer } = checkoutServer()
  const server = express()
  server.host = host
  server.port = port
  await new Promise(resolve => {
    server.httpServer = server.listen(port, () => {
      resolve()
    })
  })
  server.close = function(){
    server.httpServer.close()
    returnServer()
  }
  return server
}