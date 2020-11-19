let express=require('express')

let app =express()

let socket=require('socket.io')
let path=require('path')

let http=require('http')

let server=http.createServer(app)

app.use('/',express.static(path.join(__dirname,'front-end')))

let io=socket(server)

io.on('connection',(socket)=>{
    socket.emit('connected',()=>{
    })
    socket.on('send_msg',(data)=>{
        socket.broadcast.emit('rcd_msg',data)
    })
})

server.listen(3333,()=>{
    console.log("Server started at   http://localhost:3000")
})