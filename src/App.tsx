
import ApiComponent from './components/ApiComponent/Index'
import Footer from './components/Footer/Index'
import Form from './components/Form/Index'
import Header from './components/Header/Index'
import ShowTasks from './components/ShowTasks/Index'
import TasksFinished from './components/TasksFinished/Index'





export default function App() {

  return (
     <>
      <Header />
      <main className='flex  max-md:flex-col max-md:gap-4'>
        <ShowTasks />
        <section className=' max-md:flex-col-reverse ' >
          <TasksFinished />
          <Form />
        </section>
      </main >
      <ApiComponent />
      <Footer />
    </> 

  )
}

