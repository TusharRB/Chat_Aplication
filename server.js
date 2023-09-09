// import express server
// import from node module
const express = require('express');

const SocketIO = require('socket.io');

const http = require('http');



// these are extracting things from above imports
// const app = express(); // getting app from express function
const expressServer = express(); // getting app from express function

const { Server } = SocketIO; // Socket is a big Object 
// socketIO gives me a server class
// this 'Server class' takes an http server and gives me an IO
// as the server that i am getting from express() is not proper http



// create a new server out of app with the help of http
// const httpServer = http.createServer(app);
const httpServer = http.createServer(expressServer);

const IO = new Server(httpServer);

// i want to create IO that's combination of app and Server



// i need IO from 'SocketIO' // because it's server
// SocketIO -> server of it's own -> IO


// server of my own  ->  app

// 1st server is app
// 2nd server is SocketIO

// app and server given by SocketIO


// PORT
const PORT = 3333;


// Middleware to run my client
// app.use(express.static('client'));

expressServer.use(express.static('client'));


// function onStartFn(){

//     // console.log('server is running');
// }


// this on start function
function started(){
    console.log(`server has been started on http://localhost:${PORT}`)
}

// node server.js


// function handleSendHtml(request,response){

//     // response.sendFile(__dirname + '/index.html');

//     response.send('html will be send by middleware');
// }

// app.get('/',handleSendHtml);


// my server should listen me on this PORT and run
// onStartFn just to confirm if my server is running


// app.listen(PORT,started)
// server.listen(PORT,started);




// app and server given by SocketIO
// i need to combine app and server

// i want to create IO that's combination of app and Server

// i need to extract IO out of SocketIO



httpServer.listen(PORT,started);

IO.on('connection',(socket) =>{

    console.log('connection  established',socket.id);

    // 'chat message' is my defined event
    // you can use any syntax here

    // 1st step in script.js
    // this is step 2

    socket.on('chat message',(data) => {

        // i got data in my socket from client

        // this is my step 3

        IO.emit('chat message',data);
    })

    socket.on('disconnect',()=>{

        console.log(socket.id,'left the chat');
    })
})

// .on is event syntax for IO and Sockets
// UI PART ///-----Server Part-----/// UI PART
// client A ->  socket A -> IO -> socket B -> client B


// app  => Express Server
// httpServer   =>  app server modified into httpServer
// app server is now httpServer  