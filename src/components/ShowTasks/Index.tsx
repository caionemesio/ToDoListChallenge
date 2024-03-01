import { useToDoList } from "../../contexts/TodoContext";
import Container from "../Container";

import { TiDelete } from "react-icons/ti";

export default function ShowTasks() {
    const { data ,removeTask} = useToDoList()

    return (
        <Container className='w-[700px] h-[449px] mr-4 overflow-x-auto'>
            <h3 className=' font-semibold text-xl text-left py-4 pl-5 '>To do</h3>
            
                {data.map((item) => (
                    <div className='bg-lightGray mx-4 p-2 rounded-[10px] my-4 relative' key={item.id}>
                        <h4 className='text-base text-left font-semibold'>{item.name}</h4>
                        <button onClick={() => removeTask(item.id)} className='text-deleteButton absolute top-[-10px] right-[-10px] '><TiDelete size={20} /></button>
                        <div className='flex justify-between text-secondary text-start opacity-60 font-extralight'>
                            <p >{item.description}</p>
                            <p>{item.date}</p>
                        </div>
                    </div>
                ))}
        </Container>
    )
}