import PropTypes from 'prop-types';

function PokemonCard (props) {
    console.log(props);
    
    const { pokemon, image } = props;

    // const pokemon = pokemonList[1];
    // let image = pokemon.imgSrc;
    
    PokemonCard.propTypes = {
        pokemon:PropTypes.shape({
            imgSrc: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
    }

    return (
        <figure>
            {typeof pokemon.imgSrc === "string" ? <img src={pokemon.imgSrc} alt="Bulbasaur"/> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
        </figure>
        
    );
}



export default PokemonCard;