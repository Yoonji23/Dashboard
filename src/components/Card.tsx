interface CardProps {
  result: number;
  label: string;
}
export function Card(props: CardProps) {
  const { result, label } = props;

  return (
    <div className="card-wrapper">
      <div>
        <p className="text-[0.8rem] text-[#95AAC9] font-medium">{label}</p>
        <p className="text-[24px] text-[#12263F] font-medium">{result}</p>
      </div>
    </div>
  );
}
