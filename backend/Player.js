import { generateEquation } from "./MathCal.js";

class Player {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health; 
        this.attack = attack;
    }

    getName() {
        return this.name;
    }

    getHealth() {
        return this.health;
    }

    attacked() {

        this.health = Math.max(this.health - this.attack, 0); 
        console.log(`${this.name} was attacked! Health is now ${this.health}`);
    }
}


let hitCount = 0;

function attacking(player1, player2) {
    hitCount++;
    player2.attacked();
    if (hitCount == 3) {
        console.log(`Math attack!`);
        generateEquation();
        hitCount = 0;
    }
}


//

const player1 = new Player("Nora", 100, 15);
const player2 = new Player("Enemy", 100, 15);
attacking(player1, player2);  
attacking(player2, player1);  
attacking(player1, player2);