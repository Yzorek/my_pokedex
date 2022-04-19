<template>
  <div>
    <main>
      <b-navbar toggleable="lg" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <NuxtLink to="/">
              <MyPokedexLogo/>
            </NuxtLink>
            <b-nav-item href="#">
              <NuxtLink to="/pokemons">
                Pokemons
              </NuxtLink>
            </b-nav-item>
            <b-nav-item href="#">
              <NuxtLink to="/abilities">
                Abilities
              </NuxtLink>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </main>
  </div>
</template>


<script>
</script>