interface TimeCntItem {
  data: {
    timeCnt: { [key: string]: number };
  };
}
export async function getTimeCnt(data: TimeCntItem[]) {
  const aggregatedData = data.reduce((acc, item) => {
    Object.entries(item.data.timeCnt).forEach(([key, value]) => {
      // 날짜와 수량 값을 누적
      acc[key] = (acc[key] || 0) + value;
    });
    return acc;
  }, {} as { [key: string]: number });

  // 배열로 반환
  const chartdata = Object.entries(aggregatedData).map(([date, count]) => ({
    date,
    메뉴수량: count,
  }));

  return chartdata;
}
