   const pokemonGrid = document.getElementById('pokemon-grid');
let currentPokemonCount = 20; // Start by showing the first 20 Pokémon
const loadCount = 10; // Number of Pokémon to load with each click

// Pokémon Data (example data)
const pokemons = [
      { id: 1, name: "Bulbasaur", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png", height: "0.7m", weight: "6.9kg", type: "Grass" },
    { id: 2, name: "Charmander", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png", height: "0.9m", weight: "6.7kg", type: "Brown" },
    { id: 3, name: "Squirtle", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png", height: "0.7m", weight: "6.6kg", type: "Blue"},
    { id: 15, name: "Ivysaur", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/002.png", height: "0.7m", weight: "6.6kg", type: "Blue" },
    { id: 11, name: "Venusaur", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png", height: "0.3m", weight: "6.9kg", type: "Dark Green" },
    { id: 5, name: "Wigglytuff", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/040.png", height: "0.9m", weight: "6.7kg", type: "Brown" },
    { id: 6, name: "Clefairy", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/035.png", height: "0.7m", weight: "6.6kg", type: "Blue" },
    { id: 7, name: "Raichu", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/026.png", height: "0.7m", weight: "6.9kg", type: "Grass/Poison" },
    { id: 8, name: "Nidorina", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/030.png", height: "0.9m", weight: "6.7kg", type: "Brown"},
    { id: 9, name: "Raticate", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/020.png", height: "0.7m", weight: "6.9kg", type: "Grass/Poison" },
    { id: 10, name: "Nidoking", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/034.png", height: "0.7m", weight: "6.9kg", type: "Grass" },
    { id: 11, name: "Poliwhirl", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/061.png", height: "0.7m", weight: "6.9kg", type: "Grass/Poison" },
    { id: 12, name: "Slowbro", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/080.png",height: "0.9m", weight: "6.7kg", type: "Brown" },
    { id: 13, name: "Pikachu", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png", height: "0.7m", weight: "6.9kg", type: "Grass/Poison" },
    { id: 14, name: "Quagsire", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/195.png",height: "0.7m", weight: "6.9kg", type: "Grass" },
    { id: 15, name: "Rattata", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/019.png", height: "0.7m", weight: "6.6kg", type: "Blue"},
    { id: 16, name: "Vulpix", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/037.png", height: "0.7m", weight: "6.6kg", type: "Blue" },
    { id: 17, name: "Zubat", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/041.png", height: "0.7m", weight: "6.9kg", type: "Grass" },
    { id: 18, name: "Diglett", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/050.png", height: "0.7m", weight: "6.9kg", type: "Grass/Poison" },
    { id: 19, name: "Meowth", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/052.png", height: "0.7m", weight: "6.6kg", type: "Blue"},
    { id: 20, name: "Ponyta", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/077.png", height: "0.7m", weight: "6.9kg", type: "Grass/Poison" },
     { id: 1, name: "Bulbasaur", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png", height: "0.7m", weight: "6.9kg", type: "Grass" },
    { id: 2, name: "Charmander", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png", height: "0.7m", weight: "6.6kg", type: "Blue" },
     { id: 11, name: "Poliwhirl", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/061.png", height: "0.7m", weight: "6.9kg", type: "Grass" },
    { id: 12, name: "Slowbro", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/080.png", height: "0.9m", weight: "6.7kg", type: "Brown" },
   { id: 13, name: "Pikachu", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png", height: "0.7m", weight: "6.6kg", type: "Blue" },
    { id: 14, name: "Quagsire", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/195.png",height: "0.7m", weight: "6.6kg", type: "Blue" },
    { id: 15, name: "Ivysaur", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/002.png",height: "0.7m", weight: "6.9kg", type: "Grass" },
    { id: 11, name: "Venusaur", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png", height: "0.9m", weight: "6.7kg", type: "Brown"},
    { id: 8, name: "Nidorina", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/030.png", height: "0.7m", weight: "6.9kg", type: "Grass"},
   
];
   
   
   
    // Store the currently selected Pokémon
    let currentPokemon = null;

    // Function to toggle the "Caught" status
    function toggleCaughtStatus() {
        if (currentPokemon) {
            currentPokemon.caught = !currentPokemon.caught;
            document.getElementById('caught-button').innerText = currentPokemon.caught ? 'Uncaught' : 'Caught';
            updatePokemonGrid(); // Re-render the grid after status change
        }
    }

    // Function to display detailed information about the selected Pokémon
    function showDetail(pokemon) {
        currentPokemon = pokemon;

        // Update the detailed view with the Pokémon's data
        document.getElementById('pokemon-name').innerText = pokemon.name;
        document.getElementById('pokemon-image').src = pokemon.img;
        document.getElementById('pokemon-description').innerText = `This is a detailed description of ${pokemon.name}.`; // Add your own descriptions
        document.getElementById('pokemon-height').innerText = pokemon.height || 'Unknown';
        document.getElementById('pokemon-weight').innerText = pokemon.weight || 'Unknown';
        document.getElementById('pokemon-type').innerText = pokemon.type || 'Unknown';

        // Toggle the button text based on caught status
        document.getElementById('caught-button').innerText = pokemon.caught ? 'Uncaught' : 'Caught';

        // Show the detailed view and hide the grid
        document.getElementById('pokemon-grid').classList.add('hidden');
        document.getElementById('pokemon-detail').classList.remove('hidden');
    }

    // Close the detailed view and go back to the main list
    function closeDetail() {
        document.getElementById('pokemon-grid').classList.remove('hidden');
        document.getElementById('pokemon-detail').classList.add('hidden');
    }

    // Function to display a batch of Pokémon
    function displayPokemons(startIndex, count) {
        const pokemonsToShow = pokemons.slice(startIndex, startIndex + count);

        pokemonsToShow.forEach(pokemon => {
            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');
            pokemonCard.innerHTML = `
                <div class="pokemon-info">
                    <h3>${pokemon.name}</h3>
                    <img src="${pokemon.img}" alt="${pokemon.name}" class="pokemon-image">
                </div>
                <span class="lock-icon">${pokemon.caught ? "🔒" : "🔓"}</span>
            `;

            // Add event listener to each Pokémon card for showing details
            pokemonCard.addEventListener('click', () => showDetail(pokemon));

            pokemonGrid.appendChild(pokemonCard);
        });
    }

    // Update the grid to reflect changes (like caught status)
    function updatePokemonGrid() {
        pokemonGrid.innerHTML = ''; // Clear the current grid
        displayPokemons(0, currentPokemonCount); // Re-display the grid with the updated data
    }

    // Initial load of Pokémon
    displayPokemons(0, currentPokemonCount);

    // Load more Pokémon on button click
    document.getElementById('load-more').addEventListener('click', () => {
        displayPokemons(currentPokemonCount, loadCount);
        currentPokemonCount += loadCount;

        // Hide button if all Pokémon are displayed
        if (currentPokemonCount >= pokemons.length) {
            document.getElementById('load-more').style.display = 'none';
        }
    });
