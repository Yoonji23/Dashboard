// interface PlatformCount {
//   [key: string]: number;
// }
import { CookData, DataProps } from "../types/dataType";

// interface MenuCount {
//   [key: string]: number;
// }

// interface CategoryCount {
//   [key: string]: number;
// }

// interface TimeCount {
//   [key: string]: number;
// }

// export interface CookData {
//   date: string;
//   orderCnt: number;
//   orderDetailCnt: number;
//   platformCnt: PlatformCount;
//   menuCnt: MenuCount;
//   categoryCnt: CategoryCount;
//   timeCnt: TimeCount;
// }

// interface DataProps {
//   status: string;
//   data: CookData;
// }

export const useData = (data: DataProps[]): CookData[] => {
  const date: any = [];
  data.forEach((item) => {
    date.push(item);
    console.log("item", item);
  });
  return date;
};
