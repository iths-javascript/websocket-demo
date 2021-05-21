const WebSocket = require('ws')

const server = new WebSocket.Server({port: 9000})

server.on('connection', function(ws){
  console.log("Connection established!")
  ws.send("From server: Connected!")


  ws.on('message', function(data){
    console.log("Recieved: ", data)
  })
  // setInterval(() => {
  //   ws.send("Yo fool!")
  // }, 1000)

  ws.on('close', function(closeCode){
    console.log("Client disconnected...")
  })
})