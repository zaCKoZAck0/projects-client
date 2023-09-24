import CardContainer from "./components/card-container"
import NavBar from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="bg-light d-flex justify-content-around">
      <NavBar />
      <CardContainer />
    </div>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
