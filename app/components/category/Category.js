import styles from './category.module.css'

export default function Category({name, children}) {
  return (
  <div className={styles.category}>
    <h3>{name}</h3>
    {children}
  </div>)
}