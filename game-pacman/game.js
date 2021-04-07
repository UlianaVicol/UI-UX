
let pac_x  = parseInt(1+Math.random()*9)
let pac_y  = parseInt(1+Math.random()*9)

let coin_x = 2
let coin_y = 2

let bomb_x = 5
let bomb_y = 5

let score  = 0





function action(){

    switch(event.key){
        case"ArrowDown":  pac_y++; break
        case"ArrowUp":    pac_y--; break
        case"ArrowRight": pac_x++; break
        case"ArrowLeft":  pac_x--; break
    }
    if(pac_x == coin_x && pac_y == coin_y){
        score += 10
    }
    renderMap()
}



function renderMap(){
    gameMap.innerHTML = ""
    for (let y = 1; y <= 10; y++){
        for (let x = 1; x <= 10; x++){
            if(x == pac_x && y == pac_y){
                gameMap.innerHTML += `<div class="pac"></div>`
            }else if(x == coin_x && y == coin_y){
                gameMap.innerHTML += `<div class="coin"></div>`
            }else if(x == bomb_x && y == bomb_y){
                gameMap.innerHTML += `<div class="bomb"></div>`
            }
            else{
            gameMap.innerHTML += `<div></div>`
            }
        }
    }
    gameScore.innerHTML = `Score:  ${score}`
}
renderMap()

// 1: limita pentru deplasare - OK
// 2: adaugare bomba(-20), viata(0...100) - OK
// 3: coin_state, bomb_state - pentru afisare - OK
// 4: adaugarea mai multor bombe si bani - OK
// 5: coordonate aleatorii (parseInt(1+Math.random()*9)) - OK









// HW1: a) add limits (1,10) to pacman movement  - adaugati limite aceeasi chestie ca si data trecuta(1,10) limita hartii
//      b) add bomb, ad hp (health points) 0...100- adaugati bomba, respectiv hp si logica pentru bomba ca sasi piarda punctele din viata 0..100 fiecare  bomba ii scade (-20 unitati) si sa afisam jos cite vieti are
//      c) add coin_state, bomb_state  -  adaugati 2 variabile numite coin_state si bomb_state - false/true care vor tine minte starea monedei sau starea bombei (ex cind ea se duce si culege moneda ea deja nu mai apare pe ecran trece in alta stare fals)
// aceste variabile trebuie schimbate ca urmare la movement miscare cind calca pe ea se schimba la starea din true in false
// dar ele trebuie sa influienteze aceste variabile (coin_state si bomb_state)> functia renderMap()

// HW4 *: add more coins & bombscear fi daca ar exista 2-3 coins si 2- bombe
// HW5*:  add random coords - ar fi bine de adaugat aliatoriu ca moneda sa apara pe o alta patratica sau in alta sus sau in jos sau in stinga dreapta nu conteaza
// ori cu functia 1+ Math.random() * 9 sau cu parseInt(1+ Math.random() * 9)