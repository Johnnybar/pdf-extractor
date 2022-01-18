import "./App.scss";
import UploadUi from "./UploadUi";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__heading">PDF Extractor</h1>
      </header>
      <div className="content-wrapper">
        <UploadUi />
      </div>
      <footer className="footer">
        <p className="footer__text text-center">Extract Any PDF</p>
      </footer>
    </>
  );
}

export default App;
