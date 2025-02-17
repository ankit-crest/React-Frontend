import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const redirect = useNavigate();
  const handleLogOut = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      redirect("/login");
    }
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-secondary px-3">
        <span className="navbar-brand">Dashboard</span>
        <div>
          <Link to="/" className="text-white mx-2 text-decoration-none">
            Dashboard
          </Link>
          <Link to="/about" className="text-white mx-2 text-decoration-none">
            About
          </Link>
          <Link to="/contact" className="text-white mx-2 text-decoration-none">
            Contact
          </Link>
          <a
            href="#"
            className="text-white mx-2 text-decoration-none"
            onClick={handleLogOut}
          >
            Logout
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
