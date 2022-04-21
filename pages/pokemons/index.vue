<template>
  <b-container class="test">
    <b-row align-h="center">
      <h1>All pokemons here</h1>
    </b-row>
    <b-row align-h="center" class="my-4">
      <Searchbar v-on:inputChanged="searchPokemonByName"/>
    </b-row>
    <b-row align-h="center">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-row align-h="center">
            <div v-for="index in 6">
              <b-skeleton class="pokemon-card" width="300px" height="350px"></b-skeleton>
            </div>
          </b-row>
        </template>
        <div v-for="pokemon in filteredPokemons">
          <PokemonCard class="pokemon-card" :pokemon="pokemon"/>
        </div>
      </b-skeleton-wrapper>
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
    this.loading = true;

    console.log(this.storedPokemons.length);
    if (this.storedPokemons.length !== 0) {
      this.storedPokemons.forEach((pokemon) => {
        this.pokemons.push(pokemon);
        this.filteredPokemons = this.pokemons;
      });
    }
    else {
      let pokemonPromises = [];
      for (let i = 0; i < 898; i++) {
        pokemonPromises.push(this.searchPokemon(i + 1));
      }
      let pokemons = await Promise.all(pokemonPromises);
      pokemons.forEach((res) => {
        this.pokemons.push(this.createPokemonFromJSON(res));
      });
      this.storePokemons(this.pokemons);
      this.filteredPokemons = this.pokemons;
    }

    this.loading = false;
  },

  data () {
    return {
      loading: false,
      pokemons: [],
      filteredPokemons: []
    }
  },

  computed: {
    storedPokemons() {
      return this.$store.state.pokemons.pokemons;
    }
  },

  methods: {
    async searchPokemon(index) {
      return (axios.get("https://pokeapi.co/api/v2/pokemon/" + index + "/"));
    },

    storePokemons(pokemons) {
      this.$store.commit('pokemons/populate', pokemons);
    },

    searchPokemonByName(value) {
      this.filteredPokemons = this.pokemons.filter((pokemon) => {
        if (value !== '') {
          if (pokemon.name.indexOf(value) !== -1) {
            return (true);
          }
          else {
            return (false);
          }
        }
        else {
          return (true);
        }
      })
    },

    createPokemonFromJSON(res) {
      return (
        {
          name: res.data.name,
          index: res.data.id,
          type: res.data.types.map((e) => e.type.name),
          sprite: res.data.sprites.front_default,
          stats: {
            hp: res.data.stats.find((e) => e.stat.name === "hp").base_stat,
            atk: res.data.stats.find((e) => e.stat.name === "attack").base_stat,
            spa: res.data.stats.find((e) => e.stat.name === "special-attack").base_stat,
            def: res.data.stats.find((e) => e.stat.name === "defense").base_stat,
            spd: res.data.stats.find((e) => e.stat.name === "special-defense").base_stat,
            spe: res.data.stats.find((e) => e.stat.name === "speed").base_stat
          }
        }
      )
    }
  }
}
</script>
