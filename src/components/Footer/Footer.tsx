import React from 'react'
import './Footer.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer id="footer2">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="footer-logo text-left">
                <Link href="/">
                  <Image
                    src="//theme.hstatic.net/200000202353/1000633675/14/logo2.png?v=145"
                    alt="Công ty TNHH Máy Văn Phòng Siêu Việt"
                    className="w-32"
                    fill
                  />
                </Link>
              </div>
            </div>

            <div className="col-sm-9 text-right flex">
              <div className="footer-menu">
                <ul className="flex flex-wrap justify-end gap-4 text-sm font-medium text-gray-700">
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
              </div>

              <div className="form-newsletter flex items-center gap-2 mt-4">
                <input
                  placeholder="Nhập email đăng ký..."
                  className="form-newsletter-input flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                />
                <button className="form-newsletter-button bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-row">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="widget-container widget-contact-info">
                <h3 className="widget-title">
                  Thông tin liên hệ{' '}
                  <i
                    className="visible-xs fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </h3>
                <div className="widget-body">
                  <ul>
                    <li>
                      <Link className="location" href="javascript:;">
                        <span className="address">Địa chỉ:</span>SỐ 19/38, TỔ
                        22, KHU PHỐ 3, PHƯỜNG TAM HÒA, TP. BIÊN HÒA, TỈNH ĐỒNG
                        NAI
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="phone"
                        href="tel:0937801309 - 0931533544 - 0251 6 290909"
                      >
                        <span>Điện thoại: </span> 0937.801.309 - 0931533544 -
                        0251 6 290909
                      </Link>
                    </li>
                    <li>
                      <Link className="mobile" href="0931206209">
                        <span>Di động: </span>
                        0931.206.209
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="email"
                        href="mailto:mayvanphongsieuviet@gmail.com"
                      >
                        <span>Email:</span>mayvanphongsieuviet@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-3 col-md-2">
              <div className="widget-container">
                <h3 className="widget-title">
                  Hỗ trợ{' '}
                  <i
                    className="visible-xs fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </h3>
                <div className="widget-body">
                  <ul>
                    <li>
                      <Link href="/">Trang chủ</Link>
                    </li>

                    <li>
                      <Link href="/collections/all">Sản phẩm</Link>
                    </li>

                    <li>
                      <Link href="/blogs/news">Cho thuê máy photocopy</Link>
                    </li>

                    <li>
                      <Link href="/blogs/news">Sửa máy photocopy</Link>
                    </li>

                    <li>
                      <Link href="/pages/about-us">Giới thiệu</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-3 col-md-2">
              <div className="widget-container">
                <h3 className="widget-title">
                  Về chúng tôi{' '}
                  <i
                    className="visible-xs fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </h3>
                <div className="widget-body">
                  <ul>
                    <li>
                      <Link href="/">Trang chủ</Link>
                    </li>

                    <li>
                      <Link href="/collections/all">Sản phẩm</Link>
                    </li>

                    <li>
                      <Link href="/blogs/news">Cho thuê máy photocopy</Link>
                    </li>

                    <li>
                      <Link href="/blogs/news">Sửa máy photocopy</Link>
                    </li>

                    <li>
                      <Link href="/pages/about-us">Giới thiệu</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-2">
              <div className="widget-container">
                <h3 className="widget-title">
                  Hướng dẫn{' '}
                  <i
                    className="visible-xs fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </h3>
                <div className="widget-body">
                  <ul>
                    <li>
                      <Link href="/">Trang chủ</Link>
                    </li>

                    <li>
                      <Link href="/collections/all">Sản phẩm</Link>
                    </li>

                    <li>
                      <Link href="/blogs/news">Cho thuê máy photocopy</Link>
                    </li>

                    <li>
                      <Link href="/blogs/news">Sửa máy photocopy</Link>
                    </li>

                    <li>
                      <Link href="/pages/about-us">Giới thiệu</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3">
              <div className="widget-container">
                <h3 className="widget-title">
                  Liên kết với chúng tôi{' '}
                  <i
                    className="visible-xs fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </h3>
                <div className="widget-body">
                  <div className="footer-social">
                    <ul>
                      <li>
                        <Link
                          className="facebook"
                          href="https://www.facebook.com/profile.php?id=100005151195409"
                        >
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>

                      <li>
                        <Link className="pinterest" href="#">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>

                      <li>
                        <Link className="vk" href="#">
                          <i className="fa fa-vk"></i>
                        </Link>
                      </li>

                      <li>
                        <Link className="twitter" href="#">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>

                      <li>
                        <Link className="google-plus" href="#">
                          <i className="fa fa-google-plus"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="widget-container">
                <h3 className="widget-title">
                  Thanh toán{' '}
                  <i
                    className="visible-xs fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </h3>
                <div className="widget-body">
                  <Image
                    src="//theme.hstatic.net/200000202353/1000633675/14/payment.png?v=145"
                    alt="Payment"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wapper">
            <div className="row">
              <div className="col-sm-12">
                <div className="footer-coppyright">
                  Copyright &copy; 2025 công ty tnhh máy văn phòng siêu việt.{' '}
                  <Link
                    target="_blank"
                    href="https://www.haravan.com/?utm_campaign=poweredby&utm_medium=haravan&utm_source=onlinestore"
                  >
                    Powered by Haravan
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
