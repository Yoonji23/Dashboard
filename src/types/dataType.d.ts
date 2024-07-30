interface PlatformCount {
  [key: string]: number;
}

interface MenuCount {
  [key: string]: number;
}

interface CategoryCount {
  [key: string]: number;
}

interface TimeCount {
  [key: string]: number;
}

export interface CookData {
  date: string;
  orderCnt: number;
  orderDetailCnt: number;
  platformCnt: PlatformCount;
  menuCnt: MenuCount;
  categoryCnt: CategoryCount;
  timeCnt: TimeCount;
}

export interface DataProps {
  status: string;
  data: CookData;
}
