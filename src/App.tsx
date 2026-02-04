
import './App.css'
import Footer from './components/layout/Footer'
import MenuSection from './components/sections/MenuSection'
import Navbar from './components/layout/Navbar'
import { Container } from './components/layout/Container'
// import FrontCategories from './components/sections/Frontcategories'
import Carousel from './components/ui/Carousel'

function App() {

  return (
    <>
    <Container>
    {/* <FrontCategories/> */}
    <Navbar/>
    <Carousel/>
    <MenuSection/>
    <Footer/> 
    </Container>
    </>
  )
}

export default App
