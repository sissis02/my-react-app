function PokemonCard () {
    const pokemon = "Bulbasaur"; 

    return <p>{pokemon === "Bulbasaur" ? <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" /> : "???"}</p>;
   
}

const pokemonList = [
    {
        name: "bulbasaur", 
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    }, 
    {
        name: "mew",
    }
]

export default PokemonCard;