
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

function ReactRouter(){

    return(
        <div>
            <BrowserRouter>
           
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path="/dashboard/:username" element={<Dashboard />} />

            </Routes>

        </BrowserRouter>
           
        </div>
    )
}

export default ReactRouter