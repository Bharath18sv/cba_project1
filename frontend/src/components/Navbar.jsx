import React, { useEffect, useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  User,
  ChevronDown,
  Package,
  ShoppingBag,
  Users,
  LogOut,
  UserCircle,
  Bell,
  Menu,
  X,
} from "lucide-react";
import { SearchContext } from "../context/SearchContext";

function Navbar({ role, user }) {
  const { setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchInput.trim() !== "") {
      handleSearch();
    }
  }, [searchInput]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const handleSearch = () => {
    setSearchTerm(searchInput);
    if (role === "admin") {
      navigate("/admin/products");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="shadow-lg border-b border-gray-100 sticky top-0 z-50 backdrop-blur-lg bg-white/95">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() =>
              role === "admin" ? navigate("/admin") : navigate("/")
            }
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
              <ShoppingCart className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SnapCart
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                placeholder="Search for products, brands, and more..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-100"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Admin Links */}
            {role === "admin" && (
              <div className="flex items-center gap-4">
                <Link
                  to="/admin/products"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  <Package size={18} />
                  Products
                </Link>
                <Link
                  to="/admin/orders"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  <ShoppingBag size={18} />
                  Orders
                </Link>
                <Link
                  to="/admin/users"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  <Users size={18} />
                  Users
                </Link>
              </div>
            )}

            {/* User Links */}
            {role === "user" && (
              <div className="flex items-center gap-4">
                <Link
                  to="/cart"
                  className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <ShoppingCart size={24} />
                  {/* Cart Badge - you can add cart count here */}
                </Link>
                <Link
                  to="/myOrders"
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  My Orders
                </Link>
              </div>
            )}

            {/* User Dropdown */}
            {role && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {user?.name}
                  </span>
                  <ChevronDown
                    className={`text-gray-500 transform transition-transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    size={16}
                  />
                </button>

                {open && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                      {role === "admin" && (
                        <span className="inline-block mt-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          Administrator
                        </span>
                      )}
                    </div>

                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <UserCircle size={18} />
                      Profile Settings
                    </Link>

                    {role === "user" && (
                      <Link
                        to="/myOrders"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <ShoppingBag size={18} />
                        My Orders
                      </Link>
                    )}

                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors duration-200"
                      >
                        <LogOut size={18} />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={18} />
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Search products..."
              className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <Search size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {/* Admin Mobile Links */}
            {role === "admin" && (
              <div className="space-y-3">
                <Link
                  to="/admin/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <Package size={20} />
                  All Products
                </Link>
                <Link
                  to="/admin/orders"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <ShoppingBag size={20} />
                  All Orders
                </Link>
                <Link
                  to="/admin/users"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <Users size={20} />
                  All Users
                </Link>
              </div>
            )}

            {/* User Mobile Links */}
            {role === "user" && (
              <div className="space-y-3">
                <Link
                  to="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <ShoppingCart size={20} />
                  Shopping Cart
                </Link>
                <Link
                  to="/myOrders"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <ShoppingBag size={20} />
                  My Orders
                </Link>
              </div>
            )}

            {/* Profile Section */}
            {role && (
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-3 px-4 py-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>

                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <UserCircle size={20} />
                  Profile Settings
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <LogOut size={20} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
