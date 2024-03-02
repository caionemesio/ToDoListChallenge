import { createContext, useContext, useState } from "react";
import { ContainerProps, Task, ToDoContextType, bodyInformationTask } from "../interfaces/interfaces";
import { format } from 'date-fns';

//Inicializando o contexto inicial com os dados que irá receber
const ToDoContext = createContext<ToDoContextType>({
  data: [],
  count: 0,
  addTask: () => { },
  removeTask: () => { }
})


export const TasksProvider: React.FC<ContainerProps> = ({ children }) => {
  //salvando os dados e contador no useState e no localStorage, caso já´tenha dados armazenados no localhost 
  //o useState irá obter esses dados
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
  
  const [count, setCount] = useState<number>(() => {
    const AccumulatorCount = localStorage.getItem('tasks-finished')
    if (!AccumulatorCount) return 0
    try {
      return JSON.parse(AccumulatorCount);
    } catch (error) {
      console.error('Error parsing stoored data')
      return 0
    }
  })

  //Função para adicionar tarefa 
  const addTask = ({ name, description }: bodyInformationTask) => {
    const id: number = Math.floor(Math.random() * 1000000)
    const currentDate: Date = new Date()
    //Utilização da biblioteca date-fns para formata o tipo de data recebida
    const formattedDate: string = format(currentDate, "dd MMMM yyyy 'at' hh:mm a")

    const task: Task = { name, description, id, date: formattedDate }
    setData(state => {
      const newState = [task, ...state]
      localStorage.setItem('todolist-lib', JSON.stringify(newState))
      return newState
    })
  }
  //Função para Remover tarefa 
  const removeTask = (id: number) => {
    const indexToDelete = data.findIndex(t => t.id === id)

    if (indexToDelete !== -1) {
      const uptatedTasks = [...data]
      uptatedTasks.splice(indexToDelete, 1)
      setData(uptatedTasks)
      localStorage.setItem('todolist-lib', JSON.stringify(uptatedTasks))
      alert(`The task has been completed, congratulations!`)
      setCount((count) => count + 1)
      localStorage.setItem('tasks-finished', JSON.stringify(count + 1))
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

//Criação do hook useToDoList para facilitar o uso desses dados
export const useToDoList = () => {
  const context = useContext(ToDoContext)
  if (!context) {
    throw new Error('useTodoList must be used within a ProductsProvider')
  }
  return context
}