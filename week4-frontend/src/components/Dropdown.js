import React from 'react';
import SEPractices from "../dummydata/SEPractices";
import evidenceTable from "./evidencetable";
 
  const optionItems = SEPractices.map((SEPractices) =>
                <option value={SEPractices.practice}>{SEPractices.practice}</option>);



  const Dropdown = (dropdownOption) => {
    
    // We receive the option from SE-Practice.js in order to determine what value we have selected in the dropdown
    // We can then set that option 'onChange' in the select component.
    const option = dropdownOption;

    //  Function for handling the dropdown change and passing the new value in
    const handleChange = (event) => {
      console.log("1:");
      console.log(event);
      console.log("2:");
      console.log(event.target);
      console.log("3:");
      console.log(event.target.value);
      //  Event holds the new value
      //  eventHandler updates the new value in the option passed by reference back to SE-Practice
      option.eventHandler(event.target.value);
    }


    return (
        <div>
             <select id = 'selector' defaultValue = "word" onChange={handleChange}>
                <option value = "test">Select a SE Practice</option>
                {optionItems}
             </select>
             <p>Hi</p>
         </div>
 
    )
  }
  export default Dropdown;

  // useEffect react hook
  // 