const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const PORT = 8000;
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
}) 
const io = require('socket.io')(server);   
let Count =0
io.on('connection', function (socket) { //2
    io.emit('show', {Count:Count})
    socket.on('click',function(){
        Count+=1;
        console.log(Count)
        socket.emit('show',{Count:Count})
        
  });
    socket.on('reset',function(){
        Count =0
        socket.emit('show',{Count:Count})
    })
});
require("./server/config/routes")(app);