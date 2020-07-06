// Pikachu repopulates every interval. My pet doesn't morph, but he sure does multiply....giggity

class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.time = 0;
    };


    showPetInfo() {
        if (this.hunger <= 11 || this.sleepiness <= 11 || this.boredom <= 11) {
            const displayDiv = document.getElementById(`petInfo`);
            displayDiv.innerHTML =
                (`<p>Pet name: ${pet.name}</p>
    <p>Pet Age: ${pet.age}</p>
    <p>Pet Hunger: ${pet.hunger}</p>
    <p>Pet Sleepiness: ${pet.sleepiness}</p>
    <p>Pet Boredom: ${pet.boredom}</p>`);
           const newImg = document.createElement(`img`);
            newImg.setAttribute(`src`, 'https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png');
            document.body.appendChild(newImg);
        } else {
            const newImg2 = document.createElement(`img2`)
            newImg2.setAttribute(`src`, 'https://www.deviantart.com/widheim/art/Dead-Pikachu-Drawing-715374200');
            document.body.appendChild(newImg2);
        }
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
        if (this.hunger >= 11 || this.sleepiness >= 11 || this.boredom >= 11) {
            clearInterval(handleStartAgeInterval, 0);
            document.getElementById('startGame').disabled = true;
        } else {
            this.age++;
            console.log('age: ', this.age);
        }
    };
    hungerTimer() {
        if (this.hunger >= 11) {
            clearInterval(handleStartGame, 0);
            document.getElementById('feed').disabled = true;
            window.alert('Your pet died of starvation')
            const deadImg = document.createElement(`img2`)
            newImg2.setAttribute(`src`, 'https://www.deviantart.com/widheim/art/Dead-Pikachu-Drawing-715374200');
            document.body.appendChild(newImg2);
        } else {
            this.hunger++;
            console.log('hunger: ', this.hunger);

        }
    };
    sleepinessTimer() {
        if (this.sleepiness >= 11) {
            clearInterval(handleStartGame, 0);
            document.getElementById('sleep').disabled = true;
            window.alert('Your pet died of exhaustion')
            const deadImg = document.createElement(`img2`)
            newImg2.setAttribute(`src`, 'https://www.deviantart.com/widheim/art/Dead-Pikachu-Drawing-715374200');
            document.body.appendChild(newImg2);
        } else {
            this.sleepiness++;
            console.log('sleepiness: ', this.sleepiness);
        }
    };
    boredomTimer() {
        if (this.boredom >= 11) {
            clearInterval(handleStartGame, 0);
            document.getElementById('play').disabled = true;
            window.alert('Your pet was bored to death');
            const deadImg = document.createElement(`img2`)
            newImg2.setAttribute(`src`, 'https://www.deviantart.com/widheim/art/Dead-Pikachu-Drawing-715374200');
            document.body.appendChild(newImg2);
        } else {
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
/*
const newImg = document.createElement(`img`);
newImg.setAttribute(`src`, 'https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png');
document.body.appendChild(newImg);
*/

const newImg2 = document.createElement(`img2`)
newImg2.setAttribute(`src`, 'https://https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5554f72f-5675-4504-aaff-fcc46bbb8817/dbtwy9k-7fa0f5f4-8b18-4e1f-8f8f-5ec4262cd2f9.jpg/v1/fill/w_1024,h_967,q_75,strp/dead_pikachu_drawing_by_widheim_dbtwy9k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05NjciLCJwYXRoIjoiXC9mXC81NTU0ZjcyZi01Njc1LTQ1MDQtYWFmZi1mY2M0NmJiYjg4MTdcL2RidHd5OWstN2ZhMGY1ZjQtOGIxOC00ZTFmLThmOGYtNWVjNDI2MmNkMmY5LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4mhzNU-FJZGB0mffg8Cn1DR0ooCiAvmMxeo015uqPsU');
document.body.appendChild(newImg2);

const newDiv = document.createElement(`div`);
newDiv.setAttribute(`id`, `petInfo`);
document.body.appendChild(newDiv);


const startButton = document.getElementById('startGame');
startButton.addEventListener('click',
    function () {
        handleStartGame(pet);
        handleStartAgeInterval(pet);
    }
);

const feedButton = document.getElementById('feed');
feedButton.addEventListener('click',
    function () {
        pet.handleFeedPet()
    }
);

const sleepButton = document.getElementById('sleep');
sleepButton.addEventListener('click',
    function () {
        pet.handleSleepButton()
    }
);

const petPlayButton = document.getElementById('play');
petPlayButton.addEventListener('click',
    function () {
        pet.handlePetPlayButton()
    }
);


