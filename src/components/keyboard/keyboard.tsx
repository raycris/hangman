import styles from './keyboard.module.css'
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
]

const Keyboard = () => {
  return (
    <div className={styles.container}>
      {KEYS.map(item =>{
        return <button key={item} className={`${styles["keyboard-btn"]} `}>{item}</button>
      })}
    </div>
  )
}

export default Keyboard