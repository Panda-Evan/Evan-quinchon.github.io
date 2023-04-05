import React, { useState } from "react";
import styles from "../test/TodoList.module.css";

interface Task {
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const handleAddTask = (): void => {
    if (task.trim() === "") return;
    setTasksList([...tasksList, { task, completed: false }]);
    setTask("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  const handleCompleteTask = (index: number): void => {
    const newTasksList = [...tasksList];
    newTasksList[index].completed = true;
    setTasksList(newTasksList);
  };

  const handleDeleteTask = (index: number): void => {
    const newTasksList = [...tasksList];
    newTasksList.splice(index, 1);
    setTasksList(newTasksList);
  };

  return (
    <div className={styles.main}>
      <div className={styles.input_container}>
        <input
          className={styles.make_task}
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Entrez une tâche"
        />
        <button className={styles.add_btn} onClick={handleAddTask}>
          <div className={styles.add_icon}></div>
          <div className={styles.btn_txt}>Ajouter</div>
        </button>
      </div>
      <ul>
        {tasksList.map((task, index) => (
          <li
            key={index}
            className={task.completed ? styles.completedTask : styles.task}
          >
            {task.task}
            <div className={styles.buttonsContainer}>
              <button onClick={() => handleCompleteTask(index)}>
                <img
                  src="./test/valide.png"
                  alt="Valider la tâche"
                  className={styles.icon}
                />
              </button>
              <button onClick={() => handleDeleteTask(index)}>
                <img
                  src="./test/sup.webp"
                  alt="Supprimer la tâche"
                  className={styles.icon}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
