import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./Component/List";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSliceAuth } from "../storage/StoreTaskSlice";

const UserApi = () => {
  const [users, setUsers] = useState([]);
  const [activeUserData, setActiveUserData] = useState({});
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalPages, setTotalPages] = useState(0); // Total pages state

  const redirect = useNavigate();

  const token = localStorage.getItem("token");

  const activeUser = async (url) => {
    await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("hhh:", response.data);
        setActiveUserData(response.data);
      })
      .catch((response) => {
        console.log(response.status);
      });
  };

  useEffect(() => {
    axiosEffect("http://127.0.0.1:8000/api/userlist");

    activeUser("http://127.0.0.1:8000/api/user");
  }, []);

  const loginUSer = useSelector((state) => state.setAuth);

  console.log("login User:", loginUSer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeUserData && activeUserData.id) {
      dispatch(setSliceAuth(activeUserData));
    }
  }, [activeUserData, dispatch]);

  const axiosEffect = (url) => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
        setTotalPages(response.data.last_page);
      })
      .catch((response) => {
        console.log(response.status);
        if (response.status == 401) {
          redirect("/login");
        }
      });
  };

  // dispatch(setSliceAuth(activeUserData));

  const changePage = (currentPage) => {
    setCurrentPage(currentPage);
    axiosEffect("http://127.0.0.1:8000/api/userlist?page=" + currentPage);
  };
  const deleItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axiosEffect("http://127.0.0.1:8000/api/deleteItem/" + id);
    }
    // axiosEffect("http://127.0.0.1:8000/api/userlist");
  };

  return (
    <div className="container">
      <div className="row">
        <List
          userList={users.data}
          totalPages={users.last_page}
          currentPage={currentPage}
          setCurrentPage={changePage}
          deleData={deleItem}
        />
      </div>
    </div>
  );
};

export default UserApi;
