interface CategoryCnt {
  [key: string]: number;
}

interface DataItem {
  data: {
    categoryCnt: CategoryCnt;
  };
}

export async function getCategoryMenuCnt(
  data: DataItem[]
): Promise<{ name: string; value: number }[]> {
  const categorySums: { [key: string]: number } = {};

  data.forEach((item) => {
    Object.entries(item.data.categoryCnt).forEach(([category, value]) => {
      const numericValue = Number(value); // value를 number로 변환
      if (!categorySums[category]) {
        categorySums[category] = 0;
      }
      categorySums[category] += numericValue;
    });
  });

  // 결과를 원하는 형태로 변환
  const result = Object.entries(categorySums).map(([category, sum]) => ({
    name: category,
    value: sum,
  }));

  return result;
}
