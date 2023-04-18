import React, { useContext, useState } from "react";
import { ContextData } from "../App";
import { bankData } from "../data";
import Loader from "./Loader";

const Table = () => {
  const [data, setData] = useState(bankData);
  const selectData = useContext(ContextData);
  const [loading, setLoading] = useState(bankData); // Note :- Not Run On Undefined Only Run On ""

  return (
    <>
      <table>
        {/* <thead> */}
        <tr id="headingTable">
          <th style={{ width: "43%" }}>Bank</th>
          <th>IFSC</th>
          <th>Branch</th>
          <th>Bank ID</th>
          <th style={{ width: "25%" }}>Address</th>
        </tr>
        {/* </thead> */}
        <tbody>
          {loading !== "" ? (
            selectData.select === "Select Category" ||
            selectData.select === "" ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td style={{ width: "572px" }}>{item.Bank}</td>
                  <td>{item.IFSC}</td>
                  <td style={{ width: "141px" }}>{item.Branch}</td>
                  <td style={{ width: "211px" }}>{item.BankId}</td>
                  <td style={{ width: "287px" }}>{item.Address}</td>
                </tr>
              ))
            ) : (
              data
                .filter((item) => item.Bank === selectData.select)
                .map((item, index) => (
                  <tr key={index}>
                    <td style={{ width: "572px" }}>{item.Bank}</td>
                    <td>{item.IFSC}</td>
                    <td style={{ width: "141px" }}>{item.Branch}</td>
                    <td style={{ width: "211px" }}>{item.BankId}</td>
                    <td style={{ width: "287px" }}>{item.Address}</td>
                  </tr>
                ))
            )
          ) : (
            <Loader />
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
