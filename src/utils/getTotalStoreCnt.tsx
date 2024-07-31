export async function getTotalStoreCnt(data: any[]) {
  const totalStoreId: string[] = [];
  if (data) {
    data.forEach((item) => {
      totalStoreId.includes(item.storeId) === false &&
        totalStoreId.push(item.storeId);
    });
  }

  return totalStoreId.length;
}
