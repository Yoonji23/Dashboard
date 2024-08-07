import { LineChart } from "@tremor/react";
import { useEffect, useState } from "react";
import { getTimeCnt } from "../utils/getTimeCnt";

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

interface TimeCntProps {
  date: string;
  메뉴수량: number;
}
export function LineChartComponent({ data }: { data: any[] }) {
  const [result, setResult] = useState<TimeCntProps[]>([]);
  useEffect(() => {
    const getTimeCntData = async () => {
      try {
        const res = await getTimeCnt(data);
        setResult(res);
      } catch {
        window.alert("차트 데이터를 가져오지 못했습니다.");
      }
    };
    if (data.length > 0) {
      getTimeCntData();
    }
  }, [data]);

  return (
    <div className="h-[400px] bg-white mt-8 border border-[#EDF2F9] rounded-lg p-[24px]">
      <span className="chartLabel">시간별 주문 추이</span>
      <LineChart
        data={result}
        index="date"
        categories={["메뉴수량"]}
        colors={["indigo"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </div>
  );
}
