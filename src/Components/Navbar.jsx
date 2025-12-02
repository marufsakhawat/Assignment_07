import { TextAlignCenter } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        
        <div class="bg-white-100 shadow-lg">
            <div class="container mx-auto">
                <nav className="navbar bg-base-100 px-8 py-4">
      {/* Logo */}
      <div className="navbar-start">
        <a className="text-sm md:text-xl font-bold">CS — Ticket System</a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 text-black">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      {/* New Ticket Button (Desktop only) */}
      <div className="navbar-end hidden md:flex">
        <button className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold px-5 py-3 rounded-lg hover:cursor-pointer">
          + New Ticket
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[999] p-4 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
            <li>
              <button className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-lg mt-2">
                + New Ticket
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

            </div>
        </div>
        
    </div>
  )
}

export default Navbar