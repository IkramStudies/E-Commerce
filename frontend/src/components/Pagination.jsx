import React from "react";

const Pagination = () => {
  const [currentPage, setPage] = useState(1);
  const itemsPerPage = 6;
  const pagination = (itemsperpage, currentpage, data) => {
    setData(data.slice());
    return <div></div>;
  };
};
export default Pagination;
/*
if (pagenumber == 1)
setData(data.slice(0 ,3))
else {
  //pagenumber = 2
  setData(data.slice(2 + pagenumber, 4 + pagenumber))  
  // setData(data.slice(1 + 2, 4 + 2))
  // setData(data.slice(3, 6))
  // pagenumber = 3
  setData(data.slice(6, 9))
  // pagenumber = 4
  setData(data.slice(9, 12))
  if (pagenumber == 1 )
    startingInd = 0
    endingInd = 3
  if (pagenumber === 2)
    startingInd = 3
    endingInd = 6
  else {
    startingInd = pageNum + 3,
    endingInd = startingInd + 3,
    // pageNum = 3
    startingInd = 3 + 3
    endingInd = 9
    }
  // pagenumber = 2 , startingInd = 3
  // pagenumber = 3 , startingInd = 6
  // pagenumber = 4 , startingInd = 9
  // pagenumber = 5 , startingInd = 12
  // pagenumber = 6 , startingInd = 12
  const startingindx = pagenumber + 
}

*/
