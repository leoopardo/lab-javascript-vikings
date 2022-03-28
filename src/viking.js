// Soldier
class Soldier {
  constructor (health, strength){
    this.health = health;
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health - this.damage
  }
}
// Viking
class Viking{
  constructor (name, health, strength){
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  };
  receiveDamage(damage){
    if (this.health - damage > 0){
      return `${this.name} has received ${damage} points of damage`
    } else {return `${this.name} has died in act of combat`}
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health + this.damage
    if (this.health - damage >= 1){
      return `A Saxon has received ${damage} points of damage`
    } else {return "A Saxon has died in combat"}
  }
}

// War
let vikings = []
let saxons = new Saxon(1000, 100)
class War {
  addViking(Viking){
    this.addViking = vikings.push(Viking)
  }
  addSaxon(Saxon) {}
  
  vikingAttack(){
  }
  saxonAttack(){
  }
  showStatus(){
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
