interface DataItem {
  storeId: string;
  data: {
    orderCnt: number;
    // 다른 속성들
  };
  status: string;
}

interface StoreOrderCounts {
  storeId: string;
  totalOrderCount: number;
}

export async function getOrderCntPerStore(
  data: DataItem[]
): Promise<StoreOrderCounts[]> {
  const storeOrderCounts: { [storeId: string]: number } = {};

  // 데이터 처리
  data.forEach((item) => {
    const {
      storeId,
      data: { orderCnt },
    } = item;

    if (orderCnt !== undefined) {
      if (!storeOrderCounts[storeId]) {
        storeOrderCounts[storeId] = 0;
      }
      storeOrderCounts[storeId] += orderCnt;
    }
  });

  // 결과를 배열 형태로 변환
  const result = Object.entries(storeOrderCounts)
    .map(([storeId, totalOrderCount]) => ({
      storeId,
      totalOrderCount,
    }))
    .sort((a, b) => b.totalOrderCount - a.totalOrderCount);

  return result;
}
