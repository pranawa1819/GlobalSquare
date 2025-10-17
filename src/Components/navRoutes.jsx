import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";

function NavRouting() {

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <div className='main'>
                            
                            <Navbar />


                        </div>
                    </>
                }
            />
        </Routes>
    );
};

export default NavRouting