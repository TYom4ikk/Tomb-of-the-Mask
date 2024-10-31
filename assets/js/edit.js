function edit(){
    hideElement(play_btn)
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    player.level = 0;
    genMap();
    render();
}

canvas.addEventListener("mousedown", function(event){
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    let result = map.find(item => 
        item.x <= mouseX &&
        item.x + size >= mouseX &&
        item.y <= mouseY &&
        item.y + size >= mouseY
    );
    // console.log(`x:${mouseX} y:${mouseY}`);
    // console.log(result);
    switch(type_block){
        case "wall1":
            result.type = {name:"wall", img: wall1}
            break;
        case "wall2":
            result.type = {name:"wall", img: wall2}
            break;
        case "wall3":
            result.type = {name:"wall", img: wall3}
            break;
        case "wall4":
            result.type = {name:"wall", img: wall3}
            break;
        case "wall5":
            result.type = {name:"wall", img: wall3}
            break;
        case "wall6":
            result.type = {name:"wall", img: wall3}
            break;
        case "wall7":
            result.type = {name:"wall", img: wall3}
            break;
            
    }
});

const blocks = document.querySelector(".blocks");
let type_block;

function selectBlock(event){
    let img = event.target;
    for(let i=0;i<images.length;i++){
        images[i].style.background = "none";
    }
    console.log(img);
    img.style.background = "#dd8888";
    type_block = img.getAttribute("alt");
}

let images = blocks.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', selectBlock);
}