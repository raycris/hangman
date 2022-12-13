import { useState } from "react";
import HangmanDrawing from "./components/drawing/hangmanDrawing";
import HangmanWord from "./components/word/hangmanWord";
import Keyboard from "./components/keyboard/keyboard";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  return (
    <div
      style={{
        gap: "2rem",
        margin: "0 auto",
        display: "flex",
        maxWidth: "800px",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
