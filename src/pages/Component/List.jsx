import React, { useState, useEffect } from "react";

const List = ({
  userList,
  totalPages,
  currentPage,
  setCurrentPage,
  deleData,
}) => {
  // console.log(currentPage);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userList &&
            userList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.created_at}</td>
                <td>
                  {/* <a className="btn btn-warning btn-sm me-2" onClick={()=>editdetails} href="#">
                    <i className="fas fa-edit"></i> Edit
                  </a> */}
                  <a
                    className="btn btn-danger btn-sm"
                    href="#"
                    onClick={() => deleData(item.id)}
                  >
                    <i className="fas fa-trash-alt"></i> Delete
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <nav>
        <ul className="pagination">
          {/* Previous Button */}
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}

          {/* Next Button */}
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default List;
