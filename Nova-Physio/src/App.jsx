import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Treatment from "./pages/treatment/Treatment";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/services/:id"
                element={<Treatment />}
            />
        </Routes>
    );
}

export default App;
