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
    const fetchData = async () => {
      try {
        const res = await getMenuCnt(data);
        setResult(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (data.length > 0) {
      fetchData();
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
