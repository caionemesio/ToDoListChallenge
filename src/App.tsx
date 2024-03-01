
import './App.css'
import Container from './components/Container'
import Form from './components/Form/Index'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />
      <main className='flex '>
        <Container className='w-[700px] h-[449px] mr-4'>
          <h3 className=' font-semibold text-xl text-left py-4 pl-5 '>To do</h3>
        </Container>
        <section>
          <Container className='w-[340px] mb-4'>
            <h3 className='font-semibold pt-4 text-xl' >Finished tasks quantity</h3>
            <span className='font-semibold  text-title' >03</span>
          </Container>
          <Form />
        </section>
      </main>
    </>

  )
}
