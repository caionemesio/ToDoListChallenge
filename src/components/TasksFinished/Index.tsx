import { useToDoList } from "../../contexts/TodoContext";
import Container from "../Container/Index";

export default function TasksFinished() {
    const { count } = useToDoList()
    return (
        <Container className='w-[340px] mb-4 max-md:w-auto'>
            <h3 className='font-semibold pt-4 text-xl' >Finished tasks quantity</h3>
            <span className='font-semibold  text-title' >{count.toString().padStart(2, '0')}</span>
        </Container>
    )
}