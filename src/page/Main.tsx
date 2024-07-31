import { LineChartComponent } from "../components/LineChartComponent";
import { BarChartContainer } from "../components/BarChartContainer";
import Chart from "../components/Chart";
import { CardModule } from "../module/CardModule";

interface MainProps {
  data: any[];
}
export const Main = (props: MainProps) => {
  const { data } = props;

  return (
    <div className="flex flex-col">
      <CardModule data={data} />
      <div className="flex items-center gap-[24px]">
        <BarChartContainer data={data} />
        <Chart />
      </div>
      <LineChartComponent />
    </div>
  );
};
