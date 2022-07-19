import './App.css';
import Header from "./components/header/Header";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Register from "./pages/Register";
import RegisterList from "./pages/RegisterList";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Register />} />
                <Route path="/register-list" element={<RegisterList />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;