import { BarChart } from "@tremor/react";
import { useEffect, useState } from "react";
import { getCategoryMenuCnt } from "../utils/getCategoryMenuCnt";

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

export function BlueBarChart({ data }: { data: any[] }) {
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {
    const getCategoryMenuCntData = async () => {
      try {
        const res = await getCategoryMenuCnt(data);
        setResult(res);
      } catch (error) {
        window.alert("차트 데이터를 가져오지 못했습니다.");
      }
    };

    if (data.length > 0) {
      getCategoryMenuCntData();
    }
  }, [data]);

  return (
    <div className="barChart whitespace-nowrap">
      <span className="chartLabel">메뉴 카테고리별 주문 수량</span>
      <BarChart
        className="whitespace-nowrap"
        data={result}
        index="name"
        showAnimation={true}
        categories={["amount"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </div>
  );
}
