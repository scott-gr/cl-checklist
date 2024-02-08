import styles from "./page.module.css";
import Checklist from "@/app/components/checklist/Checklist";
import listData from '@/app/api/clean-payload.json'
import Category from "./components/category/Category";
import Task from "./components/task/Task";
import Button from "./components/button/Button";

export default function Home() {

  //Staff options for assignees is hardcoded here, but this could be populated with a client's list of approved users.
  const myStaff = 
    [
      "James Madison",
      "Daffy Duck",
      "Bugs Bunny",
      "Peter Parker"
    ]
 // backend data is imported only on this component. Categories and Tasks are automatically displayed by mapping over array of JSON data.
  const list = listData.categories.map(category => {
    return (
    <Category key={category.id} name={category.name}>
      {category.tasks.map(task => {
        return(
        <Task key={task.id} description={task.description} action={task.Action} staff={myStaff} />
        )
      })}
      </Category>
    )
  })


  return (
    <main className={styles.pageGrid}>
    <div className={styles.headerArea}>
      <h1>Checklist</h1>
    </div>
    <div className={styles.contentArea}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id aliquet. Purus sit amet luctus venenatis. Proin fermentum leo vel orci porta non pulvinar. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Habitant morbi tristique senectus et netus et malesuada fames. Porttitor leo a diam sollicitudin tempor. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Faucibus a pellentesque sit amet porttitor eget dolor. Augue lacus viverra vitae congue eu. Euismod quis viverra nibh cras.
    </div>
    <div className={styles.sidebarArea}>
      <Button label="Back"/>
      <ul>
        <li>
          You are viewing a checklist for LICENSE
        </li>
      </ul>
    </div>
    <div className={styles.checklistArea}>
      <Checklist>{list}</Checklist>
    </div>
    </main>
  );
}
