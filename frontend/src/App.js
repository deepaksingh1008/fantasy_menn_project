import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import CreateTeamForm from "./components/CreateTeamform/CreateTeamForm";
import PlayerForm from "./components/PlayerFrom/PlayerForm";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-player" element={<PlayerForm />} />
          <Route path="/create-team" element={<CreateTeamForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
