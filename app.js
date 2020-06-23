

class Tamagotchi {
    constructor  (name, age = 0, hunger = 0,sleepiness = 0,boredom = 0) {
        this.name = name;
        this.age = age; 
        this.hunger = hunger|| (math.random <= .50) 
            hunger++;
             console.log(this.hunger);
        
             this.sleepiness = sleepiness|| (math.random <= .50) 
        sleepiness++;
         console.log(this.sleepiness)
        
         this.boredom = boredom|| (math.random <= .50) 
        boredom++;
    }
};




    //const startButton = document.getElementById('startGame');

    //startButton.addEventListener('click', handleStartGame);

    /* NOTE pet age, hunger, sleepiness, and boredom need functions to increment
    once start game is pushed. They will appear as an alert to the player every minute. 
    The alerts should be randomized. 


    */


    /* create function for timer
    function handleStartGame () {
        console.log('Start Game clicked!')

        const timer = setInterval(function () {
            time++;
            console.log(time);
            1000
         })
    }

    */

