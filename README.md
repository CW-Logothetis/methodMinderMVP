# MethodMinder MVP: flashcards with an LLM

Note: this is an MVP app to prototype my idea for a flashcard app with an LLM 'tutor' for revising JavaScript and React. 
      It is client-side only and my OpenAI API key wouldn't be secure, so the Vercel deployment does not have the key in an env variable and the app won't connect to OpenAI. 
      The MVP uses React Router. I'm currently migrating it to Next.js for a backend, SSR and Vercel's AI SDK for LLM components. With Supabase for easy storage and auth. 

## Introduction
In these days of copy/paste and LLMs, it's easy to forget methods. And I wonder what it's like for beginners who must be tempted just to pseudocode with chatGPT. Maybe that's how things'll end up, with engineers spending much more time on design decisions [https://spectrum.ieee.org/ai-code-generator]. 

Still, we're not there yet, and I'd like a way to revise individual methods themselves when I've a few spare minutes, when I don't have time for CodeWards or Leetcode.
So this is designed to help users learn and memorise JavaScript array methods using a pared down version of Anki's early spaced repetition system. 
The app uses OpenAI to generate content for each array method and allows users to score their recall, which then determines the intervals in the review schedule.
In the near future, I should store the explanations and syntax and just have the LLM generate exercises, to save on cost.
The LLM changes the exercises each time. And I should add varying difficulties and an LLM review of the user's answer before the LLM's suggestion of it's own answer. 
If I ever have the time, my plan is to add objects, strings, syntax, React Hooks, some web APIs...

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Features

- **Spaced Repetition System**: Implements a spaced repetition algorithm to optimize memory retention.
- **Dynamic Content Generation**: Uses OpenAI to generate explanations, syntax, examples, and exercises for each array method.
- **Interactive Learning**: Users can score their recall of each method as "Again", "Hard", "Good", or "Easy", which adjusts the review schedule.
- **All method page**: Users can see a simple breakdown of the different array methods - like a stripped down version of MDN docs.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/CW-Logothetis/methodMinder.git
    cd array_openAI
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up OpenAI API Key**:
    - Create a `.env` file in the root directory.
    - Add your own OpenAI API key to the `.env` file:
      ```env
      VITE_OPENAI_API_KEY=your_openai_api_key
      ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

# React + Vite

React in this project works in Vite with HMR and some ESLint rules. It uses [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) and [Babel](https://babeljs.io/) for Fast Refresh

## Usage

1. **Home Page**: Displays an overview of the decks (currently just one JavaScript array methods deck) and statistics for new, learning and due today cards.
2. **Deck Summary**: Shows detailed statistics for the selected deck and a "Study" button to start a study session.
3. **Study Page**: Displays the content for the current array method, generated by OpenAI, and allows users to score their recall.

## Project Structure

``` 
public
src
├── assets
│   ├── images
│   └── styles // global styles
├── lib
│   ├── components // UI components plus Layout from React Router
│   └── mvpStorage // JS files acting as 'database'
├── pages // sub-folders for each page, with a jsx and css file
├── utils
├──App.jsx
├──index.css
└──main.jsx
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Anki](https://ankiweb.net) for providing the inspiration and helping me learn all sorts of things over the years.
- [OpenAI](https://openai.com/) for providing the API used to generate educational content.
- [React](https://reactjs.org/) for the front-end framework.
- [React Router](https://reactrouter.com/) for navigation management.

## Contact

For any questions or inquiries, please contact [cwlogo@protonmail.com](mailto:cwlogo@protonmail.com).


