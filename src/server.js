import express from "express";
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.set("view engine", "pug"); // 템플릿 엔진 설정
app.set("views", __dirname + "/src/views"); // 템플릿 위치 설정
app.use("/public", express.static(__dirname + "/src/public"));
app.get('/', (req,res) => res.render('home'));

const handelListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handelListen);