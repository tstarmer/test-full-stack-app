import config from "./config";
import apiRouter from "./api";

import express from "express";
const server = express();

server.set("view engine", "ejs");

server.get('/', (req, res)=>{
	res.render('index', {
		content:"App loading!"
	} )
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