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
       
    //Handle pet buttons NOTE
    // TODO
    // REVIEW 
    
    handleFeedPet() {
    const feedButton = document.getElementById('feed') 
    this.hunger--;
    }

    handleSleepButton() {
    const sleepButton = document.getElementById('sleep')
    this.sleepiness--;
    }

    handlePetPlayButton() {
    const petPlayButton = document.getElementById('play')
    this.boredom--;  
    }

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
    };    

};
    function handleStartGame(petInstance) { 
     setInterval(function () {
         
        petInstance.hungerTimer()
        petInstance.sleepinessTimer()   
        petInstance.boredomTimer()

        }, 1500);    
    };

    function handleStartAgeInterval(petInstance) {
      setInterval(function () {

        petInstance.startAgeInterval()
      }, 3500);
    };
    
let pet = new Tamagotchi('Pet')        // name pet here, DOM manipulation, textbox submit 





const startButton = document.getElementById
('startGame');

startButton.addEventListener('click',
    function (){
        handleStartGame(pet);
        handleStartAgeInterval(pet);
    }
);




const feedButton = document.getElementById
('feed');

feedButton.addEventListener('click',
    function (){
        pet.handleFeedPet()
    }
);



const sleepButton = document.getElementById
('sleep');

sleepButton.addEventListener('click',
    function (){
        pet.handleSleepButton()
    }
);



const petPlayButton = document.getElementById
('play');

petPlayButton.addEventListener('click',
    function (){
        pet.handlePetPlayButton()
    }
);


