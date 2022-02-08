# Noom

Zoom Clone using NodeJS, WebRTC and Websockets

# 0.2

npm init -y
- package.json 생성

npm i nodemon -d // 변경이 있을때 재시작 해주는 역할

babel.config.json 파일 생성 // babel은 작성한 코드를 일반 NodeJS코드로 컴파일 해줌

nodemon.json 파일 생성

src폴더 밑에 server.js 파일 생성
// 백엔드에서 구동될 js파일 <-> app.js (프론트에서 구동)

git init .

npm i @babel/core @babel/cli @babel/node -d

touch .gitignore

-----------------------
nodemon.json에
{
    "exec": "babel-node src/server.js" // nodemon이 실행할 내용
}
입력

src/server.js를 babel-node 명령문 실행

----------------------
npm i @babel/preset-env -d

babel.config.json에
{
    "presets": ["@babel/preset-env"]
}
입력

--------------------
package.json에
"scripts":{
    "dev" : "nodemon"
  },
추가

dev는 nodemon 호출 -> nodemon은 nodemon.json을 실행 -> babel-node src/server.js를 실행

-------------------
npm i express -s
npm i pug -s

-------------------
server.js에

import express from "express";

const app = express();

const handleListen = () => console.log('Listening on http://localhost:3000');

app.listen(3000, handleListen);

입력

------------------------
npm run dev 입력
-> package.json에 있는 dev 실행

# 0.3

scr폴더 밑에 public/js/app.js

------------------------
* pug 연동
server.js에
app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
입력

----------------------------
* route 만들기
server.js에 
app.get("/", (req,res) => res.render("home"))
입력

-------------------------------
* /public/js/app.js static 작업

home.pug에
script(src="/public/js/app.js");
추가

server.js 상단에
import path from 'path';
const __dirname = path.resolve(); 추가

app.use("/public", express.static(__dirname + "/src/public"));
추가

=> app.js 연결됨

------------------------------------
* 사용자에게 보여지는 app.js 수정시 서버 재시작 막기
=> views 랑 server.js가 수정 될때만 nodemon이 재실행 되도록 설정

nodemon.json에 가서
"ignore": ["src/public/*"], 추가해주기
scr/public 폴더에 있는 모든거 무시함

=> node run dev로 재시작

--------------------------
* css를 개선해주는 MVP CSS

home.pug에
link(rel="stylesheet", href="https://unpkg.com/mvp.css")
추가

