import { IoHeartSharp } from "react-icons/io5";

export default function Footer(){
    return(
        <footer 
        className='opacity-60 flex fixed bottom-0 pb-[30px] text-secondary font-extralight max-md:static max-md:pb-0'>
            @Did from 
            <span className='px-1'><IoHeartSharp size={20} /></span>
            by Caio Nemésio
        </footer>

    )
}