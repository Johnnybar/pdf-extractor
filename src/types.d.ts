declare module "pdfjs-dist/build/pdf.js";
type Optional<T> = T | null;
type handleChange = (e: React.ChangeEvent<any>) => void;
type handleSubmission = () => string;
type clearText = () => void;
type copyToClipboard = () => void;
type getText = (file: File) => string;
