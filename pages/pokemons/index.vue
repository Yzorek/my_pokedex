<template>
  <b-container class="test">
    <b-row align-h="center">
      <h1>All pokemons here</h1>
    </b-row>
    <b-row align-h="center" class="mb-4">
      <Searchbar v-on:inputChanged="searchPokemon"/>
    </b-row>
    <b-row align-h="center">
      <PokemonCard class="pokemon-card" :name="name" :index="index" :type="type" :sprite="sprite"
      :stats="stats"/>
      <PokemonCard class="pokemon-card" :name="name" :index="index" :type="type" :sprite="sprite"
      :stats="stats"/>
      <PokemonCard class="pokemon-card" :name="name" :index="index" :type="type" :sprite="sprite"
      :stats="stats"/>
      <PokemonCard class="pokemon-card" :name="name" :index="index" :type="type" :sprite="sprite"
      :stats="stats"/>
    </b-row>
  </b-container>
</template>

<style>
.test {
  display: flex;
  flex-direction: column;

}

.pokemon-card {
  margin: 20px;
}
</style>

<script>
import axios from 'axios'

export default {
  async mounted () {
    this.searchPokemon(1);
  },

  data () {
    return {
      name: '',
      index: '',
      sprite: '',
      type: [],
      stats: {}
    }
  },

  methods: {
    async searchPokemon(index) {
    let res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + index + "/");
      this.name = res.data.name;
      this.index = index;
      this.type = res.data.types.map((e) => e.type.name);
      this.sprite = res.data.sprites.front_default;
      this.stats = {
        hp: res.data.stats.find((e) => e.stat.name === "hp").base_stat,
        atk: res.data.stats.find((e) => e.stat.name === "attack").base_stat,
        spa: res.data.stats.find((e) => e.stat.name === "special-attack").base_stat,
        def: res.data.stats.find((e) => e.stat.name === "defense").base_stat,
        spd: res.data.stats.find((e) => e.stat.name === "special-defense").base_stat,
        spe: res.data.stats.find((e) => e.stat.name === "speed").base_stat
      }
    }
  }
}
</script>
