import {BrowserRouter as Router, Routes as Switch, Route as Path} from 'react-router-dom'
import Home from './components/pages/Home.js'
import Dev from './components/pages/Dev.js'
import JamboEditora from './components/pages/JamboEditora.js'
import Encontros from './components/pages/Encontros.js'
//import NovoEncontro from './components/pages/NovoEncontro.js'

import Container from './components/layout/Container.js'
import Navbar from './components/layout/Navbar.js'
import Footer from './components/layout/Footer.js'

function App() {
  return (
    <Router>
     <Navbar/>
      <Container customClass='min-height' >
      <Switch>
        <Path path="/" element={<Home/>}/>
        <Path path="/about-dev" element={<Dev/>}/>
        <Path path="/about-jambo" element={<JamboEditora/>}/>
        <Path path="/my-encounter" element={<Encontros/>}/>
      </Switch>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
