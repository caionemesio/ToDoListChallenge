import { ReactNode } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode
}


export interface InputFormProps {
  label: string
  id: string
  placeholder: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}
export interface bodyInformationTask{
  name: string,
  description: string
}

export interface Task extends bodyInformationTask {
  date: string,
  id: number
}



export interface ToDoContextType {
  data: Task[]
  count:number
  addTask:(task: bodyInformationTask) => void;
  removeTask:(id:number)=>void;
}