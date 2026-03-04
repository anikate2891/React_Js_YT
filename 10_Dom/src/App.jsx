import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import AboutDetails from './AboutDetails'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/about/:id' element={<AboutDetails/>}/>
        <Route path='/contact' element={<Contact/>}>
          <Route path='men' element={<Men/>} />
          <Route path='women' element={<Women/>} />
        </Route>

        <Route path='*' element={<Home/>}/>
      </Routes>

    </div>
  )
}

export default App
