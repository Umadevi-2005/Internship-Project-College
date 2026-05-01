import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <header className="sticky-top">
        <nav className='navbar navbar-expand-lg navbar-dark shadow-sm' 
             style={{ background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%)', padding: '15px 0' }}>
            <div className="container">
                
                {/* Brand Name */}
                <NavLink className="navbar-brand fw-bold fs-3" to="/" style={{ letterSpacing: '1px' }}>
                  <span style={{ color: '#60a5fa' }}>EMS--</span>Employee Management System
                </NavLink>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink 
                            className='nav-link px-4' 
                            to='/employees'
                            style={({ isActive }) => ({
                                fontSize: '1.2rem',   // Increased Size
                                fontWeight: '500',    // Medium Weight
                                color: isActive ? '#60a5fa' : 'white',
                                transition: '0.3s'
                            })}
                        >
                            Employees
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className='nav-link px-4' 
                            to='/departments'
                            style={({ isActive }) => ({
                                fontSize: '1.2rem',   // Increased Size
                                fontWeight: '500',    // Medium Weight
                                color: isActive ? '#60a5fa' : 'white',
                                transition: '0.3s'
                            })}
                        >
                            Departments
                        </NavLink>
                    </li>
                  </ul>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default HeaderComponent;