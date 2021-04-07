
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

// 1: limita pentru deplasare 
// 2: adaugare bomba(-20), viata(0...100) 
// 3: coin_state, bomb_state - pentru afisare 
// 4: adaugarea mai multor bombe si bani - OK
// 5: coordonate aleatorii (parseInt(1+Math.random()*9)) 



