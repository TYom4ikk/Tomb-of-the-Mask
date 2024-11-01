let list_block = document.querySelector(".blocks");
function edit() {
    hideElement(play_btn)
    viewElement(list_block)
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    player.level = 0;
    genMap();
    render();
}

canvas.addEventListener("mousedown", function (event) {
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
    switch (type_block) {
        case "wall1":
            result.type = { name: "wall", img: wall1, param: "wall1" }
            break;
        case "wall2":
            result.type = { name: "wall", img: wall2, param: "wall2" }
            break;
        case "wall3":
            result.type = { name: "wall", img: wall3, param: "wall3" }
            break;
        case "wall4":
            result.type = { name: "wall", img: wall4, param: "wall4" }
            break;
        case "wall5":
            result.type = { name: "wall", img: wall5, param: "wall5" }
            break;
        case "wall6":
            result.type = { name: "wall", img: wall6, param: "wall6" }
            break;
        case "wall7":
            result.type = { name: "wall", img: wall7, param: "wall7" }
            break;
        case "wall8":
            result.type = { name: "wall", img: wall8, param: "wall8" }
            break;
        case "wall9":
            result.type = { name: "wall", img: wall9, param: "wall9" }
            break;
        case "wall10":
            result.type = { name: "wall", img: wall00, param: "wall10" }
            break;
        case "wall11":
            result.type = { name: "wall", img: wall11, param: "wall11" }
            break;
        case "wall12":
            result.type = { name: "wall", img: wall12, param: "wall12" }
            break;
        case "wall13":
            result.type = { name: "wall", img: wall13, param: "wall13" }
            break;
        case "wall14":
            result.type = { name: "wall", img: wall14, param: "wall14" }
            break;
        case "wall15":
            result.type = { name: "wall", img: wall15, param: "wall15" }
            break;
        case "player":
            result.type = {name:"start", img: player_img}
            break;
        case "coin":
            result.type = {name:"coin", img: coin_img}
            break;
        case "baul":
            result.type = {name:"baul", img: baul_img}
            break;
    }
});

const blocks = document.querySelector(".blocks");
let type_block;

function selectBlock(event) {
    let img = event.target;
    for (let i = 0; i < images.length; i++) {
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

function savelvl() {
    let result = "";
    for (let i = 0; i < map.length; i++) {
        if (map[i].type != null) {
            if(map[i].type.name != "start"){
           
                result += `map[${i}].type = {name:"${map[i].type.name}",  img:${map[i].type.param}};\n`;
            }
            else{
                result += `player.position.x = map[${i}].x; player.position.y = map[${i}].y`;
            }
        }
    }
    
    console.log(result);
}