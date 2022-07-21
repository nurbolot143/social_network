import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__wrapper">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<div> Home</div>} />
              <Route path="/dialogs/*" element={<Dialogs />} />
              <Route path="/music" element={<div> Music</div>} />
              <Route path="/settings" element={<div> Setting</div>} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
