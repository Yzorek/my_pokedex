const actions = {
    populate(context, pokemons) {
        context.commit('populate', pokemons)
    }
}

export default actions;