<template>
  <div class="card text-center" style="width: 18rem;">
    <img class="card-img-top mx-auto pokemon-img" :src="sprite" alt="Card image cap">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="firstline">
          <h5 class="text-capitalize card-title">{{ name }}</h5>
          <h5 class="card-title">#{{ index }}</h5>
        </div>
        <div class="secondline">
          <div class="row justify-content-around">
            <div class="card" v-for="element in type" :style="types.find((e) => e.name === element).color">
              <span class="font-weight-bold typetext">
                {{ element.toUpperCase() }}
              </span>
            </div>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row justify-content-between">
          <div class="column">
            <div> HP </div>
            <div> {{ stats.hp }} </div>
          </div>
          <div class="column">
            <div> ATK </div>
            <div> {{ stats.atk }} </div>
          </div>
          <div class="column">
            <div> SPA </div>
            <div> {{ stats.spa }} </div>
          </div>
          <div class="column">
            <div> DEF </div>
            <div> {{ stats.def }} </div>
          </div>
          <div class="column">
            <div> SPD </div>
            <div> {{ stats.spd }} </div>
          </div>
          <div class="column">
            <div> SPE </div>
            <div> {{ stats.spe }} </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.typetext {
  color: white;
  padding: 2px;
  font-size: 14px;
}
.pokemon-img {
  height: 50%;
  width: 50%;
}

.firstline {
  display: flex;
  justify-content: space-between;
}

.secondline {
  margin-top: 8px;
}
</style>

<script>
export default {
    name: 'PokemonCard',
    props: ["name", "index", "type", "sprite", "stats"],

    data () {
      return {
        types: [
          {
            name: 'normal',
            color: 'background-color: #A8A878',
          },
          {
            name: 'grass',
            color: 'background-color: #78C850',
          },
          {
            name: 'fire',
            color: 'background-color: #F08030',
          },
          {
            name: 'water',
            color: 'background-color: #6890F0',
          },
          {
            name: 'electric',
            color: 'background-color: #FFC500',
          },
          {
            name: 'ice',
            color: 'background-color: #98D8D8',
          },
          {
            name: 'fighting',
            color: 'background-color: #C03028',
          },
          {
            name: 'poison',
            color: 'background-color: #A040A0',
          },
          {
            name: 'ground',
            color: 'background-color: #E0C068',
          },
          {
            name: 'flying',
            color: 'background-color: #A890F0',
          },
          {
            name: 'psychic',
            color: 'background-color: #F85888',
          },
          {
            name: 'bug',
            color: 'background-color: #B1BF23',
          },
          {
            name: 'rock',
            color: 'background-color: #B8A038',
          },
          {
            name: 'ghost',
            color: 'background-color: #705898',
          },
          {
            name: 'dark',
            color: 'background-color: #705848',
          },
          {
            name: 'dragon',
            color: 'background-color: #7038F8',
          },
          {
            name: 'steel',
            color: 'background-color: #B8B8D0',
          },
          {
            name: 'fairy',
            color: 'background-color: #F0B6BC',
          }
        ]
      }
    }
}
</script>
