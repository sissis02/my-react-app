import PokemonCard from "./PokemonCard";

function NavBar( {pokemonIndex, pokemonList, setPokemonIndex}) {

      const handleIndex = (indexDePokemonClicke, pokemonIndex) => {

        setPokemonIndex(indexDePokemonClicke)
        pokemonIndex === "pikachu" && alert("pika pikachu !!!") 
      } 

    return (
       <div>
          {pokemonList.map((pokemon, index) => (
            <button key={index} onClick={() => {handleIndex(index, pokemon.name)}}>{pokemon.name}</button>
          ))}  
        </div> 
    );
}

export default NavBar; 


/*

  const handleClick = () => {
        setPokemonIndex(pokemonIndex + 1);
      }
    
      const handleClick2 = ()=>  {
        setPokemonIndex(pokemonIndex - 1);
      }
      
{pokemonIndex > 0 ? <button onClick={handleClick2}>Précédent</button> : ""}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick}>Suivant</button> : ""} 
            */