import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DashboardLayout } from "./layout/DashboardLayout";
import { Main } from "./page/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
