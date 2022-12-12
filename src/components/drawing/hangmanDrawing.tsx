import styles from "./hangmanDrawing.module.css";

const HEAD = <div className={styles.head} />;
const BODY = <div className={styles.body} />;

const HangmanDrawing = () => {
  return (
    <div className={styles.container}>
      {HEAD}
      {BODY}
      <div className={styles.rope} />
      <div className={styles["horizontal-rope"]} />
      <div className={styles.stick} />
      <div className={styles.base} />
    </div>
  );
};

export default HangmanDrawing;
