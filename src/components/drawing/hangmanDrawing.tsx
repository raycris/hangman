import styles from "./hangmanDrawing.module.css";

const HEAD = <div className={styles.head} />;
const BODY = <div className={styles.body} />;
const LEFT_ARM = <div className={styles["left-arm"]} />;
const RIGHT_ARM = <div className={styles["right-arm"]} />;
const LEFT_LEG = <div className={styles["left-leg"]} />;
const RIGHT_LEG = <div className={styles["right-leg"]} />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className={styles.container}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.rope} />
      <div className={styles["horizontal-rope"]} />
      <div className={styles.stick} />
      <div className={styles.base} />
    </div>
  );
};

export default HangmanDrawing;
