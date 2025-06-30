import http from 'node:http'

function listener(resquest, response) {
  
}

const server = http.createServer(listener).listen(3333)