import { rollRange, getAbilityScore, getAbilityModifier } from './lib'

export class Character {

  hitPoints;

  strenght;
  strenghtModifier;

  dexterity;
  dexterityModifier;

  constitution;
  constitutionModifier;

  level;

  hitPointsBase;

  maxDamage;

  constructor(hitPointsBase, maxDamage) {

    this.maxDamage = maxDamage;
    this.hitPointsBase = hitPointsBase;

    this.strenght = getAbilityScore();
    this.strenghtModifier = getAbilityModifier(this.strenght)

    this.dexterity = getAbilityScore();
    this.dexterityModifier = getAbilityModifier(this.dexterity)

    this.constitution = getAbilityScore();
    this.constitutionModifier = getAbilityModifier(this.constitution)

    this.level = 1;

    this.hitPoints = this.hitPointsBase;
  }

  hit() {
    const rollResult = rollRange(1, this.maxDamage) + this.strenghtModifier;
    return Math.max(0,rollResult);
  }
}

export class Player extends Character {

  constructor() {
    super(8, 8);

    this.hitPoints += getAbilityModifier(this.constitution);
  }

  static fromSave(jsonPlayer) {

    const player = new Player();

    player.maxDamage = jsonPlayer.maxDamage;

    player.strenght = jsonPlayer.strenght;
    player.strenghtModifier = getAbilityModifier(player.strenght)

    player.dexterity = jsonPlayer.dexterity;
    player.dexterityModifier = getAbilityModifier(player.dexterity)

    player.constitution = jsonPlayer.constitution;
    player.constitutionModifier = getAbilityModifier(player.constitution)

    player.level = jsonPlayer.level;

    player.hitPoints = jsonPlayer.hitPoints;

    return player;
  }
}

export class Goblin extends Character {

  constructor() {
    super(6, 6);
  }
}