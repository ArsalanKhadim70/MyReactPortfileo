import { Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import AboutDetails from './AboutDetails';
import Contact from './contact';
const MyRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/about-details' element={<AboutDetails />} />
            <Route path='/Contact' element={<Contact />} />
        </Routes >
    )
}

export default MyRoute