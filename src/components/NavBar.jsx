import PokemonCard from "./PokemonCard";

function NavBar( {pokemonIndex, pokemonList, setPokemonIndex}) {

    const handleClick = () => {
        setPokemonIndex(pokemonIndex + 1);
      }
    
      const handleClick2 = () =>  {
        setPokemonIndex(pokemonIndex - 1);
      }

      const removeArticle = () => {
        setPokemonIndex(pokemonIndex.imgSrc);
      }

    return (
       <div>
          {pokemonList.map((pokemonIndex, index) => (
            <button key={index} onClick={() => removeArticle(pokemonIndex.imgSrc)}>{pokemonIndex.name}</button>
          ) )}  
        </div> 
    );
}

export default NavBar; 


/*
{pokemonIndex > 0 ? <button onClick={handleClick2}>Précédent</button> : ""}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick}>Suivant</button> : ""} 
            */