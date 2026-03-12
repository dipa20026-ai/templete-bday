/* ---------- START MUSIC AFTER USER CLICK ---------- */

window.addEventListener("load", function(){

let music = document.getElementById("bgMusic");

function startMusic(){
music.play().catch(()=>{});
document.removeEventListener("click", startMusic);
}

document.addEventListener("click", startMusic);

});

/* ---------- TYPING BIRTHDAY MESSAGE ---------- */

let message = "Happy Birthday Chiks ❤️ I hope your day is full of love, joy, and happiness. You make life brighter every day!";

let i = 0;

function typeLetter(){

if(i < message.length){

document.getElementById("letter").innerHTML += message.charAt(i);

i++;

setTimeout(typeLetter,50);

}

}

typeLetter();

/* ---------- OPEN GIFT ---------- */

function openGift(){

document.getElementById("giftBox").classList.remove("hidden");

}

/* ---------- TAP GIFT ---------- */

document.getElementById("giftBox").onclick=function(){

this.classList.add("hidden");

document.getElementById("surprise").classList.remove("hidden");

};

/* ---------- BLOW CANDLE ---------- */

function blowCandle(){

document.querySelector(".candle").style.display="none";

alert("Make a wish! 🎉");

/* open video page */
window.location.href = "video.html";

}

/*---------- OPEN VIDEO ---------- */



/*function openVideo(){

let videoBox = document.getElementById("videoBox");
let video = document.getElementById("birthdayVideo");
let music = document.getElementById("bgMusic");

/* stop background music completely */
/*music.pause();
music.currentTime = 0;

/* show video */
/*videoBox.style.display = "block";

/* play video */
/*video.currentTime = 0;
video.play();

}
/* ---------- HEART EXPLOSION ---------- */

document.addEventListener("click",function(e){

let heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "💖";

heart.style.left = e.pageX + "px";

heart.style.top = e.pageY + "px";

document.body.appendChild(heart);

setTimeout(function(){
heart.remove();
},2000);

});

/* ---------- FIREWORKS ---------- */

function fireworks(){

for(let i=0;i<25;i++){

let spark = document.createElement("div");

spark.className = "spark";

spark.style.left = Math.random()*window.innerWidth + "px";

spark.style.top = Math.random()*window.innerHeight + "px";

document.body.appendChild(spark);

setTimeout(function(){
spark.remove();
},1000);

}

}

function openVideo(){

let videoBox = document.getElementById("videoBox");
let video = document.getElementById("birthdayVideo");
let music = document.getElementById("bgMusic");

/* stop background music */
if(music){
music.pause();
}

/* show video */
videoBox.style.display = "block";

/* play video */
video.play();

/* start background music again when video ends */
video.onended = function(){
if(music){
music.play();
}
};

}