'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import './Header.css'




export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div>
      {/* Top Header */}
      <div className="top-header bg-gray-100 py-3 border-b border-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left Side - Welcome and Contact */}
            <div className="nav-top-links flex items-center text-sm md:text-base font-semibold text-gray-700">
              <Link
                className="hover:text-red-500 transition-colors mr-2"
                href="/"
              >
                Chào mừng bạn đến với công ty TNHH Máy Văn Phòng Siêu Việt ||
              </Link>
              <Link
                className="hover:text-blue-600 transition-colors flex items-center gap-1"
                href="tel:0937801309"
              >
                📞 Liên hệ: 0937 801 309
              </Link>
            </div>

            {/* Right Side - Social Media, Support, and Account */}
            <div className="flex items-center gap-4">
              {/* Social Media Links */}
              <div className="hidden md:flex gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=100005151195409"
                  className="social-icon facebook"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                {/* Other social media links */}
              </div>

              {/* Support Links */}
              <div className="hidden md:flex gap-4 font-semibold">
                <Link className="hover:text-blue-500 text-gray-700" href="/">
                  Dịch vụ
                </Link>
                <Link className="hover:text-blue-500 text-gray-700" href="/">
                  Hỗ trợ
                </Link>
              </div>

              {/* Cart and Account Section */}
              <div className="flex items-center gap-4">
                {/* Cart */}
                <div className="cart-block">
                  <Link href="/cart" className="cart-button flex items-center">
                    🛒 Cart
                    <span className="cart-count ml-1">1</span>
                  </Link>
                </div>

                {/* Account Dropdown */}
                <div className="relative">
                  <button
                    className="account-button flex items-center hover:text-blue-600 font-medium"
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownVisible}
                    aria-haspopup="true"
                  >
                    <span>Tài khoản</span>
                    <i
                      className={`fa fa-chevron-down text-sm transition-transform ml-1 ${
                        isDropdownVisible ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </button>

                  <ul
                    className={`dropdown-menu absolute right-0 mt-2 w-48 bg-white shadow-lg rounded z-10 ${
                      isDropdownVisible ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <Link
                        className="dropdown-item block px-4 py-2 hover:bg-gray-100 text-gray-800"
                        href="/account/register"
                      >
                        <span className="fa fa-user-plus mr-2"></span> Đăng ký
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item block px-4 py-2 hover:bg-gray-100 text-gray-800"
                        href="/account/login"
                      >
                        <span className="fa fa-sign-in mr-2"></span> Đăng nhập
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Logo and Navigation */}
      <div className="w-full bg-gradient-to-r  bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 bg-white">
            {/* Logo */}
            <div className="logo-container">
              <a href="https://mayvanphongsieuviet.com" className="block">
                <img
                  src="https://theme.hstatic.net/200000202353/1000633675/14/logo2.png?v=145"
                  alt="Công ty TNHH Máy Văn Phòng Siêu Việt"
                  className="w-40 h-auto"
                />
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="block md:hidden p-2 rounded-md hover:bg-slate-800 transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Navigation Links */}
            <nav
              className={`
          main-nav 
          ${isMobileMenuOpen ? 'block' : 'hidden'} 
          md:block 
          absolute md:static 
          top-16 left-0 right-0 
          md:top-auto md:left-auto md:right-auto
          bg-slate-900 md:bg-transparent
          z-50 md:z-auto
        `}
            >
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-base font-medium p-4 md:p-0">
                {[
                  { href: '/', label: 'Trang chủ' },
                  { href: '/collections/all', label: 'Sản phẩm' },
                  { href: '/blogs/news', label: 'Cho thuê máy photocopy' },
                  { href: '/blogs/news', label: 'Sửa máy photocopy' },
                  { href: '/pages/about-us', label: 'Giới thiệu' },
                  { href: '/pages/lien-he', label: 'Liên Hệ' },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="
                  block 
                  text-black
                  hover:text-white 
                  hover:bg-slate-800 
                  transition-colors 
                  duration-300 
                  px-3 py-2 
                  rounded-md
                "
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div></div>
      {/* Service Highlights Section */}
      <div className="service-header bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center"></div>
        </div>
      </div>
    </div>
  )
}
