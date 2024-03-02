
import './App.css'
import ApiComponent from './components/ApiComponent/Index'
import Form from './components/Form/Index'
import Header from './components/Header/Index'
import ShowTasks from './components/ShowTasks/Index'
import TasksFinished from './components/TasksFinished/Index'
import { IoHeartSharp } from "react-icons/io5";




export default function App() {

  return (
    <>
      <Header />
      <main className='flex '>
        <ShowTasks />
        <section>
          <TasksFinished />
          <Form />
        </section>
      </main>
      <ApiComponent/>
      <footer className='opacity-60 flex fixed bottom-0 pb-[30px] text-secondary font-extralight'>@Did from <span className='px-1'><IoHeartSharp size={20} /></span>by Caio Nemésio</footer>
    </>

  )
}
