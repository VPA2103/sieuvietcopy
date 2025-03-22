'use client'
import React, { useState } from 'react'
import './Header.css'
import '@/components/Header/Header'
import Link from 'next/link'

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    console.log('Button Clicked!') // Debug
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <>
      <header className='header'>
        <div className='top-header bg-gray-100 py-3 border-b border-gray-300'>
          <div className='container mx-auto flex justify-between items-center px-4'>
            <div className='nav-top-links flex flex-wrap items-center justify-between text-base font-semibold text-gray-700 p-2 bg-gray-100 rounded-lg'>
              <Link className='hover:text-red-500 transition-colors' href='/'>
                Chào mừng bạn đến với công ty TNHH Máy Văn Phòng Siêu Việt ||
              </Link>
              <Link
                className='hover:text-blue-600 transition-colors flex items-center gap-1'
                href='tel:0937 801 309'
              >
                📞 Liên hệ: 0937 801 309
              </Link>
            </div>
            <div className='top-bar-social flex gap-3'>
              <Link
                href='https://www.facebook.com/profile.php?id=100005151195409'
                className='text-gray-700 text-xl hover:text-blue-600'
              >
                <i className='fa-brands fa-facebook'></i>
              </Link>
              <Link href='/' className='text-gray-700 text-xl hover:text-blue-400'>
                <i className='fa-brands fa-twitter'></i>
              </Link>
              <Link href='/' className='text-gray-700 text-xl hover:text-red-500'>
                <i className='fa-brands fa-pinterest'></i>
              </Link>
              <Link href='/' className='text-gray-700 text-xl hover:text-red-600'>
                <i className='fa-brands fa-google'></i>
              </Link>
            </div>

            <div className='biz-fied flex items-center gap-5'>
              <div
                id='cart-block'
                className='bolock-cart-topbar flex items-center'
              >
                <Link
                  href='/cart'
                  className='relative bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 font-semibold flex items-center gap-2'
                >
                  🛒 Cart
                  <span className='absolute -top-2 -right-2 bg-white text-orange-500 px-2 py-1 rounded-full text-xs font-bold border border-orange-500'>
                    1
                  </span>
                </Link>
              </div>

              <div className='support-link flex gap-4 text-gray-700 font-semibold'>
                <Link className='hover:text-blue-500' href='/'>
                  Dịch vụ
                </Link>
                <Link className='hover:text-blue-500' href='/'>
                  Hỗ trợ
                </Link>
              </div>

              <div id='user-info-top' className='relative'>
                <button
                  id='account-btn'
                  className='text-gray-700 font-semibold cursor-pointer hover:text-blue-600 flex items-center gap-1'
                  onClick={toggleDropdown}
                >
                  <span>Tài khoản</span>
                  <i className='fa fa-chevron-down text-sm'></i>
                </button>

                <ul
                  id='user-dropdown'
                  className={`absolute right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-40 transition-all duration-300 transform ${
                    isDropdownVisible ? 'active' : 'hidden'
                  }`}
                >
                  <li>
                    <Link
                      className='block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2'
                      href='/account/register'
                    >
                      <span className='fa fa-user-plus'></span> Đăng ký
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2'
                      href='/account/login'
                    >
                      <span className='fa fa-sign-in'></span> Đăng nhập
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id='main-header' className='bg-blue-800 shadow-md'>
          <div className='container mx-auto px-4 py-4'>
            <div className='flex flex-wrap items-center justify-between'>
              <div className='w-full sm:w-1/4'>
                <h1>
                  <Link href='https://mayvanphongsieuviet.com'>
                    <img
                      src='//theme.hstatic.net/200000202353/1000633675/14/logo2.png?v=145'
                      alt='Công ty TNHH Máy Văn Phòng Siêu Việt'
                      className='w-40 h-auto mx-auto sm:mx-0'
                    />
                  </Link>
                </h1>
              </div>

              <div className='w-full sm:w-3/4'>
                <nav className='relative'>
                  <button
                    id='menu-toggle'
                    className='block sm:hidden p-2 bg-blue-700 text-white rounded-md'
                  >
                    <i className='fa fa-bars text-lg'></i>
                  </button>

                  <ul
                    id='menu'
                    className='hidden sm:flex space-x-6 text-base font-medium sm:justify-end'
                  >
                    <li>
                      <Link
                        href='/'
                        className='text-white hover:text-blue-300 transition duration-300'
                      >
                        Trang chủ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/collections/all'
                        className='text-white hover:text-blue-300 transition duration-300'
                      >
                        Sản phẩm
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/blogs/news'
                        className='text-white hover:text-blue-300 transition duration-300'
                      >
                        Cho thuê máy photocopy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/blogs/news'
                        className='text-white hover:text-blue-300 transition duration-300'
                      >
                        Sửa máy photocopy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/pages/about-us'
                        className='text-white hover:text-blue-300 transition duration-300'
                      >
                        Giới thiệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/pages/lien-he'
                        className='text-white hover:text-blue-300 transition duration-300'
                      >
                        Liên Hệ
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className='service-header bg-gray-100 py-6 rounded-lg'>
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center'>
              <div className='flex flex-col items-center space-y-2 hover:scale-105 transition transform'>
                <Link href='#'>
                  <img
                    src='//theme.hstatic.net/200000202353/1000633675/14/z1.png?v=145'
                    alt='Giao hàng toàn quốc'
                    className='w-16 h-16'
                  />
                  <span className='text-gray-700 font-semibold'>
                    Giao hàng toàn quốc
                  </span>
                </Link>
              </div>
              <div className='flex flex-col items-center space-y-2 hover:scale-105 transition transform'>
                <Link href='#'>
                  <img
                    src='//theme.hstatic.net/200000202353/1000633675/14/z2.png?v=145'
                    alt='Hỗ trợ trực tuyến 24/7'
                    className='w-16 h-16'
                  />
                  <span className='text-gray-700 font-semibold'>
                    Hỗ trợ trực tuyến 24/7
                  </span>
                </Link>
              </div>
              <div className='flex flex-col items-center space-y-2 hover:scale-105 transition transform'>
                <Link href='#'>
                  <img
                    src='//theme.hstatic.net/200000202353/1000633675/14/z3.png?v=145'
                    alt='Đảm bảo chất lượng'
                    className='w-16 h-16'
                  />
                  <span className='text-gray-700 font-semibold'>
                    Đảm bảo chất lượng
                  </span>
                </Link>
              </div>
              <div className='flex flex-col items-center space-y-2 hover:scale-105 transition transform'>
                <Link href='#'>
                  <img
                    src='//theme.hstatic.net/200000202353/1000633675/14/z4.png?v=145'
                    alt='Thanh toán khi nhận hàng'
                    className='w-16 h-16'
                  />
                  <span className='text-gray-700 font-semibold'>
                    Thanh toán khi nhận hàng
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
