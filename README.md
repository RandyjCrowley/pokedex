**Pokedex: A Card Collecting Game**

Welcome to Pokedex, a card collecting game built with SvelteKit and Tailwind CSS. In this game, you can collect and display cards from the popular Pokémon Trading Card Game (TCG).

**Features**

* **Card Collection**: Save your collected cards in local storage and view them on the "Packs" page.
* **Random Pack Generation**: Open a pack of 6 random cards on the "Open" page.
* **Card Display**: View individual card details on the "Card" page.

**Getting Started**

1. Clone this repository: `git clone https://github.com/RandyjCrowley/pokedex`
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm run dev` or `yarn dev`

**Pages**

* **Packs**: View and filter your collected cards.
* **Open**: Open a pack of 6 random cards.
* **Card**: View individual card details.

**API Endpoints**

* **GET /card/:slug**: Fetch a single card by slug from the TCGDex API.
* **GET /sets/base1**: Fetch a list of cards from the TCGDex API (used for generating random packs).
