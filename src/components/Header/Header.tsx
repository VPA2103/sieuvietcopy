'use client'
import React, { useState } from 'react'
import './Header.css'
import '@/components/Header/Header'

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false)

  const toggleDropdown = () => {
    console.log('Button Clicked!') // Debug
    setDropdownVisible(!isDropdownVisible)
  }

  return (
    <>
      <header className="header">
        <div className="top-header bg-gray-100 py-3 border-b border-gray-300">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="nav-top-links flex flex-wrap items-center justify-between text-base font-semibold text-gray-700 p-2 bg-gray-100 rounded-lg">
              <a className="hover:text-red-500 transition-colors" href="/">
                Chào mừng bạn đến với công ty TNHH Máy Văn Phòng Siêu Việt ||
              </a>
              <a
                className="hover:text-blue-600 transition-colors flex items-center gap-1"
                href="tel:0937 801 309"
              >
                📞 Liên hệ: 0937 801 309
              </a>
            </div>
            <div className="top-bar-social flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100005151195409"
                className="text-gray-700 text-xl hover:text-blue-600"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="/" className="text-gray-700 text-xl hover:text-blue-400">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="/" className="text-gray-700 text-xl hover:text-red-500">
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a href="/" className="text-gray-700 text-xl hover:text-red-600">
                <i className="fa-brands fa-google"></i>
              </a>
            </div>

            <div className="biz-fied flex items-center gap-5">
              <div
                id="cart-block"
                className="bolock-cart-topbar flex items-center"
              >
                <a
                  href="/cart"
                  className="relative bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 font-semibold flex items-center gap-2"
                >
                  🛒 Cart
                  <span className="absolute -top-2 -right-2 bg-white text-orange-500 px-2 py-1 rounded-full text-xs font-bold border border-orange-500">
                    1
                  </span>
                </a>
              </div>

              <div className="support-link flex gap-4 text-gray-700 font-semibold">
                <a className="hover:text-blue-500" href="/">
                  Dịch vụ
                </a>
                <a className="hover:text-blue-500" href="/">
                  Hỗ trợ
                </a>
              </div>

              <div id="user-info-top" className="relative">
                <button
                  id="account-btn"
                  className="text-gray-700 font-semibold cursor-pointer hover:text-blue-600 flex items-center gap-1"
                  onClick={toggleDropdown}
                >
                  <span>Tài khoản</span>
                  <i className="fa fa-chevron-down text-sm"></i>
                </button>

                <ul
                  id="user-dropdown"
                  className={`absolute right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 w-40 transition-all duration-300 transform ${
                    isDropdownVisible ? 'active' : 'hidden'
                  }`}
                >
                  <li>
                    <a
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      href="/account/register"
                    >
                      <span className="fa fa-user-plus"></span> Đăng ký
                    </a>
                  </li>
                  <li>
                    <a
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      href="/account/login"
                    >
                      <span className="fa fa-sign-in"></span> Đăng nhập
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="main-header" className="bg-blue-800 shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full sm:w-1/4">
                <h1>
                  <a href="https://mayvanphongsieuviet.com">
                    <img
                      src="//theme.hstatic.net/200000202353/1000633675/14/logo2.png?v=145"
                      alt="Công ty TNHH Máy Văn Phòng Siêu Việt"
                      className="w-40 h-auto mx-auto sm:mx-0"
                    />
                  </a>
                </h1>
              </div>

              <div className="w-full sm:w-3/4">
                <nav className="relative">
                  <button
                    id="menu-toggle"
                    className="block sm:hidden p-2 bg-blue-700 text-white rounded-md"
                  >
                    <i className="fa fa-bars text-lg"></i>
                  </button>

                  <ul
                    id="menu"
                    className="hidden sm:flex space-x-6 text-base font-medium sm:justify-end"
                  >
                    <li>
                      <a
                        href="/"
                        className="text-white hover:text-blue-300 transition duration-300"
                      >
                        Trang chủ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/collections/all"
                        className="text-white hover:text-blue-300 transition duration-300"
                      >
                        Sản phẩm
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blogs/news"
                        className="text-white hover:text-blue-300 transition duration-300"
                      >
                        Cho thuê máy photocopy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blogs/news"
                        className="text-white hover:text-blue-300 transition duration-300"
                      >
                        Sửa máy photocopy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/about-us"
                        className="text-white hover:text-blue-300 transition duration-300"
                      >
                        Giới thiệu
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/lien-he"
                        className="text-white hover:text-blue-300 transition duration-300"
                      >
                        Liên Hệ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="service-header bg-gray-100 py-6 rounded-lg">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center space-y-2 hover:scale-105 transition transform">
                <a href="#">
                  <img
                    src="//theme.hstatic.net/200000202353/1000633675/14/z1.png?v=145"
                    alt="Giao hàng toàn quốc"
                    className="w-16 h-16"
                  />
                  <span className="text-gray-700 font-semibold">
                    Giao hàng toàn quốc
                  </span>
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2 hover:scale-105 transition transform">
                <a href="#">
                  <img
                    src="//theme.hstatic.net/200000202353/1000633675/14/z2.png?v=145"
                    alt="Hỗ trợ trực tuyến 24/7"
                    className="w-16 h-16"
                  />
                  <span className="text-gray-700 font-semibold">
                    Hỗ trợ trực tuyến 24/7
                  </span>
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2 hover:scale-105 transition transform">
                <a href="#">
                  <img
                    src="//theme.hstatic.net/200000202353/1000633675/14/z3.png?v=145"
                    alt="Đảm bảo chất lượng"
                    className="w-16 h-16"
                  />
                  <span className="text-gray-700 font-semibold">
                    Đảm bảo chất lượng
                  </span>
                </a>
              </div>
              <div className="flex flex-col items-center space-y-2 hover:scale-105 transition transform">
                <a href="#">
                  <img
                    src="//theme.hstatic.net/200000202353/1000633675/14/z4.png?v=145"
                    alt="Thanh toán khi nhận hàng"
                    className="w-16 h-16"
                  />
                  <span className="text-gray-700 font-semibold">
                    Thanh toán khi nhận hàng
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="box-vertical-megamenus">
          <h4 className="title">
            <span className="btn-open-mobile home-page">
              <i className="fa fa-bars"></i>
            </span>
            <span className="title-menu">Danh mục sản phẩm</span>
          </h4>
          <div className="vertical-menu-content is-home no-home">
            <ul className="vertical-menu-list">
              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/may-photocopy-den-trang"
                  title="Máy Photocopy/Thuê Máy"
                  target="_self"
                >
                  <span className="">Máy Photocopy/Thuê Máy</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a
                      href="/collections/may-photocopy-mau-9"
                      title="Máy Photocopy Màu"
                    >
                      Máy Photocopy Màu
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/may-photocopy-den-trang"
                      title="Máy Photocopy đen"
                    >
                      Máy Photocopy đen
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/may-photocopy-moi-100"
                      title="Máy Photocopy Mới"
                    >
                      Máy Photocopy Mới
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/thue-may-photocopy-1"
                      title="Thuê Máy Photocopy"
                    >
                      Thuê Máy Photocopy
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/drum-roi-opc"
                  title="DRUM/GẠT/TỪ/SẠC"
                  target="_self"
                >
                  <span className="">DRUM/GẠT/TỪ/SẠC</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a href="/collections/drum-roi-opc" title="DRUM RỜI OPC">
                      DRUM RỜI OPC
                    </a>
                  </li>

                  <li>
                    <a href="/collections/gat-drum" title="GẠT DRUM">
                      GẠT DRUM
                    </a>
                  </li>

                  <li>
                    <a href="/collections/tu" title="TỪ">
                      TỪ
                    </a>
                  </li>

                  <li>
                    <a href="/collections/sac" title="SẠC">
                      SẠC
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/hop-muc-chinh-hang"
                  title="Mực/Khối Drum/Khối Sấy"
                  target="_self"
                >
                  <span className="">Mực/Khối Drum/Khối Sấy</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a
                      href="/collections/hop-muc-chinh-hang"
                      title="Hộp Mực Chính Hãng"
                    >
                      Hộp Mực Chính Hãng
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/hop-muc-tuong-thich"
                      title="Hộp Mực Tương Thích"
                    >
                      Hộp Mực Tương Thích
                    </a>
                  </li>

                  <li>
                    <a href="/collections/muc-kg" title="Mực Kg">
                      Mực Kg
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/khoi-drum-chinh-hang"
                      title="Khối Drum Chính Hãng"
                    >
                      Khối Drum Chính Hãng
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/khoi-drum-tuong-thich"
                      title="Khối Drum Tương Thích"
                    >
                      Khối Drum Tương Thích
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/khoi-say-tuong-thich"
                      title="Khối Sấy Tương Thích"
                    >
                      Khối Sấy Tương Thích
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/khoi-say-chinh-hang"
                      title="Khối Sấy Chính Hãng"
                    >
                      Khối Sấy Chính Hãng
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/rulo-say"
                  title="RULO SẤY/ÉP/FILM"
                  target="_self"
                >
                  <span className="">RULO SẤY/ÉP/FILM</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a
                      href="/collections/rulo-say"
                      title="Rulo Sấy ( Rulo Trên )"
                    >
                      Rulo Sấy ( Rulo Trên )
                    </a>
                  </li>

                  <li>
                    <a href="/collections/rulo-ep" title="Rulo Ép ( Dưới )">
                      Rulo Ép ( Dưới )
                    </a>
                  </li>

                  <li>
                    <a href="/collections/film-say" title="Film Sấy">
                      Film Sấy
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/belt-may-mau"
                  title="Belt/Băng Tải/Gạt Belt"
                  target="_self"
                >
                  <span className="">Belt/Băng Tải/Gạt Belt</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a href="/collections/belt-may-mau" title="Belt Máy Màu">
                      Belt Máy Màu
                    </a>
                  </li>

                  <li>
                    <a href="/collections/bang-tai" title="Băng Tải Máy đen">
                      Băng Tải Máy đen
                    </a>
                  </li>

                  <li>
                    <a href="/collections/gat-belt" title="Gạt Belt">
                      Gạt Belt
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/banh-xe"
                  title="Thermittor/Webdau/Bánh Xe"
                  target="_self"
                >
                  <span className="">Thermittor/Webdau/Bánh Xe</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a href="/collections/thermittor" title="Thermittor">
                      Thermittor
                    </a>
                  </li>

                  <li>
                    <a href="/collections/web-dau" title="Web Dầu">
                      Web Dầu
                    </a>
                  </li>

                  <li>
                    <a href="/collections/banh-xe" title="Bánh Xe">
                      Bánh Xe
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/thue-may-photocopy-1"
                      title="Bộ 3 bánh xe ADF 60080/7080/7000"
                    >
                      Bộ 3 bánh xe ADF 60080/7080/7000
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/board"
                  title="Board/Motor/Đồng Bộ/Nhông"
                  target="_self"
                >
                  <span className="">Board/Motor/Đồng Bộ/Nhông</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a href="/collections/board" title="Board Mạch">
                      Board Mạch
                    </a>
                  </li>

                  <li>
                    <a href="/collections/motor" title="Motor">
                      Motor
                    </a>
                  </li>

                  <li>
                    <a href="/collections/dong-bo" title="Đồng Bộ">
                      Đồng Bộ
                    </a>
                  </li>

                  <li>
                    <a href="/collections/nhong" title="Nhông">
                      Nhông
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/chip-muc"
                  title="Chíp Mực/Chíp Drum"
                  target="_self"
                >
                  <span className="">Chíp Mực/Chíp Drum</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a href="/collections/chip-muc" title="Chíp Mực">
                      Chíp Mực
                    </a>
                  </li>

                  <li>
                    <a href="/collections/chip-drum" title="Chíp Drum">
                      Chíp Drum
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/den"
                  title="Đèn/Cảm Ứng/Cáp"
                  target="_self"
                >
                  <span className="">Đèn/Cảm Ứng/Cáp</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a href="/collections/den" title="Đèn Sấy - LPH">
                      Đèn Sấy - LPH
                    </a>
                  </li>

                  <li>
                    <a href="/collections/cam-ung" title="Cảm Ứng MH">
                      Cảm Ứng MH
                    </a>
                  </li>

                  <li>
                    <a href="/collections/cap" title="Cáp Kết Nối">
                      Cáp Kết Nối
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/vo-hop-muc"
                  title="Vỏ Mực/Mực Thải/Khay Hứng"
                  target="_self"
                >
                  <span className="">Vỏ Mực/Mực Thải/Khay Hứng</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a href="/collections/vo-hop-muc" title="Vỏ Hộp Mực">
                      Vỏ Hộp Mực
                    </a>
                  </li>

                  <li>
                    <a href="/collections/hop-muc-thai" title="Hộp Mực Thải">
                      Hộp Mực Thải
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/khay-hung-giay"
                      title="Khay Hứng Giấy"
                    >
                      Khay Hứng Giấy
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/collections/khoi-drum-da-qua-su-dung"
                  title="Hàng 1 Nước Drum/Sấy"
                  target="_self"
                >
                  <span className="">Hàng 1 Nước Drum/Sấy</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a
                      href="/collections/khoi-drum-da-qua-su-dung"
                      title="Khối Drum Đqsd"
                    >
                      Khối Drum Đqsd
                    </a>
                  </li>

                  <li>
                    <a
                      href="/collections/khoi-say-da-qua-su-dung"
                      title="Khối Sấy Đqsd"
                    >
                      Khối Sấy Đqsd
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/"
                  title="Cụm Adf/Cần Sensor/khung nhựa"
                  target="_self"
                >
                  <span className="">Cụm Adf/Cần Sensor/khung nhựa</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a href="/" title="Cụm Adf">
                      Cụm Adf
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Cần Sensor">
                      Cần Sensor
                    </a>
                  </li>
                </ul>
              </li>

              <li className=" has-child">
                <a
                  className="dropdown-toggle has-category parent "
                  href="/"
                  title="Linh Kiện Khác/Túi/Chai/Carton"
                  target="_self"
                >
                  <span className="">Linh Kiện Khác/Túi/Chai/Carton</span>
                </a>
                <ul className="level1 biz_menu_child" role="menu">
                  <li>
                    <a href="/" title="Linh Kiện Photo khác">
                      Linh Kiện Photo khác
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Túi Chiết Mực">
                      Túi Chiết Mực
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Chai Đựng Mực">
                      Chai Đựng Mực
                    </a>
                  </li>

                  <li>
                    <a href="/" title="Thùng Carton">
                      Thùng Carton
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="all-category">
              <a href="/collections/all">
                <span className="open-cate">Xem tất cả</span>
              </a>
            </div>
          </div>
        </div> */}
      </header>
    </>
  )
}

export default Header
