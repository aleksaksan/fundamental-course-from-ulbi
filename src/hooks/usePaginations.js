import { useMemo } from "react";
import { getPageCount, getPagesArr } from "../Utils/pages";

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

export const usePaginations = (totalPages) => {
  const pagesArray = useMemo(() => {
    return getPagesArr(totalPages);
  },[totalPages]);
  return pagesArray;
}

