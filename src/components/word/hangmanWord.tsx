import styles from "./hangmanWord.module.css";

type HangmanWordPros = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean | false;
};

const HangmanWord = (props: HangmanWordPros) => {
  return (
    <div className={styles.container}>
      {props.wordToGuess.split("").map((letter, index) => (
        <span className={styles.underline} key={index}>
          <span
            className={
              props.guessedLetters.includes(letter) || props.reveal
                ? "visible"
                : styles["letter-Visibility"]
            }
            style={{
              color:
                !props.guessedLetters.includes(letter) && props.reveal
                  ? "red"
                  : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
