import { LineChartComponent } from "../components/LineChartComponent";
import { BarChart } from "../components/BarChart";
import { DonutChart } from "../components/DonutChart";
import { CardModule } from "../module/CardModule";

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
        <BarChart data={data} />
        <DonutChart data={data} />
      </div>
      <LineChartComponent />
    </div>
  );
};
