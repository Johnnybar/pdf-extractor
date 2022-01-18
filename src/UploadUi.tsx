import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf.js";
import OutputText from "./OutputText";
pdfjsLib.GlobalWorkerOptions.workerSrc = "/js/pdf.worker.min.js";

const UploadUi = () => {
  const [extractedText, setExtractedText] = useState<Optional<string>>();

  return (
    <div>
      <input type="file" name="file" />
      <p>Select a file to show details</p>

      <div>
        <button>Submit</button>
      </div>
      {extractedText && <OutputText output={extractedText} />}
    </div>
  );
};

export default UploadUi;
