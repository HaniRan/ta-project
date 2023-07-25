import React, { useState } from "react";
import "./App.css";
import LoginForm from "./page/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Routes>
      <Route path="/login">
        <LoginForm showError={updateErrorMessage} updateTitle={updateTitle} />
      </Route>
    </Routes>
  );
}

export default App;
