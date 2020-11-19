let socket=io()

socket.on('connected',()=>{
    console.log("Connnected yees")
})
let user=''

$(()=>{
let msglist=$('#msglist')

let message=$('#message')
let logindiv=$('#logindiv')

let chatdiv=$('#chatdiv')

let loginbtn=$('#login_btn')

let sendbtn=$ ('#sendbtn')
let username=$('#username')

loginbtn.click(()=>{
    logindiv.hide()
    chatdiv.show()
    user=username.val()
    
})

sendbtn.click(()=>{
    socket.emit('send_msg',{
        user:user,
        message:message.val()

    })

})

socket.on('rcd_msg',(data)=>{
    msglist.append($('<li>'+'<b>'+'['+data.user+']'+'</b>'+' : '+data.message+'</li>'))
})
})


