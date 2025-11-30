import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CustomerList from "./components/CustomerList";
import TrainingList from "./components/TrainingList";

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/trainings" element={<TrainingList />} />
        <Route path="*" element={<CustomerList />} />
      </Routes>
    </>
  );
}
