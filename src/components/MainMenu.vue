<template>
  <div v-if="player == null">
    <button @click="newGame">Nuova partita</button>
    <button @click="loadGame">Continua</button>
  </div>
  <button @click="debug">Debug</button>

  <div v-if="player != null">
    <button @click="saveGame">Salva partita</button>
    <button @click="backToMainMenu">Menu principale</button>
    <button @click="fight">COMBATTIIIII!!!</button>
  </div>

  <div v-if="player != null">
    <div class="">PF {{ player.hitPoints }}</div>
    <div class="">
      Forza {{ player.strenght }} | {{ player.strenghtModifier }}
    </div>
    <div class="">
      Destrezza {{ player.dexterity }} | {{ player.dexterityModifier }}
    </div>
    <div class="">
      Costituzione {{ player.constitution }} | {{ player.constitutionModifier }}
    </div>
  </div>
</template>

<script>
import { Goblin, Player } from "../lib/character";
import { loadPlayer, savePlayer } from "../lib/lib";

export default {
  data() {
    return {
      player: null,
    };
  },
  methods: {
    loadGame() {
      this.player = loadPlayer();
    },
    newGame() {
      const player = new Player();
      this.player = player;
    },
    saveGame() {
      savePlayer(this.player);
    },
    backToMainMenu() {
      // non ti chiede la conferma!
      this.player = null;
    },
    fight() {
      // generate oppo
      const goblin = new Goblin();

      // FIGHT

      console.log(goblin.hit());

      // console.log(this.player.hit());

    },
    debug() {
      // console.log(JSON.stringify(this.player, null, 2));
      console.log(this.player);
    },
  },
};
</script>

<style>
</style>