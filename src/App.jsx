import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ProfilePage from "./pages/ProfilePage"
import Routelinks from "./routelinks/routelinks"

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/*' element={<Routelinks/>} />
    </Routes>
    </>
  )
}

export default App
