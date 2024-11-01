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

function level(level) {
    switch (level) {
        case 1:
            player.position.x = map[310].x
            player.position.y = map[310].y
            map[190].type = { name: "coin", img: coin_img }
            map[280].type = { name: "coin", img: coin_img }
            map[156].type = { name: "coin", img: coin_img }
            map[319].type = { name: "coin", img: coin_img }
            map[124].type = { name: "coin", img: coin_img }
            map[68].type = { name: "coin", img: coin_img }
            map[92].type = { name: "coin", img: coin_img }
            map[116].type = { name: "coin", img: coin_img }
            map[110].type = { name: "coin", img: coin_img }
            map[134].type = { name: "coin", img: coin_img }
            map[51].type = { name: "coin", img: coin_img }
            map[9].type = { name: "coin", img: coin_img }
            map[14].type = { name: "coin", img: coin_img }
            map[50].type = { name: "coin", img: coin_img }



            map[309].type = { name: "wall", img: wall8 }
            map[285].type = { name: "wall", img: wall8 }
            map[261].type = { name: "wall", img: wall8 }
            map[237].type = { name: "wall", img: wall8 }
            map[166].type = { name: "wall", img: wall8 }
            map[165].type = { name: "wall", img: wall8 }
            map[191].type = { name: "wall", img: wall8 }
            map[215].type = { name: "wall", img: wall8 }
            map[239].type = { name: "wall", img: wall8 }
            map[263].type = { name: "wall", img: wall8 }
            map[287].type = { name: "wall", img: wall8 }
            map[311].type = { name: "wall", img: wall8 }
            map[334].type = { name: "wall", img: wall8 }
            map[213].type = { name: "wall", img: wall8 }
            map[333].type = { name: "wall", img: wall8 }
            map[335].type = { name: "wall", img: wall8 }
            map[167].type = { name: "wall", img: wall8 }
            map[183].type = { name: "wall", img: wall8 }
            map[160].type = { name: "wall", img: wall8 }
            map[352].type = { name: "wall", img: wall8 }
            map[329].type = { name: "wall", img: wall8 }
            map[318].type = { name: "wall", img: wall8 }
            map[343].type = { name: "wall", img: wall8 }
            map[246].type = { name: "wall", img: wall8 }
            map[223].type = { name: "wall", img: wall8 }
            map[253].type = { name: "wall", img: wall8 }
            map[276].type = { name: "wall", img: wall8 }
            map[123].type = { name: "wall", img: wall8 }
            map[108].type = { name: "wall", img: wall8 }
            map[133].type = { name: "wall", img: wall8 }
            map[148].type = { name: "wall", img: wall8 }
            map[3].type = { name: "wall", img: wall8 }

            map[161].type = { name: "wall", img: wall8 }
            map[163].type = { name: "wall", img: wall8 }
            map[162].type = { name: "wall", img: wall8 }
            map[164].type = { name: "wall", img: wall8 }

            map[159].type = { name: "wall", img: wall8 }

            for (let x = 209; x < 213; x++) {
                map[x].type = { name: "wall", img: wall8 }
            }
            for (let x = 344; x < 352; x++) {
                map[x].type = { name: "wall", img: wall8 }
            }
            for (let x = 224; x < 228; x++) {
                map[x].type = { name: "wall", img: wall8 }
            }
            for (let x = 149; x < 156; x++) {
                map[x].type = { name: "wall", img: wall8 }
            }
            for (let x = 29; x < 40; x++) {
                map[x].type = { name: "wall", img: wall8 }
            }
            for (let x = 101; x < 108; x++) {
                map[x].type = { name: "wall", img: wall8 }
            }
            for (let x = 69; x < 72; x++) {
                map[x].type = { name: "wall", img: wall8 }
            }

            map[109].type = { name: "wall", img: wall8 }
            map[233].type = { name: "wall", img: wall8 }
            map[257].type = { name: "wall", img: wall8 }
            map[281].type = { name: "wall", img: wall8 }
            map[305].type = { name: "wall", img: wall8 }
            map[353].type = { name: "wall", img: wall8 }
            map[342].type = { name: "wall", img: wall8 }
            map[222].type = { name: "wall", img: wall8 }
            map[277].type = { name: "wall", img: wall8 }
            map[109].type = { name: "wall", img: wall8 }
            map[147].type = { name: "wall", img: wall8 }

            map[27].type = { name: "wall", img: wall8 }
            map[75].type = { name: "wall", img: wall8 }
            map[99].type = { name: "wall", img: wall8 }

            map[63].type = { name: "wall", img: wall8 }
            map[87].type = { name: "wall", img: wall8 }
            map[111].type = { name: "wall", img: wall8 }
            map[158].type = { name: "wall", img: wall8 }

            map[93].type = { name: "wall", img: wall8 }
            map[117].type = { name: "wall", img: wall8 }
            map[141].type = { name: "wall", img: wall8 }

            map[65].type = { name: "wall", img: wall8 }
            map[89].type = { name: "wall", img: wall8 }
            map[113].type = { name: "wall", img: wall8 }
            map[66].type = { name: "wall", img: wall8 }
            map[90].type = { name: "wall", img: wall8 }
            map[114].type = { name: "wall", img: wall8 }
            map[67].type = { name: "wall", img: wall8 }
            map[91].type = { name: "wall", img: wall8 }
            map[115].type = { name: "wall", img: wall8 }

            map[157].type = { name: "wall", img: wall8 }
            map[181].type = { name: "wall", img: wall8 }
            map[205].type = { name: "wall", img: wall8 }
            map[229].type = { name: "wall", img: wall8 }

            map[270].type = { name: "wall", img: wall8 }
            map[294].type = { name: "wall", img: wall8 }

            map[179].type = { name: "wall", img: wall8 }
            map[203].type = { name: "wall", img: wall8 }

            map[207].type = { name: "wall", img: wall8 }
            map[231].type = { name: "wall", img: wall8 }
            map[255].type = { name: "wall", img: wall8 }
            map[279].type = { name: "wall", img: wall8 }

            for (let x = 296; x < 304; x++) {
                map[x].type = { name: "wall", img: wall8 }
            }


            map[77].type = { name: "wall", img: wall8 }

            for (let x = 272; x < 276; x++) {
                map[x].type = { name: "wall", img: wall8 }
            }

            for (let x = 78; x < 86; x++) {
                map[x].type = { name: "wall", img: wall8 }
            }

            map[182].type = { name: "wall", img: wall8 }
            map[206].type = { name: "wall", img: wall8 }
            map[230].type = { name: "wall", img: wall8 }
            map[254].type = { name: "wall", img: wall8 }
            map[278].type = { name: "wall", img: wall8 }
            map[236].type = { name: "baul", img: baul_img }

            break;

        case 2:
            player.position.x = map[236].x;
            player.position.y = map[236].y

            map[0].type = { name: "wall", img: wall13 };
            map[1].type = { name: "wall", img: wall13 };
            map[2].type = { name: "wall", img: wall13 };
            map[3].type = { name: "wall", img: wall13 };
            map[4].type = { name: "wall", img: wall13 };
            map[5].type = { name: "wall", img: wall13 };
            map[6].type = { name: "wall", img: wall13 };
            map[7].type = { name: "wall", img: wall13 };
            map[8].type = { name: "wall", img: wall13 };
            map[9].type = { name: "wall", img: wall13 };
            map[10].type = { name: "wall", img: wall13 };
            map[11].type = { name: "wall", img: wall13 };
            map[12].type = { name: "wall", img: wall13 };
            map[13].type = { name: "wall", img: wall13 };
            map[14].type = { name: "wall", img: wall13 };
            map[15].type = { name: "wall", img: wall9 };
            map[16].type = { name: "wall", img: wall9 };
            map[17].type = { name: "wall", img: wall9 };
            map[18].type = { name: "wall", img: wall9 };
            map[19].type = { name: "wall", img: wall9 };
            map[20].type = { name: "wall", img: wall9 };
            map[21].type = { name: "wall", img: wall9 };
            map[22].type = { name: "wall", img: wall9 };
            map[23].type = { name: "wall", img: wall9 };
            map[24].type = { name: "wall", img: wall13 };
            map[31].type = { name: "coin", img: coin_img };
            map[32].type = { name: "coin", img: coin_img };
            map[33].type = { name: "coin", img: coin_img };
            map[37].type = { name: "wall", img: wall13 };
            map[47].type = { name: "wall", img: wall9 };
            map[48].type = { name: "wall", img: wall13 };
            map[61].type = { name: "wall", img: wall13 };
            map[66].type = { name: "wall", img: wall9 };
            map[71].type = { name: "wall", img: wall9 };
            map[72].type = { name: "wall", img: wall13 };
            map[76].type = { name: "wall", img: wall9 };
            map[85].type = { name: "wall", img: wall13 };
            map[94].type = { name: "wall", img: wall9 };
            map[95].type = { name: "wall", img: wall9 };
            map[96].type = { name: "wall", img: wall13 };
            map[104].type = { name: "coin", img: coin_img };
            map[109].type = { name: "wall", img: wall13 };
            map[111].type = { name: "wall", img: wall9 };
            map[115].type = { name: "coin", img: coin_img };
            map[119].type = { name: "wall", img: wall9 };
            map[120].type = { name: "wall", img: wall13 };
            map[121].type = { name: "wall", img: wall13 };
            map[122].type = { name: "wall", img: wall13 };
            map[123].type = { name: "wall", img: wall13 };
            map[133].type = { name: "wall", img: wall13 };
            map[135].type = { name: "wall", img: wall14 };
            map[136].type = { name: "wall", img: wall14 };
            map[137].type = { name: "wall", img: wall13 };
            map[138].type = { name: "wall", img: wall13 };
            map[139].type = { name: "coin", img: coin_img };
            map[143].type = { name: "wall", img: wall9 };
            map[144].type = { name: "wall", img: wall13 };
            map[146].type = { name: "coin", img: coin_img };
            map[147].type = { name: "wall", img: wall13 };
            map[156].type = { name: "wall", img: wall13 };
            map[157].type = { name: "wall", img: wall13 };
            map[159].type = { name: "wall", img: wall14 };
            map[163].type = { name: "coin", img: coin_img };
            map[168].type = { name: "wall", img: wall13 };
            map[170].type = { name: "coin", img: coin_img };
            map[171].type = { name: "wall", img: wall13 };
            map[181].type = { name: "wall", img: wall13 };
            map[183].type = { name: "wall", img: wall14 };

            map[192].type = { name: "wall", img: wall13 };
            map[195].type = { name: "wall", img: wall13 };
            map[205].type = { name: "wall", img: wall13 };
            map[207].type = { name: "wall", img: wall14 };
            map[210].type = { name: "wall", img: wall1 };
            map[211].type = { name: "wall", img: wall1 };
            map[212].type = { name: "wall", img: wall1 };
            map[213].type = { name: "wall", img: wall1 };
            map[214].type = { name: "coin", img: coin_img };
            map[216].type = { name: "wall", img: wall13 };
            map[229].type = { name: "wall", img: wall13 };
            map[231].type = { name: "wall", img: wall14 };

            map[238].type = { name: "coin", img: coin_img };
            map[240].type = { name: "wall", img: wall13 };
            map[253].type = { name: "wall", img: wall13 };
            map[255].type = { name: "wall", img: wall14 };
            map[261].type = { name: "wall", img: wall9 };
            map[262].type = { name: "coin", img: coin_img };
            map[264].type = { name: "wall", img: wall13 };
            map[277].type = { name: "wall", img: wall13 };
            map[279].type = { name: "wall", img: wall14 };
            map[285].type = { name: "wall", img: wall5 };
            map[286].type = { name: "wall", img: wall5 };
            map[287].type = { name: "wall", img: wall9 };
            map[288].type = { name: "wall", img: wall13 };
            map[293].type = { name: "wall", img: wall13 };
            map[294].type = { name: "wall", img: wall13 };
            map[295].type = { name: "wall", img: wall13 };
            map[301].type = { name: "wall", img: wall13 };
            map[303].type = { name: "wall", img: wall14 };
            map[309].type = { name: "coin", img: coin_img };
            map[310].type = { name: "wall", img: wall11 };
            map[311].type = { name: "wall", img: wall9 };
            map[312].type = { name: "wall", img: wall13 };
            map[314].type = { name: "wall", img: wall9 };
            map[317].type = { name: "wall", img: wall13 };
            map[318].type = { name: "baul", img: baul_img };
            map[319].type = { name: "wall", img: wall13 };
            map[322].type = { name: "wall", img: wall13 };
            map[323].type = { name: "wall", img: wall13 };
            map[324].type = { name: "wall", img: wall13 };
            map[325].type = { name: "wall", img: wall13 };
            map[327].type = { name: "wall", img: wall14 };
            map[333].type = { name: "coin", img: coin_img };
            map[334].type = { name: "wall", img: wall12 };
            map[335].type = { name: "wall", img: wall9 };
            map[336].type = { name: "wall", img: wall13 };
            map[337].type = { name: "coin", img: coin_img };
            map[338].type = { name: "coin", img: coin_img };
            map[343].type = { name: "wall", img: wall13 };
            map[351].type = { name: "wall", img: wall14 };
            map[357].type = { name: "coin", img: coin_img };
            map[358].type = { name: "wall", img: wall1 };
            map[359].type = { name: "wall", img: wall9 };
            map[360].type = { name: "wall", img: wall13 };
            map[361].type = { name: "wall", img: wall13 };
            map[362].type = { name: "wall", img: wall13 };
            map[363].type = { name: "wall", img: wall13 };
            map[364].type = { name: "wall", img: wall13 };
            map[365].type = { name: "wall", img: wall13 };
            map[366].type = { name: "wall", img: wall13 };
            map[367].type = { name: "wall", img: wall13 };
            map[368].type = { name: "wall", img: wall13 };
            map[369].type = { name: "wall", img: wall13 };
            map[370].type = { name: "wall", img: wall13 };
            map[371].type = { name: "wall", img: wall13 };
            map[372].type = { name: "wall", img: wall13 };
            map[373].type = { name: "wall", img: wall13 };
            map[374].type = { name: "wall", img: wall13 };
            map[375].type = { name: "wall", img: wall14 };
            map[376].type = { name: "wall", img: wall14 };
            map[377].type = { name: "wall", img: wall14 };
            map[378].type = { name: "wall", img: wall14 };
            map[379].type = { name: "wall", img: wall1 };
            map[380].type = { name: "wall", img: wall1 };
            map[381].type = { name: "wall", img: wall1 };
            map[382].type = { name: "wall", img: wall1 };
            map[383].type = { name: "wall", img: wall9 };
            break;

        case 3:
            map[0].type = { name: "wall", img: wall14 };
            map[1].type = { name: "wall", img: wall14 };
            map[2].type = { name: "wall", img: wall14 };
            map[3].type = { name: "wall", img: wall14 };
            map[4].type = { name: "wall", img: wall14 };
            map[5].type = { name: "wall", img: wall14 };
            map[6].type = { name: "wall", img: wall14 };
            map[7].type = { name: "wall", img: wall14 };
            map[8].type = { name: "wall", img: wall14 };
            map[9].type = { name: "wall", img: wall14 };
            map[10].type = { name: "wall", img: wall14 };
            map[11].type = { name: "wall", img: wall14 };
            map[12].type = { name: "wall", img: wall14 };
            map[13].type = { name: "wall", img: wall14 };
            map[14].type = { name: "wall", img: wall14 };
            map[15].type = { name: "wall", img: wall14 };
            map[16].type = { name: "wall", img: wall14 };
            map[17].type = { name: "wall", img: wall14 };
            map[18].type = { name: "wall", img: wall14 };
            map[19].type = { name: "wall", img: wall14 };
            map[20].type = { name: "wall", img: wall14 };
            map[21].type = { name: "wall", img: wall14 };
            map[22].type = { name: "wall", img: wall14 };
            map[23].type = { name: "wall", img: wall14 };
            map[24].type = { name: "wall", img: wall14 };
            map[32].type = { name: "wall", img: wall14 };
            map[37].type = { name: "wall", img: wall14 };
            map[38].type = { name: "wall", img: wall14 };
            map[41].type = { name: "coin", img: coin_img };
            map[47].type = { name: "wall", img: wall14 };
            map[48].type = { name: "wall", img: wall14 };
            map[56].type = { name: "wall", img: wall14 };
            map[64].type = { name: "wall", img: wall14 };
            map[66].type = { name: "wall", img: wall14 };
            map[67].type = { name: "wall", img: wall14 };
            map[70].type = { name: "wall", img: wall14 };
            map[71].type = { name: "wall", img: wall14 };
            map[72].type = { name: "wall", img: wall14 };
            map[73].type = { name: "wall", img: wall14 };
            map[74].type = { name: "wall", img: wall14 };
            map[75].type = { name: "wall", img: wall14 };
            map[76].type = { name: "wall", img: wall14 };
            map[80].type = { name: "wall", img: wall14 };
            map[82].type = { name: "wall", img: wall14 };
            map[83].type = { name: "wall", img: wall14 };
            map[84].type = { name: "wall", img: wall14 };
            map[85].type = { name: "wall", img: wall14 };
            map[88].type = { name: "wall", img: wall14 };
            map[95].type = { name: "wall", img: wall14 };
            map[96].type = { name: "wall", img: wall14 };
            map[104].type = { name: "wall", img: wall14 };
            map[106].type = { name: "coin", img: coin_img };
            map[107].type = { name: "coin", img: coin_img };
            map[108].type = { name: "coin", img: coin_img };
            map[109].type = { name: "wall", img: wall14 };
            map[111].type = { name: "wall", img: wall14 };
            map[112].type = { name: "wall", img: wall14 };
            map[113].type = { name: "wall", img: wall14 };
            map[114].type = { name: "wall", img: wall14 };
            map[115].type = { name: "wall", img: wall14 };
            map[116].type = { name: "wall", img: wall14 };
            map[119].type = { name: "wall", img: wall14 };
            map[120].type = { name: "wall", img: wall14 };
            map[128].type = { name: "wall", img: wall14 };
            map[129].type = { name: "wall", img: wall14 };
            map[130].type = { name: "wall", img: wall14 };
            map[131].type = { name: "wall", img: wall14 };
            map[132].type = { name: "wall", img: wall14 };
            map[133].type = { name: "wall", img: wall14 };
            map[136].type = { name: "coin", img: coin_img };
            map[137].type = { name: "coin", img: coin_img };
            map[138].type = { name: "coin", img: coin_img };
            map[139].type = { name: "wall", img: wall14 };
            map[143].type = { name: "wall", img: wall14 };
            map[144].type = { name: "wall", img: wall14 };
            map[152].type = { name: "wall", img: wall14 };
            map[153].type = { name: "coin", img: coin_img };
            map[154].type = { name: "coin", img: coin_img };
            map[157].type = { name: "wall", img: wall14 };
            map[158].type = { name: "wall", img: wall14 };
            map[159].type = { name: "wall", img: wall14 };
            map[160].type = { name: "wall", img: wall14 };
            map[161].type = { name: "coin", img: coin_img };
            map[162].type = { name: "coin", img: coin_img };
            map[163].type = { name: "wall", img: wall14 };
            map[167].type = { name: "wall", img: wall14 };
            map[168].type = { name: "wall", img: wall14 };
            map[176].type = { name: "wall", img: wall14 };
            map[177].type = { name: "coin", img: coin_img };
            map[181].type = { name: "wall", img: wall14 };
            map[182].type = { name: "baul", img: baul_img };
            map[185].type = { name: "coin", img: coin_img };
            map[186].type = { name: "coin", img: coin_img };
            map[187].type = { name: "wall", img: wall14 };
            map[191].type = { name: "wall", img: wall14 };
            map[192].type = { name: "wall", img: wall14 };
            map[200].type = { name: "wall", img: wall14 };
            map[201].type = { name: "wall", img: wall14 };
            map[204].type = { name: "coin", img: coin_img };
            map[205].type = { name: "wall", img: wall14 };
            map[206].type = { name: "wall", img: wall13 };
            map[207].type = { name: "wall", img: wall13 };
            map[208].type = { name: "wall", img: wall13 };
            map[209].type = { name: "wall", img: wall13 };
            map[210].type = { name: "wall", img: wall13 };
            map[211].type = { name: "wall", img: wall13 };
            map[215].type = { name: "wall", img: wall14 };
            map[216].type = { name: "wall", img: wall14 };
            map[224].type = { name: "wall", img: wall14 };
            map[225].type = { name: "wall", img: wall14 };
            map[239].type = { name: "wall", img: wall14 };
            map[240].type = { name: "wall", img: wall14 };
            map[241].type = { name: "coin", img: coin_img };
            map[248].type = { name: "wall", img: wall14 };
            map[252].type = { name: "wall", img: wall13 };
            map[262].type = { name: "coin", img: coin_img };
            map[263].type = { name: "wall", img: wall14 };
            map[264].type = { name: "wall", img: wall14 };
            map[265].type = { name: "coin", img: coin_img };
            map[268].type = { name: "wall", img: wall14 };
            map[269].type = { name: "wall", img: wall14 };
            map[270].type = { name: "wall", img: wall14 };
            map[272].type = { name: "wall", img: wall14 };
            map[276].type = { name: "wall", img: wall14 };
            map[277].type = { name: "wall", img: wall14 };
            map[286].type = { name: "coin", img: coin_img };
            map[287].type = { name: "wall", img: wall14 };
            map[288].type = { name: "wall", img: wall14 };
            map[289].type = { name: "coin", img: coin_img };
            map[292].type = { name: "wall", img: wall14 };
            player.position.x = map[293].x;
            player.position.y = map[293].y;
            map[296].type = { name: "wall", img: wall14 };
            map[301].type = { name: "wall", img: wall14 };
            map[302].type = { name: "wall", img: wall14 };
            map[303].type = { name: "wall", img: wall14 };
            map[304].type = { name: "wall", img: wall14 };
            map[305].type = { name: "wall", img: wall14 };
            map[310].type = { name: "coin", img: coin_img };
            map[311].type = { name: "wall", img: wall14 };
            map[312].type = { name: "wall", img: wall14 };
            map[313].type = { name: "coin", img: coin_img };
            map[318].type = { name: "wall", img: wall14 };
            map[320].type = { name: "wall", img: wall14 };
            map[325].type = { name: "wall", img: wall14 };
            map[327].type = { name: "coin", img: coin_img };
            map[328].type = { name: "coin", img: coin_img };
            map[329].type = { name: "wall", img: wall14 };
            map[335].type = { name: "wall", img: wall14 };
            map[336].type = { name: "wall", img: wall14 };
            map[339].type = { name: "coin", img: coin_img };
            map[342].type = { name: "wall", img: wall14 };
            map[349].type = { name: "wall", img: wall14 };
            map[355].type = { name: "coin", img: coin_img };
            map[359].type = { name: "wall", img: wall14 };
            map[360].type = { name: "wall", img: wall14 };
            map[361].type = { name: "wall", img: wall14 };
            map[362].type = { name: "wall", img: wall14 };
            map[363].type = { name: "wall", img: wall14 };
            map[364].type = { name: "wall", img: wall14 };
            map[365].type = { name: "wall", img: wall14 };
            map[366].type = { name: "wall", img: wall14 };
            map[367].type = { name: "wall", img: wall14 };
            map[368].type = { name: "wall", img: wall14 };
            map[369].type = { name: "wall", img: wall14 };
            map[370].type = { name: "wall", img: wall14 };
            map[371].type = { name: "wall", img: wall14 };
            map[372].type = { name: "wall", img: wall14 };
            map[373].type = { name: "wall", img: wall14 };
            map[374].type = { name: "wall", img: wall14 };
            map[375].type = { name: "wall", img: wall14 };
            map[376].type = { name: "wall", img: wall14 };
            map[377].type = { name: "wall", img: wall14 };
            map[378].type = { name: "wall", img: wall14 };
            map[379].type = { name: "wall", img: wall14 };
            map[380].type = { name: "wall", img: wall14 };
            map[381].type = { name: "wall", img: wall14 };
            map[382].type = { name: "wall", img: wall14 };
            map[383].type = { name: "wall", img: wall14 };
            break;
    }

}

