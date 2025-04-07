import { Link } from "react-router-dom";
import { navBars } from "../../utils/constrants";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const handleDropdownToggle = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      let isOutside = true;
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && ref.contains(event.target)) {
          isOutside = false;
        }
      });

      if (isOutside) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-5 h-[90px] bg-transparent flex items-center justify-between fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <Link to="/" title="Rophim">
        <img
          src="https://www.rophim.me/images/logo.svg"
          alt="Rophim Logo"
          className="w-auto h-[40px]"
        />
      </Link>
      {/* Search */}
      <div className="relative flex-1 max-w-[500px]">
        <div className="absolute left-3 top-3">
          <IoSearch className="text-white" size={22} />
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm phim, diễn viên"
          className="w-full h-[2.8rem] leading-[2rem] px-[3rem] py-[0.4rem] bg-[#ffffff14] text-white text-[1em] outline-none shadow-none rounded-[0.4rem]"
        />
      </div>
      {/* Menu */}
      <div className="flex items-center">
        {navBars.map((item) => (
          <div key={item.id} className="relative">
            <div
              className="text-[13px] px-[0.7rem] leading-[36px] flex-shrink-0 whitespace-nowrap text-white flex items-center gap-1 cursor-pointer"
              onClick={() => handleDropdownToggle(item.id)}
            >
              <Link to={item.path}>{item.title}</Link>
              {item.children && <TiArrowSortedDown />}
            </div>

            {/* Dropdown Menu */}
            {openDropdown === item.id && item.children && (
              <div
                ref={(el) => (dropdownRefs.current[item.id] = el)}
                className="absolute left-1/2 py-1 top-full transform -translate-x-1/2 bg-[#0f111af2] text-white shadow-md rounded-md w-[160px] mt-2"
              >
                {item.children.map((child) => (
                  <Link
                    key={child.id}
                    to={child.path}
                    className="block text-[13px] px-4 py-2 hover:bg-[#ffffff05] hover:text-[#ffd875]"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center justify-center">
          <Link
            to={"#"}
            className="flex items-center bg-[#fff] w-[125px] text-[14px] px-[0.8rem] py-[0.5rem] text-black rounded-[3rem] font-medium"
          >
            <FaUser />
            <span className="pl-[0.5rem]">Thành viên</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
