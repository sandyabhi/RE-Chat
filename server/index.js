const express = require("express")
const socketio = require("socket.io")
const http = require("http")

const app = express()

const PORT = process.env.PORT || 5000

const router = require('./router')

const server = http.createServer(app)
const io = socketio(server)

socket.on('join', ({name , room}, callBack) => {
    console.log(name, room)

    const err =true
    if(err){
    callBack({err: 'error'})
    }
})

app.use(router)

server.listen(PORT, ()=> console.log(`listening to port ${PORT}`))

io.on('connection', (socket) => {console.log("A new connection!!")

socket.on('disconnect', () => {
    console.log("User left the room")
})
})