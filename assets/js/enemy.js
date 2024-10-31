let enemy = {
    position: {x:0, y:0},
    direction:"",
    img: new Image(),
    speed:5,
    time_speed:5
}
enemy.img.src = "assets/img/enemy/enemy.png"


function renderEnemy(){
    context.drawImage(
        enemy.img,
        enemy.position.x,
        enemy.position.y,
        size,
        size
    )
}