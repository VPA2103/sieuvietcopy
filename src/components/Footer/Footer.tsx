import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer id="footer2">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="footer-logo text-left">
                  <a href="/">
                    <img
                      src="//theme.hstatic.net/200000202353/1000633675/14/logo2.png?v=145"
                      alt="Công ty TNHH Máy Văn Phòng Siêu Việt"
                      className="w-32"
                    />
                  </a>
                </div>
              </div>

              <div className="col-sm-9 text-right flex">
                <div className="footer-menu">
                  <ul className="flex flex-wrap justify-end gap-4 text-sm font-medium text-gray-700">
                    <li>
                      <a
                        href="/"
                        className="hover:text-blue-500 transition-colors duration-300"
                      >
                        Trang chủ
                      </a>
                    </li>
                    <li>
                      <a
                        href="/collections/all"
                        className="hover:text-blue-500 transition-colors duration-300"
                      >
                        Sản phẩm
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blogs/news"
                        className="hover:text-blue-500 transition-colors duration-300"
                      >
                        Cho thuê máy photocopy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blogs/news"
                        className="hover:text-blue-500 transition-colors duration-300"
                      >
                        Sửa máy photocopy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/about-us"
                        className="hover:text-blue-500 transition-colors duration-300"
                      >
                        Giới thiệu
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/lien-he"
                        className="hover:text-blue-500 transition-colors duration-300"
                      >
                        Liên hệ
                      </a>
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
                        <a className="location" href="javascript:;">
                          <span className="address">Địa chỉ:</span>SỐ 19/38, TỔ
                          22, KHU PHỐ 3, PHƯỜNG TAM HÒA, TP. BIÊN HÒA, TỈNH ĐỒNG
                          NAI
                        </a>
                      </li>
                      <li>
                        <a
                          className="phone"
                          href="tel:0937801309 - 0931533544 - 0251 6 290909"
                        >
                          <span>Điện thoại: </span> 0937.801.309 - 0931533544 -
                          0251 6 290909
                        </a>
                      </li>
                      <li>
                        <a className="mobile" href="0931206209">
                          <span>Di động: </span>
                          0931.206.209
                        </a>
                      </li>
                      <li>
                        <a
                          className="email"
                          href="mailto:mayvanphongsieuviet@gmail.com"
                        >
                          <span>Email:</span>mayvanphongsieuviet@gmail.com
                        </a>
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
                        <a href="/">Trang chủ</a>
                      </li>

                      <li>
                        <a href="/collections/all">Sản phẩm</a>
                      </li>

                      <li>
                        <a href="/blogs/news">Cho thuê máy photocopy</a>
                      </li>

                      <li>
                        <a href="/blogs/news">Sửa máy photocopy</a>
                      </li>

                      <li>
                        <a href="/pages/about-us">Giới thiệu</a>
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
                        <a href="/">Trang chủ</a>
                      </li>

                      <li>
                        <a href="/collections/all">Sản phẩm</a>
                      </li>

                      <li>
                        <a href="/blogs/news">Cho thuê máy photocopy</a>
                      </li>

                      <li>
                        <a href="/blogs/news">Sửa máy photocopy</a>
                      </li>

                      <li>
                        <a href="/pages/about-us">Giới thiệu</a>
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
                        <a href="/">Trang chủ</a>
                      </li>

                      <li>
                        <a href="/collections/all">Sản phẩm</a>
                      </li>

                      <li>
                        <a href="/blogs/news">Cho thuê máy photocopy</a>
                      </li>

                      <li>
                        <a href="/blogs/news">Sửa máy photocopy</a>
                      </li>

                      <li>
                        <a href="/pages/about-us">Giới thiệu</a>
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
                          <a
                            className="facebook"
                            href="https://www.facebook.com/profile.php?id=100005151195409"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>

                        <li>
                          <a className="pinterest" href="#">
                            <i className="fa fa-pinterest-p"></i>
                          </a>
                        </li>

                        <li>
                          <a className="vk" href="#">
                            <i className="fa fa-vk"></i>
                          </a>
                        </li>

                        <li>
                          <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>

                        <li>
                          <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
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
                    <img
                      src="//theme.hstatic.net/200000202353/1000633675/14/payment.png?v=145"
                      alt="Payment"
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
                    <a
                      target="_blank"
                      href="https://www.haravan.com/?utm_campaign=poweredby&utm_medium=haravan&utm_source=onlinestore"
                    >
                      Powered by Haravan
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
