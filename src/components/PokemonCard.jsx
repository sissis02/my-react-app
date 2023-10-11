import PropTypes from 'prop-types';

function PokemonCard (props) {

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
            {typeof props.pokemon.imgSrc === "string" ? <img src={props.pokemon.imgSrc} alt="Bulbasaur"/> : <p>???</p>}
        <figcaption>{props.pokemon.name}</figcaption>
        </figure>
        
    );
}



export default PokemonCard;