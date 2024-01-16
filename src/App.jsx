import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageMenu from "./pages/ManageMenu";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
import { ChakraProvider } from "@chakra-ui/react";



function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/menuPage" element={<ManageMenu />}></Route>
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
