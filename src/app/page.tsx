'use client'
import { useEffect } from 'react'
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import '../app/trang-chu/trang-chu.css'
import '../app/trang-chu/trang-chu'
// import Swiper from 'swiper';

export default function MainPage() {
  useEffect(() => {
    var swiper = new Swiper('.mySwiper', {
      slidesPerView: 1, // Hiển thị 1 slide tại một thời điểm
      spaceBetween: 0, // Không có khoảng cách giữa các slide
      loop: true,
      autoplay: {
        delay: 3000, // Thời gian tự động chuyển slide (ms)
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade', // Hiệu ứng fade khi chuyển slide
      fadeEffect: {
        crossFade: true,
      },
    })
  }, [])

  return (
    <div className="container flex">
      <div className="block left-module">
        <p className="title_block">
          Danh mục sản phẩm{' '}
          <i className="visible-xs fa fa-angle-down" aria-hidden="true"></i>
        </p>

        <div className="block_content">
          <div className="layered layered-category">
            <div className="layered-content ">
              <ul className="tree-menu ">
                <li className=" has-child">
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/may-photocopy-den-trang"
                    title="Máy Photocopy/Thuê Máy"
                    target="_self"
                  >
                    <span className="">Máy Photocopy/Thuê Máy</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a
                        href="/collections/may-photocopy-mau-9"
                        title="Máy Photocopy Màu"
                      >
                        Máy Photocopy Màu
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a
                        href="/collections/may-photocopy-den-trang"
                        title="Máy Photocopy đen"
                      >
                        Máy Photocopy đen
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a
                        href="/collections/may-photocopy-moi-100"
                        title="Máy Photocopy Mới"
                      >
                        Máy Photocopy Mới
                      </a>
                    </li>

                    <li>
                      <span></span>
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
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/drum-roi-opc"
                    title="DRUM/GẠT/TỪ/SẠC"
                    target="_self"
                  >
                    <span className="">DRUM/GẠT/TỪ/SẠC</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a href="/collections/drum-roi-opc" title="DRUM RỜI OPC">
                        DRUM RỜI OPC
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/gat-drum" title="GẠT DRUM">
                        GẠT DRUM
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/tu" title="TỪ">
                        TỪ
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/sac" title="SẠC">
                        SẠC
                      </a>
                    </li>
                  </ul>
                </li>

                <li className=" has-child">
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/hop-muc-chinh-hang"
                    title="Mực/Khối Drum/Khối Sấy"
                    target="_self"
                  >
                    <span className="">Mực/Khối Drum/Khối Sấy</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a
                        href="/collections/hop-muc-chinh-hang"
                        title="Hộp Mực Chính Hãng"
                      >
                        Hộp Mực Chính Hãng
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a
                        href="/collections/hop-muc-tuong-thich"
                        title="Hộp Mực Tương Thích"
                      >
                        Hộp Mực Tương Thích
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/muc-kg" title="Mực Kg">
                        Mực Kg
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a
                        href="/collections/khoi-drum-chinh-hang"
                        title="Khối Drum Chính Hãng"
                      >
                        Khối Drum Chính Hãng
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a
                        href="/collections/khoi-drum-tuong-thich"
                        title="Khối Drum Tương Thích"
                      >
                        Khối Drum Tương Thích
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a
                        href="/collections/khoi-say-tuong-thich"
                        title="Khối Sấy Tương Thích"
                      >
                        Khối Sấy Tương Thích
                      </a>
                    </li>

                    <li>
                      <span></span>
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
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/rulo-say"
                    title="RULO SẤY/ÉP/FILM"
                    target="_self"
                  >
                    <span className="">RULO SẤY/ÉP/FILM</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a
                        href="/collections/rulo-say"
                        title="Rulo Sấy ( Rulo Trên )"
                      >
                        Rulo Sấy ( Rulo Trên )
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/rulo-ep" title="Rulo Ép ( Dưới )">
                        Rulo Ép ( Dưới )
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/film-say" title="Film Sấy">
                        Film Sấy
                      </a>
                    </li>
                  </ul>
                </li>

                <li className=" has-child">
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/belt-may-mau"
                    title="Belt/Băng Tải/Gạt Belt"
                    target="_self"
                  >
                    <span className="">Belt/Băng Tải/Gạt Belt</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a href="/collections/belt-may-mau" title="Belt Máy Màu">
                        Belt Máy Màu
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/bang-tai" title="Băng Tải Máy đen">
                        Băng Tải Máy đen
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/gat-belt" title="Gạt Belt">
                        Gạt Belt
                      </a>
                    </li>
                  </ul>
                </li>

                <li className=" has-child">
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/banh-xe"
                    title="Thermittor/Webdau/Bánh Xe"
                    target="_self"
                  >
                    <span className="">Thermittor/Webdau/Bánh Xe</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a href="/collections/thermittor" title="Thermittor">
                        Thermittor
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/web-dau" title="Web Dầu">
                        Web Dầu
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/banh-xe" title="Bánh Xe">
                        Bánh Xe
                      </a>
                    </li>

                    <li>
                      <span></span>
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
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/board"
                    title="Board/Motor/Đồng Bộ/Nhông"
                    target="_self"
                  >
                    <span className="">Board/Motor/Đồng Bộ/Nhông</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a href="/collections/board" title="Board Mạch">
                        Board Mạch
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/motor" title="Motor">
                        Motor
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/dong-bo" title="Đồng Bộ">
                        Đồng Bộ
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/nhong" title="Nhông">
                        Nhông
                      </a>
                    </li>
                  </ul>
                </li>

                <li className=" has-child">
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/chip-muc"
                    title="Chíp Mực/Chíp Drum"
                    target="_self"
                  >
                    <span className="">Chíp Mực/Chíp Drum</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a href="/collections/chip-muc" title="Chíp Mực">
                        Chíp Mực
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/chip-drum" title="Chíp Drum">
                        Chíp Drum
                      </a>
                    </li>
                  </ul>
                </li>

                <li className=" has-child">
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/den"
                    title="Đèn/Cảm Ứng/Cáp"
                    target="_self"
                  >
                    <span className="">Đèn/Cảm Ứng/Cáp</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a href="/collections/den" title="Đèn Sấy - LPH">
                        Đèn Sấy - LPH
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/cam-ung" title="Cảm Ứng MH">
                        Cảm Ứng MH
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/cap" title="Cáp Kết Nối">
                        Cáp Kết Nối
                      </a>
                    </li>
                  </ul>
                </li>

                <li className=" has-child">
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/vo-hop-muc"
                    title="Vỏ Mực/Mực Thải/Khay Hứng"
                    target="_self"
                  >
                    <span className="">Vỏ Mực/Mực Thải/Khay Hứng</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a href="/collections/vo-hop-muc" title="Vỏ Hộp Mực">
                        Vỏ Hộp Mực
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/collections/hop-muc-thai" title="Hộp Mực Thải">
                        Hộp Mực Thải
                      </a>
                    </li>

                    <li>
                      <span></span>
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
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/collections/khoi-drum-da-qua-su-dung"
                    title="Hàng 1 Nước Drum/Sấy"
                    target="_self"
                  >
                    <span className="">Hàng 1 Nước Drum/Sấy</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a
                        href="/collections/khoi-drum-da-qua-su-dung"
                        title="Khối Drum Đqsd"
                      >
                        Khối Drum Đqsd
                      </a>
                    </li>

                    <li>
                      <span></span>
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
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/"
                    title="Cụm Adf/Cần Sensor/khung nhựa"
                    target="_self"
                  >
                    <span className="">Cụm Adf/Cần Sensor/khung nhựa</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a href="/" title="Cụm Adf">
                        Cụm Adf
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/" title="Cần Sensor">
                        Cần Sensor
                      </a>
                    </li>
                  </ul>
                </li>

                <li className=" has-child">
                  <span></span>
                  <a
                    className="dropdown-toggle has-category parent "
                    href="/"
                    title="Linh Kiện Khác/Túi/Chai/Carton"
                    target="_self"
                  >
                    <span className="">Linh Kiện Khác/Túi/Chai/Carton</span>
                  </a>
                  <ul className="sc2" role="menu">
                    <li>
                      <span></span>
                      <a href="/" title="Linh Kiện Photo khác">
                        Linh Kiện Photo khác
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/" title="Túi Chiết Mực">
                        Túi Chiết Mực
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/" title="Chai Đựng Mực">
                        Chai Đựng Mực
                      </a>
                    </li>

                    <li>
                      <span></span>
                      <a href="/" title="Thùng Carton">
                        Thùng Carton
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="home-slider">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 slider-left"></div>
            <div className="col-sm-9 header-top-right">
              <div className="header-top-right-wapper">
                <div className="homeslider">
                  <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a href="https://mayvanphongsieuviet.com/collections/thue-may-photocopy-1">
                          <img
                            src="//theme.hstatic.net/200000202353/1000633675/14/banner_silder_1.jpg?v=145"
                            alt="Banner 1"
                            className="w-full rounded-lg"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="https://mayvanphongsieuviet.com/collections/may-photocopy-den-trang">
                          <img
                            src="//theme.hstatic.net/200000202353/1000633675/14/banner_silder_2.jpg?v=145"
                            alt="Banner 2"
                            className="w-full rounded-lg"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="https://mayvanphongsieuviet.com/collections/hop-muc-chinh-hang">
                          <img
                            src="//theme.hstatic.net/200000202353/1000633675/14/banner_silder_3.jpg?v=145"
                            alt="Banner 3"
                            className="w-full rounded-lg"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a href="/collections/all">
                          <img
                            src="//theme.hstatic.net/200000202353/1000633675/14/banner_silder_4.jpg?v=145"
                            alt="Banner 4"
                            className="w-full rounded-lg"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-button-next text-gray-800"></div>
                    <div className="swiper-button-prev text-gray-800"></div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
