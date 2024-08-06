import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { getWeeklyAverageOrders } from "../utils/getWeeklyAverageOrders";
import { getWeeklyAverageOrderDetails } from "../utils/getWeeklyAverageOrderDetails";
import { getTotalStoreCnt } from "../utils/getTotalStoreCnt";

export const CardModule = ({ data }: { data: any[] }) => {
  const [averageOrderCnt, setAverageOrderCnt] = useState<number>(0);
  const [averageOrderDetailsCnt, setAverageOrderDetailsCnt] =
    useState<number>(0);
  const [totalStore, setTotalStore] = useState<number>(0);

  useEffect(() => {
    const fetchTotalStoreCount = async () => {
      try {
        const totalStore = await getTotalStoreCnt(data);
        setTotalStore(totalStore);
      } catch (error) {}
    };

    const fetchAverageOrderCount = async () => {
      try {
        const averageOrderCnt = await getWeeklyAverageOrders(data);
        setAverageOrderCnt(averageOrderCnt);
      } catch (error) {}
    };
    const fetchAverageOrderMenuCount = async () => {
      try {
        const averageOrderCnt = await getWeeklyAverageOrderDetails(data);
        setAverageOrderDetailsCnt(averageOrderCnt);
      } catch (error) {}
    };
    if (data) {
      fetchAverageOrderCount();
      fetchAverageOrderMenuCount();
      fetchTotalStoreCount();
    }
  }, [data]);

  return (
    <div className="flex justify-between">
      <Card result={totalStore} label="전체 가맹점 수" />
      <Card result={averageOrderCnt} label="평균 주문 건수" />
      <Card result={averageOrderDetailsCnt} label="평균 메뉴 수량" />
    </div>
  );
};
