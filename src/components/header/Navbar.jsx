import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Navlinks = [
  {name: "Home", path: "/"},
  {name: "Shop", path: "/shop"},
  {name: "Blog", path: "/blog"},
  {name: "About", path: "/about"},
  {name: "Contact", path: "/contact"},
]

function Navbar(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const {isLoggedIn, categories} = props;
  const [showCategories, setShowCategories] = useState(false);
  
  const handleLogOut = () => {
    if (props.logOut) {
      props.logOut();
    } else {
      toast.success('Successfully logged out!');
      navigate('/login');
    }
  };
  
  return (
    <div className='navbar'>
      <div className="container">
        <div className="categories">
          <div className="categories_btn" onClick={() => setShowCategories(!showCategories)}>
            <IoMdMenu />
            <p style={{ color: "white" }}>all categories</p>
            <IoMdArrowDropdown />
          </div>

          <div className={`categories_nav ${showCategories ? "show" : ""}`}>
            {categories.map((category, index) => (
              <div key={index} className="categories_nav_links">
                <Link to={`/category/${category.slug}`} onClick={() => setShowCategories(false)}>{category.name}</Link>
              </div>
            ))}
          </div>
        </div>

        <ul className="nav_links">
          {Navlinks.map((item, index) => (
            <li key={index} className={location.pathname === item.path ? "active" : ""}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className='header_icon'>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className={location.pathname === "/login" ? "active" : ""}><MdOutlineLogin />Login</Link>
              <Link to="/register" className={location.pathname === "/register" ? "active" : ""}><FaUserPlus />Register</Link>
            </>
          ) : (
            <span 
              className="nav-link" 
              onClick={handleLogOut} 
              style={{color:'red', cursor:'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '500'}}
            >
              <MdOutlineLogout style={{fontSize: '20px'}} />Logout
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar