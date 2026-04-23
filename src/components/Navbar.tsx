import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import LogoDonGian from "@/assets/LogoDonGian.png";

const NAV_LINKS = [
  { path: "/", label: "TRANG CHỦ" },
  { path: "/san-pham", label: "SẢN PHẨM" },
  { path: "/cong-nghe", label: "CÔNG NGHỆ" },
  { path: "/giai-phap", label: "GIẢI PHÁP" },
  { path: "/ve-chung-toi", label: "VỀ CHÚNG TÔI" },
  { path: "/tin-tuc", label: "TIN TỨC" },
  { path: "/lien-he", label: "LIÊN HỆ" },
];

const LANGUAGES = [{ language: "VI" }, { language: "EN" }];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("VI");

  return (
    <header className="relative bg-black border-b border-white/10 text-white">
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-widest"
        >
          <img src={LogoDonGian} alt="Logo" className="size-10" />
          <span>THEGIOIROBOT</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `py-2 hover:text-[#2563EB] hover:border-b transition-colors ${isActive ? "text-[#2563EB] border-b" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <button
            className="cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search size={20} />
          </button>

          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm transition cursor-pointer"
            >
              {currentLanguage}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 bg-[#020617] border border-white/10 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                {LANGUAGES.map((item) => (
                  <button
                    key={item.language}
                    onClick={() => {
                      setIsLanguageOpen(false);
                      setCurrentLanguage(item.language);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-white/10 cursor-pointer"
                  >
                    {item.language}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="hidden md:block border-2 border-[#2563EB] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#2563EB] transition-all cursor-pointer">
            Dùng thử AI
          </button>

          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/98 border-t border-white/10 p-6 flex flex-col gap-4 z-50">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-bold hover:text-[#2563EB] hover:border-b pb-1 ${isActive ? "text-[#2563EB] border-b" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="w-full border-2 border-[#2563EB] px-4 py-1.5 rounded-full text-lg font-semibold hover:bg-[#2563EB] transition-all cursor-pointer">
              Dùng thử AI
            </button>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="w-full flex items-center px-4 md:px-8 pb-4 space-x-4 animate-fadeIn">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full bg-[#020617] border border-white/10 rounded-full px-5 py-3 text-sm outline-none focus:border-blue-600"
            />
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
          <X
            size={28}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-300 cursor-pointer"
          />
        </div>
      )}
    </header>
  );
}
