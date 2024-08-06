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
): Promise<{ name: string; amount: number }[]> {
  const categorySums: { [key: string]: number } = {};

  data.forEach((item) => {
    Object.entries(item.data.categoryCnt).forEach(([category, amount]) => {
      const numericValue = Number(amount); // value를 number로 변환
      if (!categorySums[category]) {
        categorySums[category] = 0;
      }
      categorySums[category] += numericValue;
    });
  });

  const result = Object.entries(categorySums)
    .map(([category, sum]) => ({
      name: category,
      amount: sum,
    }))
    .sort((a, b) => b.amount - a.amount); // 내림차순 정렬

  return result;
}
