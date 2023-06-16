// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const arr = [
//     [1990, 1991, 1992, 1993, 1994],
//     [2000, 2001, 2002, 2003, 2004],
//     [2010, 2011, 2012],
//     [3001, 3002, 3003, 3004]
//   ]

//   const [boxIsCheck, setBoxIsCheck] = useState([]);

//   const onHandleChange = (index, i) => {
//     var updatedList = [...boxIsCheck];
//     var check = boxIsCheck?.includes(arr[index][i])

//     if (check) {
//       updatedList.splice(boxIsCheck.indexOf(arr[index][i]), 1);
//     } else {
//       updatedList = [...boxIsCheck, arr[index][i]]
//     }
//     setBoxIsCheck(updatedList)
//   }

//   const [save, setSave] = useState([])
//   useEffect(() => {
//     const trueIndices = [];
//     for (let i = 0; i < arr.length; i++) {
//       let data = arr[i].every(value => {
//         return boxIsCheck.includes(value);
//       })
//       if (data) {
//         trueIndices.push(i)
//       }
//     }
//     setSave(trueIndices)
//   }, [boxIsCheck])

//   console.log(save)

//   // const onCheck = (index) => {
//   //   const allChecked = arr[index].every((values) => values.checked);
//   //   const updatedArr = arr.map((item, i) => {
//   //     if (i === index) {
//   //       return item.map((values) => ({ ...values, checked: !allChecked }));
//   //     }
//   //     return item;
//   //   });
//   //   setBoxIsCheck(updatedArr);
//   // };

//   return (
//     <>

//       {arr.map((item, index) => (
//         <div key={index}>
//           <input value={item} type="checkbox"/>
//           {
//             item?.map((values, i) => (
//               <span key={i}>
//                 <input value={values} type="checkbox" onChange={() => onHandleChange(index, i)} />{values}
//               </span>
//             ))
//           }
//         </div>
//       ))}

//     </>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// const ParentChildCheckbox = () => {
//   const [checkboxState, setCheckboxState] = useState([
//     [false, false, false, false, false],
//     [false, false, false, false, false],
//     [false, false, false],
//     [false, false, false, false]
//   ]);

//   const arr = [
//         [1990, 1991, 1992, 1993, 1994],
//         [2000, 2001, 2002, 2003, 2004],
//         [2010, 2011, 2012],
//         [3001, 3002, 3003, 3004]
//       ]

//   const handleParentCheckboxChange = (rowIndex,rowind) => {
//     console.log(rowind)
//     const updatedState = [...checkboxState];
//     const rowChecked = updatedState[rowIndex].every((checked) => checked);
//     updatedState[rowIndex] = rowChecked ? updatedState[rowIndex].map(() => false) : updatedState[rowIndex].map(() => true);
//     setCheckboxState(updatedState);
//   };

//   const handleChildCheckboxChange = (rowIndex, childIndex) => {
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
//             onChange={() => handleParentCheckboxChange(rowIndex,arr[rowIndex])}
//           />

//           {row.map((checked, childIndex) => (
//             <span key={childIndex}>
//               <input
//                 type="checkbox"
//                 checked={checked}
//                 onChange={() => handleChildCheckboxChange(rowIndex, childIndex)}
//               />
//               {arr[rowIndex][childIndex]}
//             </span>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ParentChildCheckbox;

// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const arr = [
//     [1990, 1991, 1992, 1993, 1994],
//     [2000, 2001, 2002, 2003, 2004],
//     [2010, 2011, 2012],
//     [3001, 3002, 3003, 3004]
//   ];

//   const [boxIsCheck, setBoxIsCheck] = useState([]);

//   const onHandleChange = (index, i) => {
//     const updatedList = [...boxIsCheck];
//     const check = updatedList.includes(arr[index][i]);

//     if (check) {
//       updatedList.splice(updatedList.indexOf(arr[index][i]), 1);
//     } else {
//       updatedList.push(arr[index][i]);
//     }
//     setBoxIsCheck(updatedList);
//   };

//   const [save, setSave] = useState([]);
//   useEffect(() => {
//     const trueIndices = [];
//     for (let i = 0; i < arr.length; i++) {
//       const data = arr[i].every(value => boxIsCheck.includes(value));
//       if (data) {
//         trueIndices.push(i);
//       }
//     }
//     setSave(trueIndices);
//   }, [boxIsCheck]);

//   const handleParentCheckboxChange = (index) => {
//     const selectedValues = arr[index];
//     const updatedList = [...boxIsCheck];
//     const allChecked = selectedValues.every(value => updatedList.includes(value));

//     if (allChecked) {
//       updatedList.splice(updatedList.findIndex(value => selectedValues.includes(value)),selectedValues.length);
//     } else {
//       updatedList.push(...selectedValues);
//     }

//     setBoxIsCheck(updatedList);
//   };

//   return (
//     <>
//       {arr.map((item, index) => (
//         <div key={index}>
//           <input
//             type="checkbox"
//             checked={item.every(value => boxIsCheck.includes(value))}
//             onChange={() => handleParentCheckboxChange(index)}
//           />
//           {item.map((value, i) => (
//             <span key={i}>
//               <input
//                 type="checkbox"
//                 checked={boxIsCheck.includes(value)}
//                 onChange={() => onHandleChange(index, i)}
//               />
//               {value}
//             </span>
//           ))}
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";

const ParentChildCheckbox = () => {
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

  const [showValue, setShowValue] = useState([]);

  const handleParentCheckboxChange = (rowIndex, rowind) => {
    const updatedState = [...checkboxState];
    const rowChecked = updatedState[rowIndex].every((checked) => checked);
    updatedState[rowIndex] = rowChecked
      ? updatedState[rowIndex].map(() => false)
      : updatedState[rowIndex].map(() => true);
    setCheckboxState(updatedState);
  };

  const handleChildCheckboxChange = (rowIndex, childIndex, colIndex) => {
    const updatedState = [...checkboxState];
    updatedState[rowIndex][childIndex] = !updatedState[rowIndex][childIndex];
    setCheckboxState(updatedState);
  };

  return (
    <div>
      {/* {
        showValue?.map((val)=>{
          return(
            <>
              <ul>{val+""}</ul> <br />
            </>
          )
        })
      } */}
      {checkboxState.map((row, rowIndex) => (
        <div key={rowIndex}>
          <input
            type="checkbox"
            checked={row.every((checked) => checked)}
            onChange={() => handleParentCheckboxChange(rowIndex, arr[rowIndex])}
          />

          {row.map((checked, childIndex) => (
            <span key={childIndex}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => handleChildCheckboxChange(rowIndex, childIndex,arr[rowIndex][childIndex])}
              />
              {arr[rowIndex][childIndex]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ParentChildCheckbox;
