import styles from "./hangmanWord.module.css";
const HangmanWord = () => {
  const word = "test";
  const guessedLetters = ["t"];
  return (
    <div className={styles.container}>
      {word.split("").map((letter, index) => (
        <span className={styles.underline} key={index}>
          <span
            className={
              guessedLetters.includes(letter)
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
