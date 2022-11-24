
const webserver=require('ws')

let server=new webserver.Server({port:3000})

server.on('connection',connection=>{
    connection.on('message',ev=>{
        console.log(ev.toString());
        console.log(ev)
        connection.send('hAPPY')
    })
    
    server.on('connection',connection=>{
        connection.on('message',ec=>{
            console.log(ec.toString())
        
            connection.send("My name is John");
        })
    })
   
})
