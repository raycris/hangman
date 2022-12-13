import styles from "./keyboard.module.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type keyboardPros = {
  disabled?: boolean | false;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = (props: keyboardPros) => {
  return (
    <div className={styles.container}>
      {KEYS.map((item) => {
        const isActive = props.activeLetters?.includes(item);
        const isInactive = props.inactiveLetters?.includes(item);

        return (
          <button
            key={item}
            onClick={() => props.addGuessedLetter(item)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || props.disabled}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
