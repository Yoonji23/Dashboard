import { BarList } from "@tremor/react";
import { useEffect, useState } from "react";
import { getMenuCnt } from "../utils/getMenuCnt";

interface BarChartProps {
  data: any[];
  label: string;
}

export function BarChart({ data, label }: BarChartProps) {
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {
    const getMenuCntData = async () => {
      try {
        const res = await getMenuCnt(data);
        setResult(res);
      } catch (error) {
        window.alert("차트 데이터를 가져오지 못했습니다.");
      }
    };

    if (data.length > 0) {
      getMenuCntData();
    }
  }, [data]);

  return (
    <div className="barChart">
      <span className="chartLabel">{label}</span>
      <BarList
        data={result}
        showAnimation={true}
        className="w-full flex mt-[30px] justify-center font-medium"
      />
    </div>
  );
}
