let coin_img = new Image()
coin_img.src = "assets/img/icons/бургер.png"

let add_img = new Image()
add_img.src = "assets/img/icons/Icon=add.png"

let arcade_img = new Image()
arcade_img.src = "assets/img/icons/Icon=arcade.png"

let badge2_img = new Image()
badge2_img.src = "assets/img/icons/Icon=badge 2.png"

let badge_img = new Image()
badge_img.src = "assets/img/icons/Icon=badge.png"

let baul_img = new Image()
baul_img.src = "assets/img/icons/Icon=baul.png"

let candado_img = new Image()
candado_img.src = "assets/img/icons/Icon=Candado.png"

let cofre_img = new Image()
cofre_img.src = "assets/img/icons/Icon=cofre.png"

let coin_sprite_img = new Image()
coin_sprite_img.src = "assets/img/icons/Icon=Coin Sprite.png"

let life_img = new Image()
life_img.src = "assets/img/icons/Icon=life.png"

let map_img = new Image()
map_img.src = "assets/img/icons/Icon=Map.png"

let menu_img = new Image()
menu_img.src = "assets/img/icons/Icon=menu.png"

let settings_img = new Image()
settings_img.src = "assets/img/icons/Icon=settings.png"

let shield_img = new Image()
shield_img.src = "assets/img/icons/Icon=shield.png"

let star_img = new Image()
star_img.src = "assets/img/icons/Icon=star.png"

let thunder_img = new Image()
thunder_img.src = "assets/img/icons/Icon=Thunder.png"

let youtube_img = new Image()
youtube_img.src = "assets/img/icons/Icon=youtube.png"

let wall1 = new Image()
wall1.src = "assets/img/map/Numer Box=B1.png"

let wall2 = new Image()
wall2.src = "assets/img/map/Numer Box=B2.png"

let wall3 = new Image()
wall3.src = "assets/img/map/Numer Box=B3.png"

let wall4 = new Image()
wall4.src = "assets/img/map/Numer Box=B4.png"

let wall5 = new Image()
wall5.src = "assets/img/map/Numer Box=B5.png"

let wall6 = new Image()
wall6.src = "assets/img/map/Numer Box=B6.png"

let wall7 = new Image()
wall7.src = "assets/img/map/Numer Box=B7.png"

let wall8 = new Image()
wall8.src = "assets/img/map/Numer Box=B8.png"

let wall9 = new Image()
wall9.src = "assets/img/map/Numer Box=B9.png"

let wall10 = new Image()
wall10.src = "assets/img/map/Numer Box=B10.png"

let wall11 = new Image()
wall11.src = "assets/img/map/Numer Box=B11.png"

let wall12 = new Image()
wall12.src = "assets/img/map/Numer Box=C1.png"

let wall13 = new Image()
wall13.src = "assets/img/map/Numer Box=C2.png"

let wall14 = new Image()
wall14.src = "assets/img/map/Numer Box=C3.png"

let wall15 = new Image()
wall15.src = "assets/img/map/Numer Box=C4.png"

let enemy_img = new Image()
enemy_img.src = "assets/img/enemy/enemy.png"

let player_img = new Image()
player_img.src = "assets/img/player/player.png"

function level(level){
    switch(level){
        case 1:
            player.position.x = map[310].x
            player.position.y = map[310].y
            map[190].type = {name:"coin",img:coin_img}
            map[280].type = {name:"coin",img:coin_img}
            map[156].type = {name:"coin",img:coin_img}
            map[319].type = {name:"coin",img:coin_img}
            map[124].type = {name:"coin",img:coin_img}
            map[68].type = {name:"coin",img:coin_img}
            map[92].type = {name:"coin",img:coin_img}
            map[116].type = {name:"coin",img:coin_img}
            map[110].type = {name:"coin",img:coin_img}
            map[134].type = {name:"coin",img:coin_img}
            map[51].type = {name:"coin",img:coin_img}
            map[9].type = {name:"coin",img:coin_img}
            map[14].type = {name:"coin",img:coin_img}
            map[50].type = {name:"coin",img:coin_img}



            map[309].type = {name:"wall",img:wall8}
            map[285].type = {name:"wall",img:wall8}
            map[261].type = {name:"wall",img:wall8}
            map[237].type = {name:"wall",img:wall8}
            map[166].type = {name:"wall",img:wall8}
            map[165].type = {name:"wall",img:wall8}
            map[191].type = {name:"wall",img:wall8}
            map[215].type = {name:"wall",img:wall8}
            map[239].type = {name:"wall",img:wall8}
            map[263].type = {name:"wall",img:wall8}
            map[287].type = {name:"wall",img:wall8}
            map[311].type = {name:"wall",img:wall8}
            map[334].type = {name:"wall",img:wall8}
            map[213].type = {name:"wall",img:wall8}
            map[333].type = {name:"wall",img:wall8}
            map[335].type = {name:"wall",img:wall8}
            map[167].type = {name:"wall",img:wall8}
            map[183].type = {name:"wall",img:wall8}
            map[160].type = {name:"wall",img:wall8}
            map[352].type = {name:"wall",img:wall8}
            map[329].type = {name:"wall",img:wall8}
            map[318].type = {name:"wall",img:wall8}
            map[343].type = {name:"wall",img:wall8}
            map[246].type = {name:"wall",img:wall8}
            map[223].type = {name:"wall",img:wall8}
            map[253].type = {name:"wall",img:wall8}
            map[276].type = {name:"wall",img:wall8}
            map[123].type = {name:"wall",img:wall8}
            map[108].type = {name:"wall",img:wall8}
            map[133].type = {name:"wall",img:wall8}
            map[148].type = {name:"wall",img:wall8}
            map[3].type = {name:"wall",img:wall8}

            map[161].type = {name:"wall",img:wall8}
            map[163].type = {name:"wall",img:wall8}
            map[162].type = {name:"wall",img:wall8}
            map[164].type = {name:"wall",img:wall8}

            map[159].type = {name:"wall",img:wall8}

            for (let x = 209; x < 213; x++) {
                map[x].type = {name:"wall",img:wall8}
            }
            for (let x = 344; x < 352; x++) {
                map[x].type = {name:"wall",img:wall8}
            }
            for (let x = 224; x < 228; x++) {
                map[x].type = {name:"wall",img:wall8}
            }
            for (let x = 149; x < 156; x++) {
                map[x].type = {name:"wall",img:wall8}
            }
            for (let x = 29; x < 40; x++) {
                map[x].type = {name:"wall",img:wall8}
            }
            for (let x = 101; x < 108; x++) {
                map[x].type = {name:"wall",img:wall8}
            }
            for (let x = 69; x < 72; x++) {
                map[x].type = {name:"wall",img:wall8}
            }

            map[109].type = {name:"wall",img:wall8}
            map[233].type = {name:"wall",img:wall8}
            map[257].type = {name:"wall",img:wall8}
            map[281].type = {name:"wall",img:wall8}
            map[305].type = {name:"wall",img:wall8}
            map[353].type = {name:"wall",img:wall8}
            map[342].type = {name:"wall",img:wall8}
            map[222].type = {name:"wall",img:wall8}
            map[277].type = {name:"wall",img:wall8}
            map[109].type = {name:"wall",img:wall8}
            map[147].type = {name:"wall",img:wall8}

            map[27].type = {name:"wall",img:wall8}
            map[75].type = {name:"wall",img:wall8}
            map[99].type = {name:"wall",img:wall8}

            map[63].type = {name:"wall",img:wall8}
            map[87].type = {name:"wall",img:wall8}
            map[111].type = {name:"wall",img:wall8}
            map[158].type = {name:"wall",img:wall8}

            map[93].type = {name:"wall",img:wall8}
            map[117].type = {name:"wall",img:wall8}
            map[141].type = {name:"wall",img:wall8}

            map[65].type = {name:"wall",img:wall8}
            map[89].type = {name:"wall",img:wall8}
            map[113].type = {name:"wall",img:wall8}
            map[66].type = {name:"wall",img:wall8}
            map[90].type = {name:"wall",img:wall8}
            map[114].type = {name:"wall",img:wall8}
            map[67].type = {name:"wall",img:wall8}
            map[91].type = {name:"wall",img:wall8}
            map[115].type = {name:"wall",img:wall8}

            map[157].type = {name:"wall",img:wall8}
            map[181].type = {name:"wall",img:wall8}
            map[205].type = {name:"wall",img:wall8}
            map[229].type = {name:"wall",img:wall8}

            map[270].type = {name:"wall",img:wall8}
            map[294].type = {name:"wall",img:wall8}

            map[179].type = {name:"wall",img:wall8}
            map[203].type = {name:"wall",img:wall8}

            map[207].type = {name:"wall",img:wall8}
            map[231].type = {name:"wall",img:wall8}
            map[255].type = {name:"wall",img:wall8}
            map[279].type = {name:"wall",img:wall8}

            for (let x = 296; x < 304; x++) {
                map[x].type = {name:"wall",img:wall8}
            }

            
            map[77].type = {name:"wall",img:wall8}

            for (let x = 272; x < 276; x++) {
                map[x].type = {name:"wall",img:wall8}
            }

            for (let x = 78; x < 86; x++) {
                map[x].type = {name:"wall",img:wall8}
            }

            map[182].type = {name:"wall",img:wall8}
            map[206].type = {name:"wall",img:wall8}
            map[230].type = {name:"wall",img:wall8}
            map[254].type = {name:"wall",img:wall8}
            map[278].type = {name:"wall",img:wall8}
            map[236].type = {name:"baul", img:baul_img}

        break
        case 2:
            player.position.x = map[50].x
            player.position.y = map[34].y

            map[0].type = {name:"wall",img: wall10};
            map[1].type = { name:"wall", img: wall8 };
            map[2].type = { name: "wall", img: wall8 };
            map[3].type = { name: "wall", img: wall8 };
            map[4].type = { name: "wall", img: wall8 };
            map[24].type = { name: "wall", img:wall8 };
            map[25].type = { name: "wall", img: wall8 };
            map[28].type = { name: "wall", img: wall8 };
            map[29].type = { name: "wall", img: wall8 };
            map[30].type = { name: "wall", img: wall8 };
            map[31].type = { name: "wall", img: wall8 };
            map[32].type = { name: "wall", img: wall8 };
            map[33].type = { name: "wall", img: wall8 };
            map[34].type = { name: "wall", img: wall8 };
            map[35].type = { name: "wall", img: wall8 };
            map[36].type = { name: "wall", img: wall8 };
            map[37].type = { name: "wall", img: wall8 };
            map[38].type = { name: "wall", img: wall8 }
            map[39].type = { name: "wall", img: wall8 }
            map[40].type = { name: "wall", img: wall8 }
            map[41].type = { name: "wall", img: wall8 }
            map[42].type = { name: "wall", img: wall8 }
            map[43].type = { name: "wall", img: wall8 }
            map[44].type = { name: "wall", img: wall8 }
            map[45].type = { name: "wall", img: wall8 }
            map[46].type = { name: "wall", img: wall8 }
            map[47].type = { name: "wall", img: wall8 }
            map[48].type = { name: "wall", img: wall8 }
            map[59].type = { name: "wall", img: wall8 }
            map[71].type = { name: "wall", img: wall8 }
            map[72].type = { name: "wall", img: wall8 }
            map[75].type = { name: "coin", img: coinImg }
            map[76].type = { name: "wall", img: wall8 }
            map[77].type = { name: "wall", img: wall8 }
            map[78].type = { name: "wall", img: wall8 }
            map[79].type = { name: "wall", img: wall8 }
            map[80].type = { name: "wall", img: wall8 }
            map[81].type = { name: "wall", img: wall8 }
            map[82].type = { name: "wall", img: wall8 }
            map[84].type = { name: "wall", img: wall8 }
            map[95].type = { name: "wall", img: wall8 }
            map[96].type = { name: "wall", img: wall8 }
            map[97].type = { name: "wall", img: wall8 }
            map[98].type = { name: "wall", img: wall8 }
            map[99].type = { name: "wall", img: wall8 }
            map[100].type = { name: "wall", img:wall8 }
            map[102].type = { name: "wall", img: wall8 }
            map[106].type = { name: "coin", img: coin_img }
            map[108].type = { name: "wall", img: wall8 }
            map[115].type = { name: "wall", img: wall8 }
            map[119].type = { name: "wall", img: wall8 }
            map[126].type = { name: "wall", img: wall8 }
            map[128].type = { name: "wall", img: wall8 }
            map[130].type = { name: "wall", img: wall8 }
            map[132].type = { name: "wall", img: wall8 }
            map[141].type = { name: "wall", img: wall8 }
            map[142].type = { name: "wall", img: wall8 }
            map[143].type = { name: "wall", img: wall8 }
            map[145].type = { name: "wall", img: enemy_img };
            map[148].type = { name: "wall", img: enemy_img };
            map[150].type = { name: "wall", img: wall8 };
            map[152].type = { name: "wall", img: wall8 };
            map[154].type = { name: "wall", img: wall8 };
            map[156].type = { name: "wall", img: wall8 };
            map[158].type = { name: "coin", img: coinImg };
            map[167].type = { name: "wall", img: wall8 };
            map[170].type = { name: "wall", img: enemyImg };
            map[171].type = { name: "wall", img: enemyImg };
            map[174].type = { name: "wall", img: wall8 };
            map[176].type = { name: "wall", img: wall8 };
            map[180].type = { name: "wall", img: wall8 };
            map[191].type = { name: "wall", img: wall8 };
            map[193].type = { name: "wall", img: enemyImg };
            map[196].type = { name: "wall", img: enemyImg };
            map[198].type = { name: "wall", img: wall8 };
            map[200].type = { name: "wall", img: wall8 };
            map[201].type = { name: "wall", img: wall8 };
            map[202].type = { name: "wall", img: wall8 };
            map[203].type = { name: "wall", img: wall8 };
            map[204].type = { name: "wall", img: wall8 };
            map[206].type = { name: "wall", img: wall8 };
            map[207].type = { name: "wall", img: wall8 };
            map[208].type = { name: "wall", img: wall8 };
            map[209].type = { name: "wall", img: wall8 };
            map[210].type = { name: "wall", img: wall8 };
            map[211].type = { name: "wall", img: wall8 };
            map[212].type = { name: "wall", img: wall8 };
            map[213].type = { name: "wall", img: wall8 };
            map[214].type = { name: "wall", img: wall8 };
            map[215].type = { name: "wall", img: wall8 };
            map[222].type = { name: "wall", img: wall8 };
            map[230].type = { name: "wall", img: wall8 };
            map[241].type = { name: "wall", img: enemyImg };
            map[242].type = { name: "wall", img: enemyImg };
            map[243].type = { name: "wall", img: enemyImg };
            map[244].type = { name: "wall", img: enemyImg };
            map[246].type = { name: "wall", img: wall8 };
            map[247].type = { name: "wall", img: wall8 };
            map[248].type = { name: "wall", img: wall8 };
            map[249].type = { name: "wall", img: wall8 };
            map[250].type = { name: "wall", img: wall8 };
            map[251].type = { name: "wall", img: wall8 };
            map[252].type = { name: "wall", img: wall8 };
            map[254].type = { name: "wall", img: wall8 };
            map[259].type = { name: "wall", img: wall8 };
            map[260].type = { name: "wall", img: wall8 };
            map[261].type = { name: "wall", img: wall8 };
            map[262].type = { name: "wall", img: wall8 };
            map[263].type = { name: "wall", img: wall8 };
            map[265].type = { name: "wall", img: enemyImg };
            map[268].type = { name: "wall", img: enemyImg };
            map[276].type = { name: "wall", img: wall8 };
            map[278].type = { name: "wall", img: wall8 };
            map[279].type = { name: "wall", img: wall8 };
            map[280].type = { name: "wall", img: wall8 };
            map[281].type = { name: "wall", img: wall8 };
            map[282].type = { name: "wall", img: wall8 };
            map[283].type = { name: "wall", img: wall8 };
            map[287].type = { name: "wall", img: wall8 };
            map[290].type = { name: "wall", img: enemyImg };
            map[291].type = { name: "wall", img: enemyImg };
            map[300].type = { name: "wall", img: wall8 };
            map[311].type = { name: "wall", img: wall8 };
            map[324].type = { name: "wall", img: wall8 };
            map[325].type = { name: "wall", img: wall8 };
            map[326].type = { name: "wall", img: wall8 };
            map[327].type = { name: "wall", img: wall8 };
            map[328].type = { name: "wall", img: wall8 };
            map[329].type = { name: "wall", img: wall8 };
            map[330].type = { name: "wall", img: wall8 };
            map[331].type = { name: "wall", img: wall8 };
            map[335].type = { name: "wall", img: wall8 };
            map[355].type = { name: "wall", img: wall8 };
            map[356].type = { name: "wall", img: wall8 };
            map[357].type = { name: "wall", img: wall8 }
            map[358].type = { name: "wall", img: wall8 }
            map[359].type = { name: "wall", img: wall8 }

            break;
        
    }

}

