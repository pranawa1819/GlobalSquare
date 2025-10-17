import { Route, Routes } from "react-router-dom";
import YoutubeNavbar from "./YoutubeNavbar";


function YNavRouting() {

    return (
       <Routes>
        <Route
         path="/"
          element={
            <> 
             <YoutubeNavbar />
              
            </>
          }
        />
      </Routes>
    );
};

export default YNavRouting