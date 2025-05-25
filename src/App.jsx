import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Layout from "./components/LayoutRouting/Layout"
function App() {


  return (
   <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
        </Route>
      </Routes>
   </Router>
  )
}

export default App
