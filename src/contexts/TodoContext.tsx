import { createContext, useContext, useState } from "react";
import { ContainerProps } from "../interfaces/interfaces";

const ToDoContext = createContext(null)

export const TasksProvider: React.FC<ContainerProps> = ({ children }) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('todolist-lib')
    if (!storedData) return []
    try {
      return JSON.parse(storedData);
    } catch (error) {
      console.error('Error parsing stoored data')
      return []
    }
  })
  return (
    <ToDoContext.Provider value={data}>
      {children}
    </ToDoContext.Provider>
  )
}

export const useToDoList = () => {
  const context = useContext(ToDoContext)
  if (!context) {
    throw new Error("useTodoList must be used within a ProductsProvider")
  }
}