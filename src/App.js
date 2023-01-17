import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Password from './pages/Password';
import { Routes, Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/password" element={<Password />} />
      </Routes>
    </div>
  );
}

export default App;

// LAGYAN NG HOVER TSAKA ACTIVE MGA BUTTONS