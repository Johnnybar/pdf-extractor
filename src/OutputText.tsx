interface Props {
  output: string;
}
const OutputText = ({ output }: Props) => {
  return <h1>{output ? output : "I am Output Text"}</h1>;
};

export default OutputText;
