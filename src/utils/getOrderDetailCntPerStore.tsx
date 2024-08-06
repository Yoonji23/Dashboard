interface DataItem {
  storeId: string;
  data: {
    orderDetailCnt: number;
  };
  status: string;
}

interface StoreOrderCounts {
  storeId: string;
  totalOrderDetailCount: number;
}

export async function getOrderDetailCntPerStore(
  data: DataItem[]
): Promise<StoreOrderCounts[]> {
  const storeOrderDetailCounts: { [storeId: string]: number } = {};

  data.forEach((item) => {
    const {
      storeId,
      data: { orderDetailCnt },
    } = item;

    if (orderDetailCnt !== undefined) {
      if (!storeOrderDetailCounts[storeId]) {
        storeOrderDetailCounts[storeId] = 0;
      }
      storeOrderDetailCounts[storeId] += orderDetailCnt;
    }
  });

  const result = Object.entries(storeOrderDetailCounts)
    .map(([storeId, totalOrderDetailCount]) => ({
      storeId,
      totalOrderDetailCount,
    }))
    .sort((a, b) => b.totalOrderDetailCount - a.totalOrderDetailCount);

  return result;
}
