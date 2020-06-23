

class Tamagotchi
    constructor (name, age = 0, hunger = 0,sleepiness = 0,boredom = 0);{
        this.name = name;
        this.age = age;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
    }



    const startButton = document.getElementById('startGame');

    startButton.addEventListener('click', handleStartGame);

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

