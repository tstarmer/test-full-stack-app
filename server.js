import config from "./config";
import express from "express";
import apiRouter from "./api"
// import fs from "fs";
const server = express();

server.get('/', (req, res)=>{
	res.send("hello worlds")
})

server.use("/api", apiRouter)
server.use(express.static('public'));//needs extension in route

// server.get("/about", (req,res)=>{
// 	fs.readFile("./about.html", (err,data)=>{
// 		res.send(data.toString());
// 	})
	
// })

server.listen(config.port, ()=>{
	console.info('Express is listening on port', config.port)
})