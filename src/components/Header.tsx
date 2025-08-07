import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "home", href: "#home", isLink: false },
    { key: "about", href: "#about", isLink: false },
    { key: "products", href: "#products", isLink: false },
    { key: "shop", href: "/shop", isLink: true },
    { key: "gallery", href: "#gallery", isLink: false },
    { key: "contact", href: "#contact", isLink: false },
  ];

  const handleNavigation = (href: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If on home page, just scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-sm dark:bg-gray-900 shadow-gray-700/20"
          : "bg-white/95 backdrop-blur-sm dark:bg-gray-900/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/saddle.jpg"
                alt="Saddle Fusion Logo"
                className="h-20 w-20 object-contain"
              />
              <div className="flex flex-col">
                <h1 className="text-xl lg:text-2xl font-bold text-amber-800 dark:text-white">
                  Saddle Fusion
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isLink ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-300 relative group dark:text-gray-300"
                >
                  {t(item.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-300 relative group"
                >
                  {t(item.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ),
            )}
          </nav>

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-amber-700 transition-colors duration-300 shadow"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6 text-amber-400" />
              ) : (
                <Moon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.isLink ? (
                  <Link
                    key={item.key}
                    to={item.href}
                    className="text-left text-gray-700 hover:text-amber-600 font-medium transition-colors duration-300 py-2 dark:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    onClick={() => handleNavigation(item.href)}
                    className="text-left text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 font-medium transition-colors duration-300 py-2"
                  >
                    {t(item.key)}
                  </button>
                ),
              )}
            </nav>

            <div className="mt-4 pt-4 border-t flex justify-between items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-amber-700 transition-colors duration-300 shadow mr-4"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-6 w-6 text-amber-400" />
                ) : (
                  <Moon className="h-6 w-6 text-gray-700" />
                )}
              </button>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "en" | "hi")}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
              >
                <option value="en">EN</option>
                <option value="hi">हि</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}