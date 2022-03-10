import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import "./App.css";

function App() {
    return (
        <Router>
            <Container>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
