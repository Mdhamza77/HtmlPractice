
const webserver=require('ws')

let server=new webserver.Server({port:3000})

server.on('connection',connection=>{
    connection.on('message',ev=>{
        console.log(ev.toString());
        console.log(ev)
        connection.send('hAPPY')
    })
})
