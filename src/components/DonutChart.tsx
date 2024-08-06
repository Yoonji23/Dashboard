import { useState, useEffect } from "react";
import { styled } from "@mui/system";
import { PieChart } from "@mui/x-charts/PieChart";
import { getOrderPlatform } from "../utils/getOrderPlatform";

const CustomPieChart = styled(PieChart)({
  backgroundColor: "white",
  width: "100%",
  height: "100%",
});

export function DonutChart({ data }: { data: any[] }) {
  const [platformData, setPlatformData] = useState<any[]>([]);

  useEffect(() => {
    const getPlatform = async () => {
      try {
        const res = await getOrderPlatform(data);

        const platformFormat = Object.entries(res).map(
          ([name, amount], index) => ({
            id: index,
            value: amount,
            label: name,
          })
        );
        setPlatformData(platformFormat);
      } catch (error) {
        window.alert("차트 데이터를 가져오지 못했습니다.");
      }
    };
    getPlatform();
  }, [data]);

  return (
    <div className="donutChart whitespace-nowrap">
      <span className="text-[18px]  text-[#95AAC9] font-semibold">
        플랫폼 별 메뉴 수량
      </span>

      <CustomPieChart
        series={[
          {
            data: platformData,
            innerRadius: 100,
            outerRadius: 120,
          },
        ]}
      />
    </div>
  );
}
