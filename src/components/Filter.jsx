import React, { useContext, useState } from "react";
import { ContextData } from "../App";
import { bankData } from "../data";

const Filter = () => {
  const [data, setData] = useState(bankData);
  const { select, setSelect } = useContext(ContextData);

  return (
    <>
      <div className="filterContainer">
        <h2>All Banks</h2>
        <select
          name=""
          id=""
          defaultValue={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option>Select Category</option>
          {data.map((item, index) => (
            <option key={index} value={item.Bank}>
              {item.Bank}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Filter;
