import Home from './pages/Home'
const { HashRouter, Routes, Route, Navigate } = require("react-router-dom");


function App() {
  return (
 <HashRouter>
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home/>} />
  </Routes>
 </HashRouter>
  )
}

export default App;
