interface MenuCnt {
  [key: string]: number;
}

interface DataItem {
  data: {
    menuCnt: MenuCnt;
  };
}

export async function getMenuCnt(
  data: DataItem[]
): Promise<{ name: string; value: number }[]> {
  const menuSums: { [key: string]: number } = {};

  data.forEach((item) => {
    Object.entries(item.data.menuCnt).forEach(([menu, value]) => {
      const numericValue = Number(value); // value를 number로 변환
      if (!menuSums[menu]) {
        menuSums[menu] = 0;
      }
      menuSums[menu] += numericValue;
    });
  });

  // 결과를 원하는 형태로 변환 및 상위 10개 항목으로 제한
  const result = Object.entries(menuSums)
    .map(([menu, sum]) => ({
      name: menu,
      value: sum,
    }))
    .sort((a, b) => b.value - a.value) // 내림차순 정렬
    .slice(0, 10); // 상위 10개 항목만 선택

  return result;
}
