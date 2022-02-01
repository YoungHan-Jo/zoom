import http from "http";
import {WebSocketServer} from "ws";
import express from "express";
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.set("view engine", "pug"); // 템플릿 엔진 pug 설정
app.set("views", __dirname + "/src/views"); // views 가 어디에 있는지 경로 설정
app.use("/public", express.static(__dirname + "/src/public")); // public url로 유저에게 공개할 폴더 경로
app.get("/", (req,res) => res.render("home")) // home.pug를 render 해주는 route handler
app.get("/*", (req,res) => res.redirect("/")); // 어떤 url로 들어와도 홈으로 보내버리기

const handleListen = () => console.log('Listening on http://localhost:3000');

// app.listen(3000);
const server = http.createServer(app);
const wss = new WebSocketServer({server}); // http 서버 위에 ws 서버 만들기// 하나의 포트로 두개 다 가능

function handleConnection(socket){
    console.log(socket);
}

wss.on("connection",handleConnection);
server.listen(3000, handleListen);