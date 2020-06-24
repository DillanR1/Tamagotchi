

class Tamagotchi {
    constructor  (name) {
        this.name = name;
        this.age = 0; 
        this.hunger =0; 
        this.sleepiness = 0;
        this.boredom = 0;
  
    }
     hungerTimer = function(){
        const timer = setInterval(function () {
            if (time > 0){
                time--;
                console.log(time);   //inside of set interval function, add interval
                                     // google set interval syntax.
            }
        })

    }
};














const tamagotchi1 = new Tamagotchi ("D")

const tamagotchi2 = new Tamagotchi ("Yulia",0,0,0,0)

// give constructor function default values 
//create functions inside of class but OUTSIDE of constructor



/*

let time = 30;

function hungerTimer(){
    const timer = setInterval(function () {
        if (time > 0) 
            time--;
            console.log(time);
        }
}
const timer = setInterval(function () 
        
    if(time = 0) {hunger || (math.random <= .50); 
        hunger++}
        console.log(hunger); 
*/
        
    //const startButton = document.getElementById('startGame');

    //startButton.addEventListener('click', handleStartGame);

    /* NOTE pet age, hunger, sleepiness, and boredom need functions to increment
    once start game is pushed. They will appear as an alert to the player every minute. 
    The alerts should be randomized. */ 


    


     /*create function for timer
        function handleStartGame () {
            console.log('Start Game clicked!')
                */
