const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("WAIT 3 MINUTES TO SEE YOUR NUKE")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("Exaults Community")});
}
module.exports = keepAlive