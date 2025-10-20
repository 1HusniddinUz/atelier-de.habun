import React, { useState, useEffect } from "react";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown } from "lucide-react"; // qo'shimcha icon

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Body scroll lock
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <nav className="navbar">
            <h1>ATELIER DE HABUN</h1>

            {/* Desktop va Mobile Menu */}
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <div className="navigation">

                    <li>
                        <a href="#OurProducts">{t(`products`)}</a>
                    </li>

                    {/* ✅ Dropdown - Marketplace */}
                    <li
                        className="dropdown"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button
                            className="dropdown-btn"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <a href="#">Marketplace</a> <ChevronDown size={16} />
                        </button>
                        <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                            <li><a href="#ozon">Ozon</a></li>
                            <li><a href="#yandex">Yandex Market</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#Footer">{t(`contact`)}</a>
                    </li>
                </div>

                <div className="lang_switcher_mobile">
                    <a
                        href="tel:+998996255527"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t(`phone`)} +998(99) 625 55 27
                    </a>
                    <select
                        id="select"
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        defaultValue="ru"
                    >
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="en">🇬🇧 English</option>
                        <option value="uz">🇺🇿 O'zbek</option>
                    </select>
                </div>
            </ul>

            {/* Burger Icon */}
            <div
                className={`burger ${isOpen ? "fixed" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </div>
        </nav>
    );
};

export default Navbar;
