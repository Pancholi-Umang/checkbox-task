// import React, { useState } from "react";

// const App = () => {
//   const [checkboxState, setCheckboxState] = useState([
//     [false, false, false, false, false],
//     [false, false, false, false, false],
//     [false, false, false],
//     [false, false, false, false],
//   ]);

//   const arr = [
//     [1990, 1991, 1992, 1993, 1994],
//     [2000, 2001, 2002, 2003, 2004],
//     [2010, 2011, 2012],
//     [3001, 3002, 3003, 3004],
//   ];

//   const ParentCheckBox = (rowIndex, rowind) => {
//     const updatedState = [...checkboxState];
//     const updateList = [];
//     const rowChecked = updatedState[rowIndex].every((checked) => checked);
//     updatedState[rowIndex] = rowChecked
//       ? updatedState[rowIndex].map(() => false)
//       : updatedState[rowIndex].map(() => true);
//     setCheckboxState(updatedState);
//     console.log(updateList)
//   };

//   const childcheckBox = (rowIndex, childIndex, colIndex) => {
//     const updatedState = [...checkboxState];

//     updatedState[rowIndex][childIndex] = !updatedState[rowIndex][childIndex];
//     setCheckboxState(updatedState);
//   };

//   return (
//     <div>
//       {checkboxState.map((row, rowIndex) => (
//         <div key={rowIndex}>
//           <input
//             type="checkbox"
//             checked={row.every((checked) => checked)}
//             onChange={() => ParentCheckBox(rowIndex, arr[rowIndex])}
//           />  

//           {row.map((checked, childIndex) => (
//             <span key={childIndex}>
//               <input
//                 type="checkbox"
//                 checked={checked}
//                 onChange={() =>
//                   childcheckBox(rowIndex, childIndex, arr[rowIndex][childIndex])
//                 }
//               />
//               {arr[rowIndex][childIndex]}
//             </span>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const [checkboxState, setCheckboxState] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false],
    [false, false, false, false],
  ]);

  const arr = [
    [1990, 1991, 1992, 1993, 1994],
    [2000, 2001, 2002, 2003, 2004],
    [2010, 2011, 2012],
    [3001, 3002, 3003, 3004],
  ];

  const ParentCheckBox = (rowIndex) => {
    const updatedState = [...checkboxState];
    const rowChecked = updatedState[rowIndex].every((checked) => checked);
    updatedState[rowIndex] = rowChecked
      ? updatedState[rowIndex].map(() => false)
      : updatedState[rowIndex].map(() => true);
    setCheckboxState(updatedState);
  };

  const childcheckBox = (rowIndex, childIndex) => {
    const updatedState = [...checkboxState];
    updatedState[rowIndex][childIndex] = !updatedState[rowIndex][childIndex];
    setCheckboxState(updatedState);
  };

  const [RetriveValuesOfItems, setRetriveValuesOfItems] = useState([])

  const getCheckedValues = () => {
    const checkedValues = [];
    checkboxState.forEach((row, rowIndex) => {
      row.forEach((checked, childIndex) => {
        if (checked) {
          checkedValues.push(arr[rowIndex][childIndex]);
        }
      });
    });
    setRetriveValuesOfItems(checkedValues)
  };

  

  return (
    <div>
      {checkboxState.map((row, rowIndex) => (
        <div key={rowIndex}>
          <input
            type="checkbox"
            checked={row.every((checked) => checked)}
            onChange={() => ParentCheckBox(rowIndex)}
          />

          {row.map((checked, childIndex) => (
            <span key={childIndex}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => childcheckBox(rowIndex, childIndex)}
              />
              {arr[rowIndex][childIndex]}
            </span>
          ))}
        </div>
      ))}

      <button onClick={getCheckedValues}>submit</button>
       
      <h3>New Values:</h3>
      {
        RetriveValuesOfItems?.map((val,index)=>(
          <span key={index}><span key={val}>{val}</span>&nbsp;</span>
        ))
      }

    </div>
  );
};

export default App;
