 const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize",resize);

let stars=[];

for(let i=0;i<150;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.4
});
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(star=>{

ctx.fillRect(star.x,star.y,star.size,star.size);

star.y+=star.speed;

if(star.y>canvas.height){
star.y=0;
star.x=Math.random()*canvas.width;
}

});

requestAnimationFrame(draw);
}

draw();