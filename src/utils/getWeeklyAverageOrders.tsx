export async function getWeeklyAverageOrders(data: any[]) {
  const storeIds = ["A", "B", "C", "D"];
  let totalOrders = 0;
  let totalDays = 0;

  storeIds.forEach((storeId) => {
    const storeData = data.filter((item) => item.storeId === storeId);
    storeData.forEach((item) => {
      totalOrders += item.data.orderCnt;
      totalDays += 1;
    });
  });

  const averageOrders = totalDays > 0 ? totalOrders / totalDays : 0;
  return Math.round(averageOrders);
}
