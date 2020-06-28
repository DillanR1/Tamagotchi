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
       
    
showPetInfo() {
    const displayDiv = document.getElementById(`petInfo`);
    displayDiv.innerHTML = (`<p>Pet name: ${pet.name}</p>
                             <p>Pet Age: ${pet.age}</p>
                             <p>Pet Hunger: ${pet.hunger}</p>
                             <p>Pet Sleepiness: ${pet.sleepiness}</p>
                             <p>Pet Boredom: ${pet.boredom}</p>`);
};

    handleFeedPet() {
    const feedButton = document.getElementById('feed'); 
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
            this.age++;
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
        petInstance.showPetInfo()
        petInstance.hungerTimer()
        petInstance.sleepinessTimer()   
        petInstance.boredomTimer()
        }, 2500);    
    };

function handleStartAgeInterval(petInstance) {
      setInterval(function () {
        petInstance.startAgeInterval()
      }, 6000);
};

let petName = window.prompt('Name Your Pet!');

const pet = new Tamagotchi(petName);

const newDiv = document.createElement(`div`);

newDiv.setAttribute(`id`, `petInfo`);

document.body.appendChild(newDiv);

const startButton = document.getElementById('startGame');

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
        500
    }
);


