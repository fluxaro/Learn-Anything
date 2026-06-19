import React, { useState, useRef, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import "./header.css"

const programLinks = [
  { to: "/courses", label: "All Courses" },
  { to: "/benefits", label: "Benefits" },
  { to: "/expertise", label: "Expertise" },
  { to: "/pricing", label: "Pricing" },
]

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/journal", label: "Journal" },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className='site-header'>
      <div className='container-wide header-inner'>
        <Link to='/' className='brand' onClick={() => setOpen(false)}>
          <span className='brand-icon'>
            <svg width='22' height='22' viewBox='0 0 22 22' fill='none' aria-hidden='true'>
              <circle cx='11' cy='11' r='10' fill='#2563EB' />
              <path d='M7 11.5L10 14.5L15 9' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            </svg>
          </span>
          <strong className='brand-name'>Learn Anything</strong>
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <ul>
            {navLinks.slice(0, 1).map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} activeClassName='active' onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li className='nav-dropdown' ref={dropdownRef}>
              <button
                type='button'
                className={`dropdown-trigger ${dropdownOpen ? "open" : ""}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                Programs
                <i className='fa fa-chevron-down'></i>
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                {programLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      onClick={() => {
                        setDropdownOpen(false)
                        setOpen(false)
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {navLinks.slice(1).map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} activeClassName='active' onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className='mobile-actions'>
            <Link to='/contact' className='nav-contact-outline' onClick={() => setOpen(false)}>
              Contact Us
            </Link>
            <Link to='/courses' className='nav-icon-btn' onClick={() => setOpen(false)}>
              <i className='fa fa-graduation-cap'></i>
            </Link>
          </div>
        </nav>

        <div className='header-actions'>
          <Link to='/contact' className='nav-contact-outline'>
            Contact Us
          </Link>
          <Link to='/courses' className='nav-icon-btn' aria-label='Browse courses'>
            <i className='fa fa-graduation-cap'></i>
          </Link>
          <button
            className='nav-toggle'
            aria-label='Toggle menu'
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <i className={`fa ${open ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>
      {open && <div className='nav-backdrop' onClick={() => setOpen(false)} />}
    </header>
  )
}

export default Header
