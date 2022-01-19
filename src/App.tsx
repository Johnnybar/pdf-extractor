import "./App.scss";
import UploadUi from "./UploadUi";

function App() {
  return (
    <>
      <header className="header">
        {/* //add contractHero favcicon */}
        {/* make responsive for mobile */}
        {/* add comments  */}
        <img
          src="https://uploads-ssl.webflow.com/6172da8d54a8c3c4ec34b64c/617ea6e061b42b8a1a8cca74_contract-hero-logo.svg"
          alt=""
          className="header__logo"
        />
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
