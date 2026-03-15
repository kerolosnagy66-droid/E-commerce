import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";





const Navlinks = [
  {name: "Home", path: "/"},
  {name: "Shop", path: "/shop"},
  {name: "Blog", path: "/blog"},
  {name: "About", path: "/about"},
  {name: "Contact", path: "/contact"},
]

function Navbar() {
  const location = useLocation();
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(data => setCategories(data));
  }, []);
  
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
                <Link to={category.slug} onClick={() => setShowCategories(false)}>{category.name}</Link>
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
          <Link to="/login"><MdOutlineLogin /></Link>
          <Link to="/register"><FaUserPlus /></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar