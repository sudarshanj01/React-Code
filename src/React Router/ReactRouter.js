import About from "./About";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

function ReactRouter(){

    return(
        <div>
            <BrowserRouter>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about/check'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
            </ul>
        
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/about/:message" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
            </Routes>
        </BrowserRouter>
           
        </div>
    )
}

export default ReactRouter