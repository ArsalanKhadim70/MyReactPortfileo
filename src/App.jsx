import MyRoute from './Route.jsx';
import { BrowserRouter } from "react-router-dom"
import Navbar from './Conmpuntes/navbar.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MyRoute />
    </BrowserRouter>
  )
}

export default App