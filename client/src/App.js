import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import { Toaster } from 'react-hot-toast';
import ChartDisplay from './Components/ChartDisplay';

function App() {
  return (
    <>
    <Toaster />
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/register" element={<Register/>} />
    <Route exact path="/dashboard" element={<Dashboard/>} />
    <Route exact path="/chart" element={<ChartDisplay/>} />
    </Routes>
    </>
  );
}

export default App;
