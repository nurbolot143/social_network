import Header from "./components/Header";
import Profile from "./components/Profile";
import "./sass/App.scss";

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Header />
        <Profile />
      </div>
    </div>
  );
}

export default App;
