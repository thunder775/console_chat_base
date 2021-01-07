const io = require("socket.io-client");
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

// write your code here
const endpoint = 'http://localhost:3000'

let username
let socket
rl.question("What is your name?", function (name) {
    username = name
    console.log("Successfully connected to a server");
    socket = io.io(endpoint);
    socket.on('simple chat message', function (data) {
        console.log((data));
    });
});


rl.addListener("line", (line) => {
    socket.emit("simple chat message", {
        message: `${username} says ${line}`,
    });
});

