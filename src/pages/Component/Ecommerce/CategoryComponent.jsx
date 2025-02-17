import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const token = localStorage.getItem("token");

  // Fetch categories
  const fetchCategories = () => {
    axios
      .get("http://127.0.0.1:8000/api/category", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Add new category
  const addCategory = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://127.0.0.1:8000/api/category",
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        fetchCategories();
        setName(""); // Reset input field
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          alert(error.response.data.message);
        }
      });
  };

  // Update existing category
  const updateCategory = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://127.0.0.1:8000/api/category/update/${selectedCategoryId}`,
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        // fetchCategories();
        setName(""); // Reset input field
        setIsEdit(false);
        setSelectedCategoryId(null);
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          alert(error.response.data.message);
        }
      });
  };

  // Get category data for editing
  const editData = (id) => {
    axios
      .get(`http://127.0.0.1:8000/api/category/edit/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setName(response.data.name);
        setIsEdit(true);
        setSelectedCategoryId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{isEdit ? "Edit Category" : "Add New Category"}</h2>

      {/* Category Form */}
      <div className="card p-4 mb-4">
        <form onSubmit={isEdit ? updateCategory : addCategory}>
          <div className="mb-3">
            <label className="form-label">Category Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {isEdit ? "Update Category" : "Add Category"}
          </button>
          {isEdit && (
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => {
                setIsEdit(false);
                setName("");
                setSelectedCategoryId(null);
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* Category List Table */}
      <div className="card p-4">
        <h4>Category List</h4>
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((item, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => editData(item.id)}
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No Categories Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryComponent;
