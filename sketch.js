var R,G,B;
var ans , spr, backspr;
function setup() {
  createCanvas(800,800);
  R=createInput("R");
  R.style("width","200px");
  R.position(0,100);
  G=createInput("G");
  G.style("width","200px");
  G.position(200,100);
  B=createInput("B");
  B.style("width","200px");
  B.position(400,100);

  backspr = createSprite(300,300,80,80);

  spr = createSprite(300,300,50,50);
}

function draw() {
  background(0);
hexaDecimal();
}

function hexaDecimal(){

var r;
var g;
var b;

if(R.value() == "R"){
r = 0;
}

if(G.value() == "G"){
g = 0;
}

if(B.value() == "B"){
b = 0;
}

if(R.value() != "R" && R.value() <= 255 && R.value() >= -255){
r = R.value();
}

if(G.value() != "G" && G.value() <= 255 && G.value() >= -255){
g = G.value();
}

if(B.value() != "B" && B.value() <= 255 && B.value() >= -255){
b = B.value();
}

if(R.value() < -255 || R.value() > 255){
r = 255;
}

if(G.value() < -255 || G.value() > 255){
g = 255;
}

if(B.value() < -255 || B.value() > 255){
b = 255;
}

fill("#ffffff");



var val = dechex(r,g,b);
textSize(50);
text(val,200,200);
textSize(20);
text("output color:",250,250);
spr.shapeColor = val;
backspr.shapeColor="#ffffff";
drawSprites();
}

function dechex(r,g,b){
var ret;
var o,t,th,f,fi,s;
var ho,ht,hth,hf,hfi,hs;

///////////////////////////r
if(Math.sign(r) === 1){
o = Math.trunc(r/16);
t = dec(r/16)*16;
}

else if(Math.sign(r) === 0){
o = 0;
t = 0;
}

else if(Math.sign(r) === -1){
o = Math.trunc(Math.abs(r/16));
t = dec(Math.abs(r/16))*16;
}



ho = AtoF(o);
ht = AtoF(t);

//////////////////////////////g
if(Math.sign(g) === 1){
th = Math.trunc(g/16);
f = dec(g/16)*16;
}
  
else if(Math.sign(g) === 0){
th = 0;
f = 0;
}
  
else if(Math.sign(g) === -1){
th = Math.trunc(Math.abs(g/16));
f = dec(Math.abs(g/16))*16;
}
  
hth = AtoF(th);
hf = AtoF(f);

////////////////////////////////////b
if(Math.sign(b) === 1){
fi = Math.trunc(b/16);
s = dec(b/16)*16;
}
  
else if(Math.sign(b) === 0){
fi = 0;
s = 0;
}
  
else if(Math.sign(b) === -1){
fi = Math.trunc(Math.abs(b/16));
s = dec(Math.abs(b/16))*16;
}
  
hfi = AtoF(fi);
hs =  AtoF(s);


ret = AsembleHex(ho,ht,hth,hf,hfi,hs);
return ret;
}

function AsembleHex(o,t,th,f,fi,s){
var F2,S2,T2;
var ret;

F2=o+t;
S2=th+f;
T2=fi+s;

ret="#"+F2+S2+T2;

return ret;
}

function AtoF(value){
var ret
if(value<10){
ret=(value+"");
}
if(value===10){
ret="A";
}
if(value===11){
ret="B";
}
if(value===12){
ret="C";
}
if(value===13){
ret="D";
}
if(value===14){
ret="E";
}
if(value===15){
ret="F";
}
return ret;
}

function dec(x){
var ret;
var str;
var val;
var divval;


if(x-Math.floor(x) != 0){
str = (x+"").split(".")[1]
val = parseFloat((x+"").split(".")[1]);
divval = str.length;
ret = val/(1*10**divval);
}

else if(x-Math.floor(x) == 0){
ret = 0;
}

return ret;
}