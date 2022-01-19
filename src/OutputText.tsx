interface Props {
  output: string;
}
const OutputText = ({ output }: Props) => {
  return (
    <div
      data-testid="output-text"
      className="text-center output-text__container"
    >
      <p className="output-text__text">{output && output}</p>
    </div>
  );
};

export default OutputText;
