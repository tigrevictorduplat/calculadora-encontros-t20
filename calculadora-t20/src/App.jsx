import {BrowserRouter as Router, Routes as Switch, Route as Path} from 'react-router-dom'
import Home from './components/pages/Home'
import Dev from './components/pages/Dev'
import JamboEditora from './components/pages/JamboEditora'
import Encontros from './components/pages/Encontros'
import NovoEncontro from './components/pages/NovoEncontro'
import VerEncontro from './components/pages/VerEncontro'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
     <Navbar/>
      <Container customClass='min-height' >
      <Switch>
        <Path path="/" element={<Home/>}/>
        <Path path="/about-dev" element={<Dev/>}/>
        <Path path="/about-jambo" element={<JamboEditora/>}/>
        <Path path="/my-encounters" element={<Encontros/>}/>
        <Path path="/new-encounter" element={<NovoEncontro/>}/>
        <Path path="/encounter/:id" element={<VerEncontro/>}/>
      </Switch>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
