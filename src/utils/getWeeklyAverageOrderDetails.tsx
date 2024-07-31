export async function getWeeklyAverageOrderDetails(data: any[]) {
  const storeIds = ["A", "B", "C", "D"];
  let totalOrderMenu = 0;
  let totalDays = 0;

  storeIds.forEach((storeId) => {
    const storeData = data.filter((item) => item.storeId === storeId);
    storeData.forEach((item) => {
      totalOrderMenu += item.data.orderDetailCnt;
      totalDays += 1;
    });
  });

  const averageOrdersDetails = totalDays > 0 ? totalOrderMenu / totalDays : 0;
  return Math.round(averageOrdersDetails);
}
