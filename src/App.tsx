
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
      <main className='flex  max-md:flex-col gap-y-4'>
        {
          window.innerWidth <= 768 ? (
            <>
              <Form />
              <ShowTasks />
              <TasksFinished />
            </>
          ) : (
            <>
              <ShowTasks />
              <section  >
                <TasksFinished />
                <Form />
              </section>
            </>
          )
        }
      </main >
      <ApiComponent />
      <Footer />
    </>

  )
}
