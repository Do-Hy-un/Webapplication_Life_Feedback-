const express= require('express');
const app= express();
const fs= require('fs');
const pug=require('pug');
const _=require('underscore');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views','./views');
app.set('view engine','pug');
app.locals.pretty=true;

app.listen(3000, function(){
  console.log('Success!')
})
app.get('/CYT', function(req, res){
  res.render('startpage');
})
app.get('/CYT/input', function(req,res){//check your time의 약자
  res.render('Timeinput');
})
app.post('/CYT/input', function(req,res){//파일 저장 시스템
 var date= req.body.date;
 var sleep=req.body.sleep;
 var eat=req.body.eat;
 var selfdevelopment=req.body.selfdevelopment;
 var hobby=req.body.hobby;
 var rest=req.body.rest;
 var human_relationship=req.body.human_relationship;
 var exercise=req.body.exercise;
 fs.writeFile('data/'+date+'_sleep', sleep, function(err){
   if(err){
    console.log(err);
  res.status(500).send('Internal Server Error');
}})
 fs.writeFile('data/'+date+'_eat', eat, function(err){
   if(err){
    console.log(err);
  res.status(500).send('Internal Server Error');
}})
 fs.writeFile('data/'+date+'_selfdevelopment', selfdevelopment, function(err){
   if(err){
    console.log(err);
  res.status(500).send('Internal Server Error');
}})
 fs.writeFile('data/'+date+'_hobby', hobby, function(err){
   if(err){
    console.log(err);
  res.status(500).send('Internal Server Error');
}})
 fs.writeFile('data/'+date+'_rest', rest,  function(err){
   if(err){
    console.log(err);
  res.status(500).send('Internal Server Error');
}})
 fs.writeFile('data/'+date+'_human_relationship', human_relationship, function(err){
   if(err){
    console.log(err);
  res.status(500).send('Internal Server Error');
}})
 fs.writeFile('data/'+date+'_exercise', exercise, function(err){
   if(err){
    console.log(err);
  res.status(500).send('Internal Server Error');
}
  res.redirect('/CYT/input');
 })
})

var Result_sleep = 0;
var Result_eat = 0;
var Result_selfdevelopment = 0;
var Result_hobby = 0;
var Result_rest = 0;
var Result_human_relationship = 0;
var Result_exercise = 0;

function userseval_sleep(P1, P2){
  var Sum_sleep = 0;
  var Result_sleep_lo = 0;
  var Num = 0;
  for(var Num= 0; Num < P2 ; P1--){
  if(fs.existsSync('data/'+ P1 +'_sleep')){
  var data =fs.readFileSync('data/'+ P1 +'_sleep',{encoding:'utf8', flag:'r'});
}
else{
  console.log('data/'+ P1 +'_sleep의 정보가 없습니다!');
}
  if(data){
    Num++;
    Sum_sleep=Sum_sleep + Number(data);
  }
}
  var Result_sleep_lo = (Sum_sleep/P2);
  return Result_sleep_lo;
}
function userseval_eat(P1, P2){
  var Sum_eat = 0;
  var Result_eat_lo = 0;
  var Num = 0;
  for(var Num= 0; Num < P2 ; P1--){
  if(fs.existsSync('data/'+ P1 +'_eat')){
  var data =fs.readFileSync('data/'+ P1 +'_eat',{encoding:'utf8', flag:'r'});
}
else{
  console.log('data/'+ P1 +'_eat의 정보가 없습니다!');
}
  if(data){
    Num++;
    Sum_eat=Sum_eat + Number(data);
  }
}
  var Result_eat_lo = (Sum_eat/P2);
  return Result_eat_lo;
}
function userseval_selfdevelopment(P1, P2){
  var Sum_selfdevelopment = 0;
  var Result_selfdevelopment_lo = 0;
  var Num = 0;
  for(var Num= 0; Num < P2 ; P1--){
  if(fs.existsSync('data/'+ P1 +'_selfdevelopment')){
  var data =fs.readFileSync('data/'+ P1 +'_selfdevelopment',{encoding:'utf8', flag:'r'});
}
else{
  console.log('data/'+ P1 +'_selfdevelopment의 정보가 없습니다!');
}
  if(data){
    Num++;
    Sum_selfdevelopment=Sum_selfdevelopment + Number(data);
  }
}
  var Result_selfdevelopment_lo = (Sum_selfdevelopment/P2);
  return Result_selfdevelopment_lo;
}
function userseval_hobby(P1, P2){
  var Sum_hobby = 0;
  var Result_hobby_lo = 0;
  var Num = 0;
  for(var Num= 0; Num < P2 ; P1--){
  if(fs.existsSync('data/'+ P1 +'_hobby')){
  var data =fs.readFileSync('data/'+ P1 +'_hobby',{encoding:'utf8', flag:'r'});
}
else{
  console.log('data/'+ P1 +'_hobby의 정보가 없습니다!');
}
  if(data){
    Num++;
    Sum_hobby=Sum_hobby + Number(data);
  }
}
  var Result_hobby_lo = (Sum_hobby/P2);
  return Result_hobby_lo;
}
function userseval_rest(P1, P2){
  var Sum_rest = 0;
  var Result_rest_lo = 0;
  var Num = 0;
  for(var Num= 0; Num < P2 ; P1--){
  if(fs.existsSync('data/'+ P1 +'_rest')){
  var data =fs.readFileSync('data/'+ P1 +'_rest',{encoding:'utf8', flag:'r'});
}
else{
  console.log('data/'+ P1 +'_rest의 정보가 없습니다!');
}
  if(data){
    Num++;
    Sum_rest=Sum_rest + Number(data);
  }
}
  var Result_rest_lo = (Sum_rest/P2);
  return Result_rest_lo;
}
function userseval_human_relationship(P1, P2){
  var Sum_human_relationship = 0;
  var Result_human_relationship_lo = 0;
  var Num = 0;
  for(var Num= 0; Num < P2 ; P1--){
  if(fs.existsSync('data/'+ P1 +'_human_relationship')){
  var data =fs.readFileSync('data/'+ P1 +'_human_relationship',{encoding:'utf8', flag:'r'});
}
else{
  console.log('data/'+ P1 +'_human_relationship의 정보가 없습니다!');
}
  if(data){
    Num++;
    Sum_human_relationship=Sum_human_relationship + Number(data);
  }
}
  var Result_human_relationship_lo = (Sum_human_relationship/P2);
  return Result_human_relationship_lo;
}
function userseval_exercise(P1, P2){
  var Sum_exercise = 0;
  var Result_exercise_lo = 0;
  var Num = 0;
  for(var Num= 0; Num < P2 ; P1--){
  if(fs.existsSync('data/'+ P1 +'_exercise')){
  var data =fs.readFileSync('data/'+ P1 +'_exercise',{encoding:'utf8', flag:'r'});
}
else{
  console.log('data/'+ P1 +'_exercise의 정보가 없습니다!');
}
  if(data){
    Num++;
    Sum_exercise=Sum_exercise + Number(data);
  }
}
  var Result_exercise_lo = (Sum_exercise/P2);
  return Result_exercise_lo;
}

app.post('/CYT/eval', function(req,res){//파일 저장 시스템
 var P1= req.body.P1; //언제부터 파일을 읽어들일지
 var P2= req.body.P2; //얼마나 파일을 읽어들일지
 Result_sleep = userseval_sleep(P1, P2);
 Result_eat = userseval_eat(P1, P2);
 Result_selfdevelopment = userseval_selfdevelopment(P1, P2);
 Result_hobby = userseval_hobby(P1, P2);
 Result_rest = userseval_rest(P1, P2);
 Result_human_relationship = userseval_human_relationship(P1, P2);
 Result_exercise = userseval_exercise(P1, P2);
 res.redirect('/CYT/eval');
 })

app.get('/CYT/eval', function(req,res){//check your time의 약자
  res.render('evaluation', {Result_sleep: Result_sleep,Result_eat: Result_eat,Result_selfdevelopment: Result_selfdevelopment,Result_hobby: Result_hobby,Result_rest: Result_rest,Result_human_relationship: Result_human_relationship,Result_exercise: Result_exercise });
})

// console.log(fs.readFile('/data/20221211_sleep','utf8',function(err,data){
//   if(err){
//     console.log(err);
//   }}))
