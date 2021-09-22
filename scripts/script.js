let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputTime = document.getElementById("time");


let resultado = document.getElementById("results");


function calcular(){
    console.log("Calculando...");

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let time = inputTime.value;

    let qdtTotalSteak = steakPP(time) * adults + (steakPP(time) * kids)
    let qdtTotalBeer = beerPP(time) * adults; 
    let qdtTotalDrink = drinkPP(time) * adults + (drinkPP(time) * kids)
}

function steakPP(time){
    if(time >= 6){
        return 650;
    }else{
        return 400;
    }
}


function beerPP(time){
    if(time >= 6){
        return 2000;
    }else{
        return 1200;
    }
}


function drinkPP(time){
    if(time >= 6){
        return 1500;
    }else{
        return 1000;
    }
}