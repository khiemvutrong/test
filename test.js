let arr = [
    [0,1,2,3,4], 
    [4,3,2,1,0], 
    [5,6,7,8,9]
]

function deleteRowsColumns(inputMatrix, deleteRows, deleteColumns) {
    
   // convert index arr before delete Rows
   let convertDeleteRows = [];
   for (let i = 0; i < deleteRows.length; i++) {
      let numR = i + 1;
      convertDeleteRows.push(deleteRows[i] - numR)
   }
    
   // convert index arr before delete Columns
   let convertDeleteColumns = [];
   for (let i = 0; i < deleteColumns.length; i++) {
      let numC = i + 1;
      convertDeleteColumns.push(deleteColumns[i] - numC);
   }

   // action remove rows
   for (const rmi of convertDeleteRows) {
      if (rmi >= 0) {
         inputMatrix.splice(rmi, 1);
      }
   }
    
   // action remove columns
   inputMatrix.map(el => {
      for (const rmi of convertDeleteColumns) {
         if (rmi >= 0) {
            el.splice(rmi, 1);
         }
      }
   })
   
   // return results
   return inputMatrix
}

deleteRowsColumns(arr, [2], [2,5])
