export async function jsonHandler(resquest, response) {
  const buffers = []

  for await (const chunk of resquest) {
    buffers.push(chunk)
  }

  try {
    resquest.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    response.body = null
  }

  response.setHeader('Content-Type', 'application/json')
}