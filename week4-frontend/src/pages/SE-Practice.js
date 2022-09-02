import React, {useState} from "react";
import articles from "../dummydata/articles.js";
import articles2 from "../dummydata/articles2.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";

const SEPractice = () => {

  // We use this to set the state on the page, rather than the table and dropdown
  // useState is a hook we need to pull from react
  const [selectOption, setSelectedOption] = useState("");

  var data1 = articles;
  if (selectOption == "TDD")
  {
    data1 = articles2;
  }

  // NOTE:
  // eventHandler is a function that's part of the 
    return (
      <div className = "content">
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown eventHandler= {setSelectedOption}
          />
               <Styles>
                 <Table
                  option={selectOption}
                  data={data1}
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
}
 
export default SEPractice;