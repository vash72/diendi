import { Player } from './character';

export function rollRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


export function rollSix() {
  return rollRange(1, 6);
}

export function rollEight() {
  return rollRange(1, 8);
}

export function getAbilityScore() {

  const rolls = [];
  for (let index = 0; index < 4; index++) {
    rolls[index] = rollSix();
  }

  const smallest = Math.min(...rolls);

  let abilityScore = -smallest;
  for (const roll of rolls) {
    abilityScore += roll;
  }

  return abilityScore;
}

export function getAbilityModifier(abilityScore) {
  return Math.floor((abilityScore - 10) / 2);
}



export function savePlayer(player){
  const playerAsString = JSON.stringify(player);
  localStorage.setItem('player',playerAsString);
}

export function loadPlayer(){
  const playerAsString = localStorage.getItem('player');
  const jsonPlayer = JSON.parse(playerAsString);
  return Player.fromSave(jsonPlayer);
}