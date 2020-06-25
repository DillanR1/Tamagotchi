console.log("Hello!!!");

class Tamagotchi {
    constructor  (name) {
        this.name = name;
        this.age = 0; 
        this.hunger = 0; 
        this.sleepiness = 0;
        this.boredom = 0;
        this.time = 0;
    };
       

        // TODO ADD EVENT LISTENER FOR INTERACTIVE BUTTONS
        // TODO ADD INTERACTIVE BUTTONS
        // EVENT LISTENER WILL DECRIMENT

    startHungerTimer(){ 
        const timer = setInterval(function () {
            if (this.time > 0){
                this.time--;
                console.log(this.time);  
                } else {
                console.log('Hunger Timer Reset');
                clearInterval(timer);    
                }    
            }, 5000);
        
    }
    sleepinessTimer = function(){
        const timer = setInterval(function () {
            if (time > 0){
                time--;
                console.log(time);
                } else {  
                console.log('Sleepiness Timer Reset');    
           }    clearInterval(timer);
        }, 9000);   
    }    
    boredomTimer = function(){
        const timer = setInterval(function () {
            if (time > 0){
                time--;
                console.log(time);
                } else {  
                console.log('Boredom Timer Reset');    
           }    clearInterval(timer);
        }, 15000);   
    }    

};

    startAgeInterval = function(){
        if (time > 0){
            time --;
            console.log(time);
            this.age++;
            } else {
    }       console.log();

};
 
    

    handleStartGame() {
        console.log('Game is Running');

      this.startHungerTimer();
      this.startSleepinessTimer();   
      this.startBoredomTimer();
      this.startAgeInterval();
    }


   
};
 



    
    


 
    
let pet = new Tamagotchi('Pet')

const startButton = document.getElementById
('startGame');

startButton.addEventListener('click',
    function (){
        pet.handleStartGame()
    }
);



// OLD CODE TO START TIMER


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



    /* NOTE pet age, hunger, sleepiness, and boredom need functions to increment
    once start game is pushed. They will appear as an alert to the player every minute. 
    The alerts should be randomized. */ 

    
