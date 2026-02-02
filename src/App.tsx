
import './App.css'
// import Loader from './components/ui/Loader'
import Footer from './components/layout/Footer'
import MenuSection from './components/sections/MenuSection'
import Navbar from './components/layout/Navbar'
import { Container } from './components/layout/Container'
import Carousel from './components/ui/Carousel'

function App() {

  return (
    <>
    <Container>
    <Navbar/>
    <Carousel/>
    <MenuSection/>
    <Footer/> 
    </Container>
    </>
  )
}

export default App
