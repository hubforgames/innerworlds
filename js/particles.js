const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let stars=[];

for(let i=0;i<120;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*0.15,
opacity:Math.random(),
twinkle:Math.random()*0.02
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(star=>{

star.y += star.speed;

star.opacity += star.twinkle;

if(star.opacity > 1 || star.opacity < 0){
star.twinkle *= -1;
}

if(star.y > canvas.height){
star.y = 0;
star.x = Math.random()*canvas.width;
}

ctx.fillStyle="rgba(255,255,255,"+star.opacity+")";

ctx.fillRect(star.x,star.y,star.size,star.size);

});

requestAnimationFrame(animate);

}

animate();