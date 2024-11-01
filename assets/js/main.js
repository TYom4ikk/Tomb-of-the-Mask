let coins_text = document.querySelector(".coins p")
coins_text.innerHTML = ""
let hub = document.querySelector("header")


let play_btn = document.querySelector("main .play")
let canvas = document.querySelector("#gameZone")
let context = canvas.getContext("2d")

let size = 30;
let player = {
    position: { x: 0, y: 0 },
    speed: 15,
    img: new Image(),
    direction: "",
    move: null,
    timeSpeed: 5,
    coinCount: 0,
    level:1
    
}
player.img.src = "assets/img/player/ярик.png"

play_btn.addEventListener("click", function () {
});

function play(level){
    player.level = level
    hideElement(play_btn)
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    render()
    genMap()

}

function updateText(){
    coins_text.innerHTML = player.coinCount
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(
        player.img,
        player.position.x,
        player.position.y,
        size,
        size
    );
    for (let item = 0; item < map.length; item++) {
        if (map[item].type != null) {
            context.drawImage(
                map[item].type.img,
                map[item].x,
                map[item].y,
                size,
                size
            );
        }
    }
    renderCeil(map);
    requestAnimationFrame(render);
    //renderEnemy()
}
let map = [];
function genMap() {
    for (let x = 0; x < canvas.width; x += size) {
        for (let y = 0; y < canvas.height; y += size) {
            map.push({
                x: x,
                y: y,
                type: null
            })
        }
    }
    level(player.level)    
}


function collision() {
    let result = map.find(
        item =>
            item.x < player.position.x + size
            &&
            item.x + size > player.position.x
            &&
            item.y < player.position.y + size
            &&
            item.y + size > player.position.y
    )
    console.log(result.type)
    if (result.type != null) {
        switch (result.type.name) {
            case "baul":
                player.level += 1;
                hideElement(play_btn);
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
                map=[];
                genMap();
                break;
            case "coin":
                player.coinCount++
                updateText()
                result.type = null
                break
            case "wall":
                let oldDirection = player.direction
                player.direction = ""
                clearInterval(player.move)
                player.move = null
                switch (oldDirection) {
                    case "up":
                        player.position.y = result.y + size
                        break
                    case "down":
                        player.position.y = result.y - size
                        break
                    case "left":
                        player.position.x = result.x + size
                        break
                    case "right":
                        player.position.x = result.x - size
                        break
                }
                break
        }
    }
}

function renderCeil(){
    for (let item = 0; item < map.length; item++) {
    context.strokeRect(
        map[item].x,
        map[item].y,
        size,
        size
    )
    context.fillText(
        item,
        map[item].x+size/2,
        map[item].y+size/2
    )
    }
}

document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 87: //w
            if (player.move == null) {
                player.direction = "up"
                player.move = setInterval(move, player.timeSpeed)
            }
            break

        case 83: //s
            if (player.move == null) {
                player.direction = "down"
                player.move = setInterval(move, player.timeSpeed)
            }
            break

        case 65: //a
            if (player.move == null) {
                player.direction = "left"
                player.move = setInterval(move, player.timeSpeed)
            }
            break

        case 68: //d
            if (player.move == null) {
                player.direction = "right"
                player.move = setInterval(move, player.timeSpeed)
            }
            break
    }
});

function move() {
    switch (player.direction) {
        case "up":
            if (player.position.y > 0) {
                player.position.y -= player.speed
            }
            else {
                player.direction = ""
                clearInterval(player.move)
                player.move = null
            }
            break
        case "down":
            if (player.position.y + size < canvas.height) {
                player.position.y += player.speed
            }
            else {
                player.direction = ""
                clearInterval(player.move)
                player.move = null
            }
            break
        case "left":
            if (player.position.x > 0) {
                player.position.x -= player.speed
            }
            else {
                player.direction = ""
                clearInterval(player.move)
                player.move = null
            }
            break
        case "right":
            if (player.position.x + size < canvas.width) {
                player.position.x += player.speed
            }
            else {
                player.direction = ""
                clearInterval(player.move)
                player.move = null
            }
            break
    }
    collision();
}

function hideElement(element) {
    element.style.display = "none"
}

function viewElement(element) {
    element.style.display = "flex"
}