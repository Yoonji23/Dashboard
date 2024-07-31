import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DashboardLayout } from "./layout/DashboardLayout";
import { Main } from "./page/Main";
import { db } from "./firebase";

import { collection, query, getDocs } from "firebase/firestore";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getCook = async () => {
      const q = query(collection(db, "cook"));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    };
    getCook();
  }, []);
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
