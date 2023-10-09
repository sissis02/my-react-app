function PokemonCard () {
    const pokemon = "bulbasaur"; 

    return <p>{pokemon === "bulbasaur" ? <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" /> : "???"}</p>;
   
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