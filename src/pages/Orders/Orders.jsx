import React, { useState } from "react";
import style from "./Orders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

function Orders() {
  const arrowFont = <FontAwesomeIcon icon={faChevronDown} />;
  const checkFont = <FontAwesomeIcon icon={faSquareCheck} />;
  const [selectedValue, setSelectedValue] = useState("new_order");
  const selectedValueHandler = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h3>My Orders</h3>
      {/* Start Search Bar*/}
      <div className="d-flex align-items-center">
        <input
          className="p-1 ps-3 w-100  border-2 border-dark-subtle pb-2 me-1 rounded"
          type="text"
          placeholder="Search.."
        />
        <button className="btn button">Search</button>
      </div>
      {/* End Search Bar*/}
      {/* Start Table Titles */}
      <div className={`${style.table_titles} mt-4`}>
        <ul>
          <li className={`${style.active}`}>
            All Orders <span className={`${style.active}`}>30</span>
          </li>
          <li>
            Complete <span>30</span>
          </li>
          <li>
            New Order <span>30</span>
          </li>
          <li>
            Rejected <span>30</span>
          </li>
        </ul>
      </div>
      {/* End Table Titles*/}
      {/* Start Showing Result */}
      <div
        className={`${style.showing_result} mt-4 container d-flex justify-content-between align-items-center`}
      >
        <p>Showing result 101-120 Result</p>
        <p>
          item per page <span>10 {arrowFont}</span>
        </p>
      </div>
      {/* End Showing Result */}
      {/* Start Table */}
      <table className="table table-hover text-center mt-3">
        <thead>
          <tr className="text-secondary">
            <th scope="col">{checkFont}</th>
            <th scope="col">ID Order</th>
            <th scope="col">Product</th>
            <th scope="col">Customer</th>
            <th scope="col">Number</th>
            <th scope="col">Status</th>
            <th scope="col">Created Date</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th className="text-secondary" scope="row">
              <input className={style.my_check} type="checkbox" />
            </th>
            <td>990-123</td>
            <td className="fw-bold">Tv 14 Inche</td>
            <td>Youssef Shahien</td>
            <td>01222222228</td>
            {/* Start Status Board*/}
            <td className={style.status}>
              <select
                name="status"
                id="status"
                className={`${style[selectedValue]} ${style.status_box}`}
                value={selectedValue}
                onChange={selectedValueHandler}
              >
                <option value="new_order" className={`${style.new_order}`}>
                  New Order
                </option>
                <option value="complete" className={`${style.complete}`}>
                  Complete
                </option>

                <option value="rejected" className={`${style.rejected}`}>
                  Rejected
                </option>
              </select>
            </td>
            {/* End Status Board*/}
            <td>
              March 21,2020
              <br />
              00:28
            </td>
            <td className="fw-bold">19.0$</td>
          </tr>
        </tbody>
      </table>
      {/* End Table */}
    </div>
  );
}

export default Orders;
