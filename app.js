
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
    (this.hunger <= 11||this.sleepiness <= 11||this.boredom <= 11); {
    const displayDiv = document.getElementById(`petInfo`);
    displayDiv.innerHTML = 
  (`<p>Pet name: ${pet.name}</p>
    <p>Pet Age: ${pet.age}</p>
    <p>Pet Hunger: ${pet.hunger}</p>
    <p>Pet Sleepiness: ${pet.sleepiness}</p>
    <p>Pet Boredom: ${pet.boredom}</p>`);
    
    }    
};
    handleFeedPet() {
    const feedButton = document.getElementById('feed'); 
    this.hunger--;
    }
    
    handleSleepButton() {
    const sleepButton = document.getElementById('sleep');
    this.sleepiness--;
    }

    handlePetPlayButton() {
    const petPlayButton = document.getElementById('play');
    this.boredom--;  
    }

    startAgeInterval() { 
        if (this.hunger === 11||this.sleepiness === 11||this.boredom === 11) {
            document.getElementById('startGame').disabled == true;
            clearInterval(handleStartAgeInterval, 0);
            }else{
            this.age++;
            console.log('age: ', this.age); 
        }
    };    
    hungerTimer() { 
        if (this.hunger === 11) {
            clearInterval(handleStartGame, 0);
            document.getElementById('feed').disabled === true;
            document.getElementById('petInfo');
            document.body.removeChild(newImg);
            document.body.appendChild(newImg2);
            window.alert('Your pet died of starvation');
            }else{this.hunger++;
            console.log('hunger: ', this.hunger);     
    
        }        
    };
    sleepinessTimer() {
        if (this.sleepiness === 11) {
            clearInterval(handleStartGame, 0);
            document.getElementById('sleep').disabled === true;
            document.getElementById('petInfo');
            document.body.removeChild(newImg);
            document.body.appendChild(newImg2);
            window.alert('Your pet died of exhaustion');
            }else{
            this.sleepiness++;
            console.log('sleepiness: ', this.sleepiness);
        }    
    };    
    boredomTimer() {
        if (this.boredom === 11) {
            clearInterval(handleStartGame, 0);
            document.getElementById('play').disabled === true;
            document.getElementById('petInfo');
            document.body.removeChild(newImg);
            document.body.appendChild(newImg2);
            window.alert('Your pet was bored to death');
            }else{
            this.boredom++
            console.log('boredom: ', this.boredom);
        }    
    };   
   /* killPet() {
        if (this.hunger > 10 || this.sleepiness > 10 || this.boredom > 10) {
       document.getElementById('startGame').disabled = true;
       document.getElementById('feed').disabled = true;
       document.getElementById('sleep').disabled = true;
       document.getElementById('play').disabled = true;
       clearInterval(handleStartGame) 
     }  
    }; 
   
               // NOT WORKING / NOT FINISHED YET
    morphPet() {
        (age === 3)
        (age === 6)
        (age === 9)
    }
*/
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
      }, 4000);
};

let petName = window.prompt('Name Your Pet!');
const pet = new Tamagotchi(petName);

const newImg = document.createElement(`img`);
newImg.setAttribute(`src`, 'https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png');
document.body.appendChild(newImg);


const newImg2 = document.createElement(`img`)
newImg2.setAttribute(`src`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQCc36IfX0NdFP5spN9b45UYoWJtljAiZSrQ&usqp=CAU');
//document.body.appendChild(newImg2);

const newDiv = document.createElement(`div`);
newDiv.setAttribute(`id`, `petInfo`);
document.body.appendChild(newDiv);

const newDiv2 = document.createElement(`div`);
newDiv.setAttribute(`id`, `petInfo`);
document.body.appendChild(newDiv);



const startButton = document.getElementById('startGame');
startButton.addEventListener('click',
    function (){
        handleStartGame(pet);
        handleStartAgeInterval(pet);
    }
);

const feedButton = document.getElementById('feed');
feedButton.addEventListener('click',
    function (){
        pet.handleFeedPet()
    }
);

const sleepButton = document.getElementById('sleep');
sleepButton.addEventListener('click',
    function (){
        pet.handleSleepButton()
    }
);

const petPlayButton = document.getElementById('play');
petPlayButton.addEventListener('click',
    function (){
        pet.handlePetPlayButton()
    }
);


