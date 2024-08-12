# Deck of Cards React App

This is a simple React application that simulates drawing and shuffling a deck of cards using the [Deck of Cards API](https://deckofcardsapi.com/). The app displays one card at a time and stacks the drawn cards with a slight rotation to mimic a real-life card pile. Additionally, the app includes functionality to shuffle the deck and start drawing from a fresh deck.

## Features

- Draw a card from a deck, one at a time, until all cards are drawn.
- Stack drawn cards with a slight rotation for a more realistic visual effect.
- Shuffle the deck at any time to reset and draw cards again.
- Styled with basic CSS for a clean and simple interface.

## Getting Started

Follow these instructions to get a copy of the project running on your local machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).
- **npm**: Node.js comes with npm, the Node package manager. You can check if it's installed by running `npm -v` in your terminal.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/card-draw-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd card-draw-app
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

### Running the App

1. **Start the development server**:

   ```bash
   npm run dev
   ```

2. **Open the app**:

   Once the server is running, open your browser and go to:

   ```
   http://localhost:3000
   ```

### Usage

- Click on the "Gimme a Card!" button to draw a card from the deck.
- The drawn cards will stack with a slight rotation in the center of the screen.
- Once all cards are drawn, the app will show an error message stating that no cards are left.
- Click on the "Shuffle Deck" button to shuffle the deck and start drawing cards again.

### Project Structure
