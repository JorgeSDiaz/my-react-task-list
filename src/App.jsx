import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import { lazy } from "react";

const TaskList = lazy(() => import("./components/taskList/TaskList"));
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/about/About"));

export default function App() {
  return (
    <div className="flex-col justify-items-center justify-center p-5">
      <Header appTittle={"My Task List"} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
