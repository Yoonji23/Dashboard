import { BarChart } from "@tremor/react";
import { useEffect, useState } from "react";
import { getOrderCntPerStore } from "../utils/getOrderCntPerStore";
import { getOrderDetailCntPerStore } from "../utils/getOrderDetailCntPerStore";

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

interface BarChartPerStoreProps {
  data: any[];
  value: string;
}

export function BarChartPerStore(props: BarChartPerStoreProps) {
  const { data, value } = props;
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res: any[] = [];
        if (value === "order") {
          res = await getOrderCntPerStore(data);
        } else if (value === "orderDetail") {
          res = await getOrderDetailCntPerStore(data);
        }
        setResult(res);
      } catch (error) {
        window.alert("오류가 발생했습니다.");
      }
    };

    if (data.length > 0) {
      fetchData();
    }
  }, [data, value]);

  return (
    <div className="barChartPerStore whitespace-nowrap">
      <span className="chartLabel">
        {value === "order" ? "매장별 주문 건수" : "매장별 메뉴 수량"}
      </span>
      <BarChart
        className="whitespace-nowrap"
        data={result}
        index="storeId"
        showAnimation={true}
        categories={
          value === "order" ? ["totalOrderCount"] : ["totalOrderDetailCount"]
        }
        colors={["blue"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </div>
  );
}
