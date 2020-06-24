

class Tamagotchi {
    constructor  (name) {
        this.name = name;
        this.age = 0; 
        this.hunger = 0; 
        this.sleepiness = 0;
        this.boredom = 0;
  
     startButton = document.getElementById
        ('startGame');

     startButton.addEventListener('click',
     handleStartGame);   










    
    function handleStartGame() {
        console.log('Game is Running!');

      startTimer()
    }


    hungerTimer = function(){
        const timer = setInterval(function () {
            if (time > 0){
                time--;
                console.log(time);  
                } else {
                console.log("Timer Reset");
           }    clearInterval(timer);    
        
        }, 5000);
        
    }
};
   /*  sleepinessTimer = function(){
        const timer = setInterval(function () {
            if (time > 0){
                time--;
                console.log(time);
};

    
    


     boredomTimer = function(){
        const timer = setInterval(function () {
            if (time > 0){
                time--;
                console.log(time);











// give constructor function default values 
//create functions inside of class but OUTSIDE of constructor

*/

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

        
    //const startButton = document.getElementById('startGame');

    //startButton.addEventListener('click', handleStartGame);

    /* NOTE pet age, hunger, sleepiness, and boredom need functions to increment
    once start game is pushed. They will appear as an alert to the player every minute. 
    The alerts should be randomized. */ 


    


    