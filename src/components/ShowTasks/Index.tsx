import { useToDoList } from "../../contexts/TodoContext";
import Container from "../Container/Index";
import { TiDelete } from "react-icons/ti";
export default function ShowTasks() {
    const { data, removeTask } = useToDoList()
    //renderizando todas as tasks através do método map e importando os dados do hook useToDoList
    return (
        <Container className='w-[700px] h-[449px] mr-4 overflow-x-auto max-md:w-auto  max-md:mr-0  '>
            <h3 className=' font-semibold text-xl text-left py-4 pl-5 '>To do</h3>

            <div className={'h-96 scrollbar-thin scrollbar-thumb-lightGray  scrollbar-track-transparent  overflow-y-scroll '}>

                {data.map((item) => (
                    <div className='bg-lightGray mx-4  p-2 rounded-[10px]  my-3 relative' key={item.id}>
                        <h4 className='text-base text-left font-semibold'>{item.name}</h4>
                        <button onClick={() => removeTask(item.id)} className='text-deleteButton absolute top-[-10px] right-[-10px] '><TiDelete size={20} /></button>
                        <div className='flex justify-between text-secondary text-start opacity-60 font-extralight max-[881px]:flex-col '>

                            <p className='w-2/3 break-words max-[1087px]:w-1/2 max-[881px]:w-auto' >{item.description}</p>
                            <p className='mt-auto'>{item.date}</p>

                        </div>
                    </div>
                ))}

            </div>
        </Container>
    )
}