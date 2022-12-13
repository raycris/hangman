import styles from "./hangmanWord.module.css";

type HangmanWordPros = {
  guessedLetters: string[];
  wordToGuess: string;
};

const HangmanWord = (props: HangmanWordPros) => {
  return (
    <div className={styles.container}>
      {props.wordToGuess.split("").map((letter, index) => (
        <span className={styles.underline} key={index}>
          <span
            className={
              props.guessedLetters.includes(letter)
                ? "visible"
                : styles["letter-Visibility"]
            }
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
