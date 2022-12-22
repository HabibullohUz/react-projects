import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss'
import './components/axios/sass/user.scss'
import Home from './components/router/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/router/Contact';
import AboutUs from './components/router/AboutUs';
import Layout from './components/router/Layout';
import NoPage from './components/router/NoPage';
import Cards from './components/Cards';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/messi'>
                    <Route></Route>
                </Route>
                <Route>
                    <Route></Route>
                    <Cards />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App



   // <BrowserRouter>
        //     <Routes>
        //         <Route path='/' element={<Layout />}>
        //             <Route index element={<Home />}></Route>
        //             <Route path='contact' element={<Contact />}></Route>
        //             <Route path='about-us' element={<AboutUs />}></Route>
        //             <Route path='*' element={<NoPage />}></Route>
        //         </Route>
        //     </Routes>
        // </BrowserRouter>