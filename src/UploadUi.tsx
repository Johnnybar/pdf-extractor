import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf.js";
import OutputText from "./OutputText";
pdfjsLib.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.min.js";

const UploadUi = () => {
  const [isSelected, setIsSelected] = useState<Boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [extractedText, setExtractedText] = useState<Optional<string>>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    console.log(event.target.files[0]);

    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  return (
    <div>
      <input type="file" name="file" onChange={handleChange} />
      {isSelected && selectedFile ? (
        <div>
          <p>Filename: {selectedFile.name}</p>{" "}
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button>Submit</button>
      </div>
      {extractedText && <OutputText output={extractedText} />}
    </div>
  );
};

export default UploadUi;
