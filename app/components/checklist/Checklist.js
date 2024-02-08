import styles from './checklist.module.css';

export default function Checklist({children}) {
  return (
  <div className={styles.container}>
    <div className={styles.header}>
      <span>Task</span>
      <span>Assignee</span>
      <span>Note</span>
      <span>Action Required</span>
      <span>Status</span>
    </div>
    {children}
  </div>
  )
}