import "./App.scss";
import UploadUi from "./UploadUi";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="" className="header__logo" />
      </header>
      <div className="content-wrapper">
        <UploadUi />
      </div>
      <footer className="footer">
        <p className="footer__text text-center">
          ContractHero - Gewinnen Sie die Kontrolle zurück
        </p>
      </footer>
    </>
  );
}

export default App;
