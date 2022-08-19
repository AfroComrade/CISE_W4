import React from 'react';
import SEPractices from "../dummydata/SEPractices"
 
  const optionItems = SEPractices.map((SEPractices) =>
                <option key={SEPractices.practice}>{SEPractices.practice}</option>);



  const Dropdown = () => {
    return (
        <div>
             <select id = 'selector' defaultValue = "word">
                <option value = "test">Select a SE Practice</option>
                {optionItems}
             </select>
             <p>Hi</p>
         </div>
 
    )
  }
  export default Dropdown;