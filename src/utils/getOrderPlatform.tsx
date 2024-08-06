export async function getOrderPlatform(data: any[]) {
  const result = data.reduce((acc, item) => {
    Object.entries(item.data.platformCnt).forEach(([platform, count]) => {
      acc[platform] = (acc[platform] || 0) + count;
    });

    return acc;
  }, {});

  return result;
}
