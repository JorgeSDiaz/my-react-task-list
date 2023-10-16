import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { Suspense, lazy } from "react";

const TaskList = lazy(() => import("./components/taskList/TaskList"));
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/about/About"));

export default function App() {
  return (
    <div className="flex-col justify-items-center justify-center p-5">
      <Header appTittle={"My Task List"} />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/tasks"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <TaskList />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}
