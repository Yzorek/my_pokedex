<template>
  <div>
    <main>
      <b-navbar toggleable="lg" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="my-navbar">
            <NuxtLink to="/" class="my-links">
              <MyPokedexLogo/>
            </NuxtLink>
            <NuxtLink to="/pokemons" class="my-links">
                Pokemons
            </NuxtLink>
            <NuxtLink to="/abilities" class="my-links">
                Abilities
            </NuxtLink>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </main>
  </div>
</template>


<style>
.my-navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.my-links {
  margin-right: 10%;
  color: grey;
}

.my-links:hover {
  color: grey;
  text-decoration: none;
}
</style>