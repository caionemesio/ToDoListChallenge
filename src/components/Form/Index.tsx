import { useForm } from "react-hook-form";
import Container from "../Container/Index";
import InputForm from "./InputForm/Index";
import { useToDoList } from "../../contexts/TodoContext";
import { bodyInformationTask } from "../../interfaces/interfaces";

export default function Form() {
  //Utilização do react form 
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { addTask } = useToDoList()
  const onSubmit = (data: Record<string, any>) => {
    const task: bodyInformationTask = {
      name: data.taskName,
      description: data.taskDescription
    }
    addTask(task)
    reset()
  }
  return (
    <Container className='max-md:w-auto flex flex-col items-center '>
      <h3 className='font-semibold py-4 text-xl '>Add new to do</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm id='taskName' register={register} errors={errors} label='Task Name:' placeholder='Studying' />
        <InputForm id='taskDescription' register={register} errors={errors} label='Task Description:' placeholder='Study programming at 10:00' />
        <button type="submit" className="bg-secondary w-[291px] h-[42px] text-center text-xs rounded-[5px] mt-4 mb-8  text-primary">Create Todo</button>
      </form>
    </Container>
  )
}