import { LineChartComponent } from "../components/LineChartComponent";
import { DonutChart } from "../components/DonutChart";
import { CardModule } from "../module/CardModule";
import { BarChart } from "../components/BarChart";
import { BlueBarChart } from "../components/BlueBarChart";
import { BarChartPerStore } from "../components/BarChartPerStore";

interface MainProps {
  data: any[];
}
export const Main = (props: MainProps) => {
  const { data } = props;
  if (!data) return;
  return (
    <div className="flex flex-col">
      <CardModule data={data} />
      <div className="flex items-center gap-[24px]">
        <BlueBarChart data={data} />
        <DonutChart data={data} />
      </div>

      <BarChart data={data} label="전체 메뉴별 평균 주문 수량" />
      <LineChartComponent data={data} />
      <div className="flex gap-[24px]">
        <BarChartPerStore data={data} value="order" />
        <BarChartPerStore data={data} value="orderDetail" />
      </div>
    </div>
  );
};
