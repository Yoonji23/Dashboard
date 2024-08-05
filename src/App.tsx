import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./layout/DashboardLayout";
import { Main } from "./page/Main";
import { db } from "./firebase";

import { collection, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<any[]>([]);
  console.log(1, "data", data);

  useEffect(() => {
    const getCook = async () => {
      const q = query(collection(db, "cook"));

      const querySnapshot = await getDocs(q);
      const result: any[] = [];
      querySnapshot.forEach((doc) => {
        result.push(doc.data());
      });
      setData(result);
    };
    getCook();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Main data={data} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
