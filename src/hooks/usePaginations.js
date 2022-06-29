import { useMemo } from "react";
import { getPageCount, getPagesArr } from "../Utils/pages";

export const usePaginations = (totalCount, limit) => {
  const pagesArray = useMemo(() => {
    const pagesCount = getPageCount(totalCount, limit);
    const pagesArr = getPagesArr(totalCount);
    return [pagesCount, pagesArr];
  },[totalCount, limit]);
  return pagesArray;
}

// first version
// export const usePagesArr = (totalCount) => {
//   const pagesArr = useMemo(() => {
//   let result =[];
//   for (let i = 0; i < totalCount; i++) {
//       result.push(i+1);
//     };
//   return result;
//   }, [totalCount])
//   return pagesArr;
// };
