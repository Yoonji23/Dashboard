import { BarList } from "@tremor/react";
import { useEffect, useState } from "react";
import { getCategoryMenuCnt } from "../utils/getCategoryMenuCnt";

export function BarChart({ data }: { data: any[] }) {
  const [result, setResult] = useState<any[]>([]);
  useEffect(() => {
    if (data) {
      const getCategoryData = async () => {
        try {
          const res = await getCategoryMenuCnt(data);

          setResult(res);
        } catch (error) {}
      };
      getCategoryData();
    }
  }, [data]);

  return (
    <div className="barChart">
      <span className="chartLabel">메뉴 카테고리 별 평균 주문 수량</span>
      <BarList
        data={result}
        showAnimation={true}
        className="h-full w-full flex items-center justify-center font-medium"
      />
    </div>
  );
}
