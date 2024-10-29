// alert("НИКИТА ХУЙЛО");
// console.log("НИКИТА МОЙ ЛЮБИМЫЙ ЗАЙЧИК");

// let int = 123;
// let str = "123";
// let apple = {
//     color:"red", size:20, country:"Russia"
// };
// let fun = function (){

// };

// let arr = [int, str, apple, fun];

// function name(){

// };

let coins_text = document.querySelector(".coins p");
coins_text.innerHTML = "";
let hub = document.querySelector("header");

let play_but = document.querySelector("article .play");
let canvas = document.querySelector("#gameZone");
let context = canvas.getContext("2d");

let size = 60;
let player = {
    position: {x:0, y:hub.clientHeight },
    speed: size,
    img: new Image(),
    direction:"";
}

player.img.src = "assets/img/player/player.png";

play_but.addEventListener("click",function(){
    hideElement(play_but);
    coins_text.innerHTML = "228";
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    console.log(canvas);
    render();
    genMap();
});

function render(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.drawImage(player.img,
        player.position.x,
        player.position.y,
        size,
        size
    );
    for (let item = 0; item < map.length; item++) {
        
        context.strokeRect(map[item].x, map[item].y,size,size);    
    }
    
    requestAnimationFrame(render);
}

let map = [];
function genMap(){
    for (let x = 0; x < canvas.width; x+=size) {
        for (let y = 0 + hub.clientHeight; y < canvas.height; y+=size) {
            map.push({x:x,y:y})
        }       
    }
}

document.addEventListener("keydown", function(event){
    console.log(event.keyCode);
    switch(event.keyCode){
        case 87: //w
            if(player.position.y > 0 + hub.clientHeight){
                player.position.y -= player.speed;
            }
        break;
        case 83: //s
            if(player.position.y+size < canvas.height){
                player.position.y += player.speed;
            }
        break;
        case 65: //a
            if (player.position.x > 0 ){
                player.position.x -= player.speed;
            }
        break;
        case 68: //d
            if(player.position.x + size < canvas.width){
                player.position.x += player.speed;
            }
        break;
    }
});

function hideElement(element){
    element.style.display = "none";
}