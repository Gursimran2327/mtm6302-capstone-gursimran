# Capstone Project - Part 4: Pokedex Web Application

## Requirements and How They Were Met:

### 1. **Use of HTML, CSS, and JavaScript Files**
   - I created three main files for the project:
     - **`index.html`**: Defines the structure of the web page.
     - **`style.css`**: Responsible for styling the web page.
     - **`script.js`**: Handles dynamic behaviors using JavaScript (e.g., fetching data, handling events).

### 2. **Modern CSS Frameworks**
   - I did not use any CSS frameworks like **Bootstrap** or **Tailwind**. Instead, I used **CSS Grid** and **media queries** for styling and responsiveness.

### 3. **JavaScript Libraries**
   - No external JavaScript libraries (like **jQuery**) were used. All functionality was implemented using **vanilla JavaScript** and the **Fetch API**.

### 4. **Event Listeners (No Inline Events)**
   - All **inline events** (e.g., `onclick="..."`) were removed from the HTML. Instead, I used **JavaScript event listeners** to handle actions such as button clicks and interactions.
     - Example:
       ```javascript
       document.getElementById('back-button').addEventListener('click', closeDetail);
       ```

### 5. **Use of `const` and `let` (No `var`)**
   - I used **`const`** for variables that do not change and **`let`** for variables that change.
     - Example:
       ```javascript
       const pokemonGrid = document.getElementById('pokemon-grid');
       let currentPokemonCount = 20;
       ```

### 6. **Use of Fetch API (No XMLHttpRequest)**
   - The **Fetch API** was used to fetch data asynchronously.
     - Example:
       ```javascript
       async function fetchPokemonData() {
           const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
           const data = await response.json();
           // Use the fetched data to update the page
       }
       ```

### 7. **Responsive Web Application**
   - The application is **responsive**, and its layout adjusts based on screen size. I used **CSS Grid** and **media queries** to make sure it works well on various devices (e.g., desktop, tablet, mobile).
     - Example:
       ```css
       @media (max-width: 768px) {
           .grid {
               grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
           }
       }
       ```

### 8. **No Page Refreshes (Dynamic Updates)**
   - The application does **not refresh** the page when loading more Pokémon or viewing details. It updates **dynamically** using **JavaScript** and the **Fetch API**, providing a seamless user experience.
     - Example:
       ```javascript
       document.getElementById('load-more').addEventListener('click', () => {
           displayPokemons(currentPokemonCount, loadCount);
           currentPokemonCount += loadCount;
       });
       ```

## Explanation of `script.js` Code:

### 1. **Initial Setup - Selecting HTML Elements**
   - The script selects the necessary **HTML elements** for displaying the Pokémon and for interacting with the user (like loading more Pokémon or viewing details).
   ```javascript
   const pokemonGrid = document.getElementById('pokemon-grid');
   let currentPokemonCount = 20; 
   const loadCount = 10; 

## Pokémon Data
- The pokemons array contains the data for each Pokémon, including their ID, name, image, height, weight, and type.
```javascript
Copy code
const pokemons = [
    { id: 1, name: "Bulbasaur", img: "https://...", height: "0.7m", weight: "6.9kg", type: "Grass" },
    
];

## Dynamic Display of Pokemon
Displaying Pokémon: The displayPokemons() function dynamically creates Pokémon cards based on the array of Pokémon.
```javascript
function displayPokemons(startIndex, count) {
    const pokemonsToShow = pokemons.slice(startIndex, startIndex + count);
}
### Handling User Interactions
Showing Pokémon Details: When a user clicks on a Pokémon card, it shows more detailed information about the Pokémon.
pokemonCard.addEventListener('click', () => showDetail(pokemon));

### Toggle caught status 
The "Caught" button toggles the caught status of the currently selected Pokémon.
function toggleCaughtStatus() {
    if (currentPokemon) {
        currentPokemon.caught = !currentPokemon.caught;
        document.getElementById('caught-button').innerText = currentPokemon.caught ? 'Uncaught' : 'Caught';
        updatePokemonGrid(); // Re-render the grid after status change
    }
}

