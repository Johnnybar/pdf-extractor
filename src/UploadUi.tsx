import { useState } from "react";
import OutputText from "./OutputText";
import getText from "./getText";

const UploadUi = () => {
  const [isSelected, setIsSelected] = useState<Boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [extractedText, setExtractedText] = useState<Optional<string>>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //to prevent typescript null value error
    if (!event.target.files) return;

    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    getText(selectedFile).then(
      (text: string) => {
        setExtractedText(text);
      },
      (error: string) => {
        console.error(error);
      }
    );
  };

  const clearText = () => {
    setIsSelected(false);
    setExtractedText(null);
  };

  const copyToClipboard = () => {
    if (extractedText) {
      navigator.clipboard
        .writeText(extractedText)
        .then(() => {
          alert("successfully copied");
        })
        .catch(() => {
          alert("something went wrong");
        });
    }
  };
  return (
    <div className="upload-ui container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1 className="upload-ui__top-heading">PDF Extractor</h1>
          <label className="custom-input">
            <input type="file" name="file" onChange={handleChange} />
            Upload PDF to Extract Text
          </label>

          {isSelected && selectedFile ? (
            <div>
              <p>Filename: {selectedFile.name}</p>{" "}
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          <div>
            <button
              className="btn btn-primary upload-ui__utility-btn"
              onClick={handleSubmission}
            >
              Submit
            </button>
          </div>
          <div className="upload-ui__list">
            {extractedText && (
              <div>
                <OutputText output={extractedText} />
                <div className="upload-ui__utility-btn">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={copyToClipboard}
                  >
                    Copy to Clipboard
                  </button>
                </div>
                <div className="upload-ui__utility-btn">
                  <button
                    className="btn btn-secondary btn-block"
                    onClick={clearText}
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadUi;
