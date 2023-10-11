function NavBar( {pokemonIndex, pokemonList, setPokemonIndex}) {

    const handleClick = () => {
        setPokemonIndex(pokemonIndex + 1);
      }
    
      const handleClick2 = ()=>  {
        setPokemonIndex(pokemonIndex - 1);
      }

    return (
       <div>
            {pokemonIndex > 0 ? <button onClick={handleClick2}>Précédent</button> : ""}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick}>Suivant</button> : ""}  
        </div> 
    );
}

export default NavBar; 

