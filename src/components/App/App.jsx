import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <div className="page">
      <Header></Header>
      <div className="page__content">
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
