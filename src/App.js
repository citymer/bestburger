import Home from './pages/Home'
import Carte from './pages/Carte'
import Apropos from './pages/Apropos'
import Error404 from './pages/Error404'

const { HashRouter, Routes, Route } = require('react-router-dom')

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notre_carte" element={<Carte />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  )
}

export default App
