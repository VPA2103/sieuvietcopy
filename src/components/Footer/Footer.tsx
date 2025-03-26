import React from 'react'
import './Footer.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-4">
      {/* Top Section with Logo and Menu */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Logo Column */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="block">
              <Image
                src="https://theme.hstatic.net/200000202353/1000633675/14/logo2.png?v=145"
                alt="Công ty TNHH Máy Văn Phòng Siêu Việt"
                width={150}
                height={75}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Menu and Newsletter Column */}
          <div className="w-full md:w-3/5">
            {/* Navigation Menu */}
            <nav className="mb-4">
              <ul className="flex flex-wrap gap-4 text-sm font-medium text-gray-700">
                <li>
                  <Link
                    href="/"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/all"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs/news"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Cho thuê máy photocopy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs/news"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Sửa máy photocopy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/about-us"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/lien-he"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Newsletter Form */}
            <div className="flex items-center gap-2">
              <input
                placeholder="Nhập email đăng ký..."
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                aria-label="Email đăng ký"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-200 pt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Thông tin liên hệ
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-800 font-medium mr-2 min-w-16">
                    Địa chỉ:
                  </span>
                  <span>
                    SỐ 19/38, TỔ 22, KHU PHỐ 3, PHƯỜNG TAM HÒA, TP. BIÊN HÒA,
                    TỈNH ĐỒNG NAI
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 font-medium mr-2 min-w-16">
                    Điện thoại:
                  </span>
                  <a href="tel:0937801309" className="hover:text-blue-500">
                    0937.801.309 - 0931.533.544 - 0251.6.290.909
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 font-medium mr-2 min-w-16">
                    Di động:
                  </span>
                  <a href="tel:0931206209" className="hover:text-blue-500">
                    0931.206.209
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-800 font-medium mr-2 min-w-16">
                    Email:
                  </span>
                  <a
                    href="mailto:mayvanphongsieuviet@gmail.com"
                    className="hover:text-blue-500"
                  >
                    mayvanphongsieuviet@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Hỗ trợ
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    href="/"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collections/all"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs/news"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Cho thuê máy photocopy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs/news"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Sửa máy photocopy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/about-us"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Giới thiệu
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Hướng dẫn
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    href="/huong-dan-mua-hang"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Hướng dẫn mua hàng
                  </Link>
                </li>
                <li>
                  <Link
                    href="/huong-dan-thanh-toan"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Hướng dẫn thanh toán
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chinh-sach-van-chuyen"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Chính sách vận chuyển
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chinh-sach-bao-hanh"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Chính sách bảo hành
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chinh-sach-doi-tra"
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    Chính sách đổi trả
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social and Payment */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Liên kết với chúng tôi
              </h3>
              <div className="flex space-x-3 mb-6">
                <a
                  href="https://www.facebook.com/profile.php?id=100005151195409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full hover:bg-blue-700 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-full hover:bg-red-700 transition-colors duration-300"
                  aria-label="Pinterest"
                >
                  <i className="fa fa-pinterest-p"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full hover:bg-blue-600 transition-colors duration-300"
                  aria-label="VK"
                >
                  <i className="fa fa-vk"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-400 text-white flex items-center justify-center rounded-full hover:bg-blue-500 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full hover:bg-red-600 transition-colors duration-300"
                  aria-label="Google Plus"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
              </div>

              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Thanh toán
              </h3>
              <Image
                src="https://theme.hstatic.net/200000202353/1000633675/14/payment.png?v=145"
                alt="Phương thức thanh toán"
                width={180}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>
            Copyright &copy; 2025 Công ty TNHH Máy Văn Phòng Siêu Việt.{' '}
            <a
              href="https://www.haravan.com/?utm_campaign=poweredby&utm_medium=haravan&utm_source=onlinestore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Powered by Haravan
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
