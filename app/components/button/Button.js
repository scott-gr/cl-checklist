import styles from './button.module.css'

export default function Button({label, clickHandler}){
  return (
    <button className={styles.basicButton} onClick={clickHandler}>
      {label}
    </button>
  )
}