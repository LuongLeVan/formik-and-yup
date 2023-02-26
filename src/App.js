import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
