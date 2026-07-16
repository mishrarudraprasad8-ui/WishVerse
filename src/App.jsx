import { BrowserRouter, Routes, Route } from "react-router-dom";

import WishPage from "./pages/WishPage";

import "./App.css";


function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route 
          path="/"
          element={<WishPage />}
        />


        <Route 
          path="/wish/:festival/:name"
          element={<WishPage />}
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;