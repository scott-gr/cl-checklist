import styles from './task.module.css'

// Ideally the database would include fields for assignee, notes, status. Those can be additional properties 
export default function Task({description, action, staff}){

  const assigneeOptions = staff.map(person => {
    return <option key={person.id} value={person}>{person}</option>
    })

  return (
  <div className={styles.taskContainer}>
    <p>{description}</p>
    {/* Assignee is not needed if Task does not require an action */}
    <select disabled={!action === true ? true : false}>
      <option value=""> - select assignee - </option>
      {assigneeOptions}
    </select>
    <textarea />
    {action === true ? <a title="Clicking this would open the relevant item on the dashboard">View Dashboard</a> : <p className={styles.noAction}>None</p>}
    {/* Status is not needed if Task does not require an action */}
    <select disabled={!action === true ? true : false}>
      <option value="">-Status-</option>
      <option value="incomplete">Incomplete</option>
      <option value="processing">Processing</option>
      <option value="complete">Complete</option> 
    </select>
  </div>
  )
}