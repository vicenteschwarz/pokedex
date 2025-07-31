document.addEventListener('DOMContentLoaded', () => {
    const pokedexContainer = document.querySelector('.pokedex-container');

    //Chikorita, Cyndaquil e Totodile, além dos lendários Ho-Oh, Lugia, Raikou, Entei e Suicune.

    const pokemons = [
        {
            "id": 152,
            "name": "Chikorita",
            "types": [
                "grass"
            ],
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png"
        },
        {
            "id": 155,
            "name": "Cyndaquil",
            "types": [
                "fire"
            ],
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png"
        },
        {
            "id": 158,
            "name": "Totodile",
            "types": [
                "water"
            ],
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png"
        },
        {
            "id": 243,
            "name": "Raikou",
            "types": [
                "electric"
            ],
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png"
        },
        {
            "id": 244,
            "name": "Entei",
            "types": [
                "fire"
            ],
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png"
        },
        {
            "id": 245,
            "name": "Suicune",
            "types": [
                "water"
            ],
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png"
        },
        {
            "id": 249,
            "name": "Lugia",
            "types": [
                "psychic",
                "flying"
            ],
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png"
        },
        {
            "id": 250,
            "name": "Ho-Oh",
            "types": [
                "fire",
                "flying"
            ],
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png"
        }
    ]

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