
import './App.css'
import Container from './components/Container'
import Form from './components/Form/Index'
import Header from './components/Header'
import ShowTasks from './components/ShowTasks/Index'
import { useToDoList } from './contexts/TodoContext'



export default function App() {
  const {count}=useToDoList()
 
  return (
    <>
      <Header />
      <main className='flex '>
      <ShowTasks/>
        <section>
          <Container className='w-[340px] mb-4'>
            <h3 className='font-semibold pt-4 text-xl' >Finished tasks quantity</h3>
            <span className='font-semibold  text-title' >{count}</span>
          </Container>
          <Form />
        </section>
      </main>
    </>

  )
}
