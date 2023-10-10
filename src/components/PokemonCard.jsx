const pokemonList = [
    {
        name: "bulbasaur", 
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    }, 
    {
        name: "mew",
    }
]

function PokemonCard () {
    const pokemon = pokemonList[1];
    let image = pokemon.imgSrc;

    return (
        <figure>
            {typeof image === "string" ? <img src={image} alt="Bulbasaur"/> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
        </figure>
        
    );
}



export default PokemonCard;