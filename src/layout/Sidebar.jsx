import { Outlet, Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="col-auto bg-dark text-white p-3 sidebar">
        <h4 className="text-center">Menu</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link text-white">
              User List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category" className="nav-link text-white">
              Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link text-white">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/orders" className="nav-link text-white">
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-white"></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
