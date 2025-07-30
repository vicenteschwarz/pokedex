document.addEventListener('DOMContentLoaded', () => {
    const pokedexContainer = document.querySelector('.pokedex-container');

    const pokemons = [
        {
            id: 1,
            name: 'Bulbasaur',
            image: 'https://i.pinimg.com/736x/df/1d/ea/df1dea166afbfdc34e11f748dc436d0f.jpg',
            types: ['grass']

        },
        {
            id: 2,
            name: 'Ivysaur',
            image: 'https://i.pinimg.com/736x/18/56/89/1856898ea579b6a55fbf265eb5035012.jpg',
            types: ['grass', 'poison']

        },
        {
            id: 3,
            name: 'Venusaur',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
            types: ['grass', 'poison']
        },
        {
            id: 4,
            name: 'Charmander',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
            types: ['fire']
        },
        {
            id: 5,
            name: 'Charmeleon',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnnutzWn82gIcnvW2dU7S-sx1FN52UmaTvg&s',
            types: ['fire']
        },
        {
            id: 6,
            name: 'Charizard',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
            types: ['fire', 'flying']
        },
        {
            id: 7,
            name: 'Squirtle',
            image: 'https://preview.redd.it/oj0d97dt11461.jpg?auto=webp&s=e1ec996f8a5c9d107945308734338234ad062ecf',
            types: ['water']
        },
        {
            id: 8,
            name: 'Wartortle',
            image: 'https://repositorio.sbrauble.com/arquivos/up/pokedex/8.svg',
            types: ['water']
        },
        {
            id: 9,
            name: 'Blastoise',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
            types: ['water']
        },
        {
            id: 63,
            name: 'Abra',
            image: 'https://static.pokemonpets.com/images/monsters-images-800-800/63-Abra.webp',
            types: ['psychic']
        },
        {
            id: 64,
            name: 'Kadabra',
            image: 'https://static.pokemonpets.com/images/monsters-images-800-800/64-Kadabra.webp',
            types: ['psychic']
        },
        {
            id: 65,
            name: 'Alakazam',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
            types: ['psychic']
        },
        {
            id: 144,
            name: 'Articuno',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png',
            types: ['ice', 'flying']
        },
        {
            id: 145,
            name: 'Zapdos',
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEireF6AwejUWhjY8yxKwp3Nb_idnY_ijITMXZCd0h9R-xHt8LafVl7UEqquLgZG3XMesfBAEiAE2dyA8mw5HLb598LIl-77xSFcxWYoWJy8NeKo1EoGanZyzGdubfMNndnXh2PcvsOwYigl/s1600/zapdos_v_2_by_xous54-d5j7pes.png',
            types: ['thunder', 'flying']
        },
        {
            id: 146,
            name: 'Moltres',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUb1azdJQvuKSOQLkBqfRNRg2Plg5K0fsK8g&s',
            types: ['fire', 'flying']
        },
        {
            id: 150,
            name: 'Mewtwo',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
            types: ['psychic']
        },
        {
            id: 151,
            name: 'Mew',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypqq0ldR2zWhKQD2GxMYEsVBIA1Fm3L1kDw&s',
            types: ['psychic']
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