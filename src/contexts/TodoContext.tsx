import { createContext, useContext, useEffect, useState } from "react";
import { ContainerProps, Task, ToDoContextType, bodyInformationTask } from "../interfaces/interfaces";

const ToDoContext = createContext<ToDoContextType>({
  data: [],
  count:0,
  addTask: () => { },
  removeTask: () => { }
})

export const TasksProvider: React.FC<ContainerProps> = ({ children }) => {
  const [data, setData] = useState<Task[]>(() => {
    const storedData = localStorage.getItem('todolist-lib')
    if (!storedData) return []
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error('Error parsing stoored data')
      return []
    }
  })

  const[count,setCount]=useState<number>(()=>{
    const AccumulatorCount= localStorage.getItem('tasks-finished')
    if(!AccumulatorCount) return 0
    try{
      return JSON.parse(AccumulatorCount);
    } catch (error) {
      console.error('Error parsing stoored data')
      return 0
    }
  })

  const addTask = ({ name, description }: bodyInformationTask) => {
    const id: number = Math.floor(Math.random() * 1000000)
    const date: string = new Date().toLocaleString()
    const task: Task = { name, description, id, date }
    setData(state => {
      const newState = [task, ...state]
      localStorage.setItem('todolist-lib', JSON.stringify(newState))
      return newState
    })
  }

  const removeTask = (id: number) => {
    const indexToDelete = data.findIndex(t => t.id === id)

    if(indexToDelete!==-1){
      const uptatedTasks=[...data]
      uptatedTasks.splice(indexToDelete,1)
      setData(uptatedTasks)
      localStorage.setItem('todolist-lib',JSON.stringify(uptatedTasks))
      alert(`The task has been completed, congratulations!`)
      setCount((count)=>count+1)
      localStorage.setItem('tasks-finished',JSON.stringify(count+1))
    }


  }
  const contexValue: ToDoContextType = {
    data,
    count,
    addTask,
    removeTask

  }

  return (
    <ToDoContext.Provider value={contexValue}>
      {children}
    </ToDoContext.Provider>
  )
}

export const useToDoList = () => {
  const context = useContext(ToDoContext)
  if (!context) {
    throw new Error('useTodoList must be used within a ProductsProvider')
  }
  return context
}