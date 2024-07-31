import { BarChart } from "@tremor/react";

const chartdata = [
  {
    name: "주문 건수",
    A매장: 890,
    B매장: 338,
    C매장: 538,
    D매장: 396,
  },
  {
    name: "메뉴 수량",
    A매장: 890,
    B매장: 338,
    C매장: 538,
    D매장: 396,
  },
  {
    name: "Topic 3",
    A매장: 890,
    B매장: 338,
    C매장: 538,
    D매장: 396,
  },
  {
    name: "Topic 4",
    A매장: 890,
    B매장: 338,
    C매장: 538,
    D매장: 396,
  },
];

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

export function BarChartContainer({ data }: { data: any[] }) {
  return (
    <div className="barChart">
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        가맹점 대시보드
      </h3>
      <BarChart
        className="mt-6 "
        data={chartdata}
        showAnimation={true}
        index="name"
        categories={["A매장", "B매장", "C매장", "D매장"]}
        colors={["blue", "teal", "amber", "rose", "indigo", "emerald"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </div>
  );
}
