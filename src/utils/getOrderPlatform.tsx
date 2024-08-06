export async function getOrderPlatform(data: any[]) {
  const result = data.reduce((acc, item) => {
    Object.entries(item.data.platformCnt).forEach(([platform, count]) => {
      acc[platform] = (acc[platform] || 0) + count;
    });

    return acc;
  }, {});

  // 객체를 배열로 변환
  const orderPlatformArray = Object.entries(result);

  // 배열을 값 기준으로 내림차순 정렬
  const sortedEntries = orderPlatformArray.sort(([, valueA], [, valueB]) => {
    const numValueA = Number(valueA);
    const numValueB = Number(valueB);
    return numValueB - numValueA;
  });

  // 정렬된 배열을 다시 객체로 변환
  const sortedResult = Object.fromEntries(sortedEntries);

  return sortedResult;
}
