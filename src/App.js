import logo from './logo.svg';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import AppRouter from "./Router"
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  );
}

export default App;
