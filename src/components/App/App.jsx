import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
        <div className="page__container">
          <Main></Main>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
