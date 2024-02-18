import { Routes, Route } from "react-router-dom";
import './index.css'
import { TodoPage } from "./pages/TodoPage";
import { FigurePage } from "./pages/FigurePage";
import { Header } from "./layout/Header";
import { Home } from "./pages/Home";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/figures" element={<FigurePage />} />
      </Routes>
    </>
  )
}

export default App
