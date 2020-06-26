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
       
    handlePetNeeds() {
        this.hunger
        this.sleepiness
        this.boredom  
      };
      
    startAgeInterval() {
            this.age++
            console.log('age: ', this.age); 
    };
    hungerTimer() { 
                this.hunger++;
                console.log('hunger: ', this.hunger);     
    };
    sleepinessTimer() {
                this.sleepiness++;
                console.log('sleepiness: ', this.sleepiness);    
    };    
    boredomTimer() {
                this.boredom++
                console.log('boredom: ', this.boredom);
    }    

};
    function handleStartGame(petInstance) { 
     setInterval(function () {
         
        petInstance.hungerTimer()
        petInstance.sleepinessTimer()   
        petInstance.boredomTimer()

        }, 1500);    

    };
    
let pet = new Tamagotchi('Pet')

const startButton = document.getElementById
('startGame');

startButton.addEventListener('click',
    function (){
        handleStartGame(pet)
    }
);


const feedButton = document.getElementById
('feed');

feedButton.addEventListener('click',
    function (){
        pet.handlePetNeeds()
    }
);

const sleepButton = document.getElementById
('sleep');

sleepButton.addEventListener('click',
    function (){
        pet.handlePetNeeds()
    }
);

const petPlayButton = document.getElementById
('play');

petPlayButton.addEventListener('click',
    function (){
        pet.handlePetNeeds()
    }
);


