document.addEventListener('DOMContentLoaded', () => {
    const pokedexContainer = document.querySelector('.pokedex-container');

    const pokemons = [
        {
            id: 3,
            name: 'Venusaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
            types: ['grass', 'poison']
        } 
    ];

    const createPokemonCard = (pokemon) => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const pokemonImage = document.createElement('img');
        pokemonImage.src = pokemon.image;
        pokemonImage.alt = pokemon.name;

        const pokemonId = document.createElement('p');
        pokemonId.classList.add('pokemon-id');
        pokemonId.textContent = `#${String(pokemon.id).padStart(3, '0')}`;

        const pokemonName = document.createElement('h2');
        pokemonName.classList.add('pokemon-name');
        pokemonName.textContent = pokemon.name;

        const pokemonTypes = document.createElement('div');
        pokemonTypes.classList.add('pokemon-types');
        pokemon.types.forEach(type => {
            const typeBadge = document.createElement('span');
            typeBadge.classList.add('type-badge', type); // Adiciona a classe do tipo para estilização
            typeBadge.textContent = type;
            pokemonTypes.appendChild(typeBadge);
        });

        card.appendChild(pokemonImage);
        card.appendChild(pokemonId);
        card.appendChild(pokemonName);
        card.appendChild(pokemonTypes);

        pokedexContainer.appendChild(card);
    };

    pokemons.forEach(pokemon => {
        createPokemonCard(pokemon);
    });
});