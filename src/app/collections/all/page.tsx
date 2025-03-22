import Link from 'next/link';
import './san-pham.css'
import Image from 'next/image';



export default function Product() {

    return (
      <>
        <div id="collection">
          <div className="columns-container">
            <div className="container" id="columns">
              <div className="breadcrumb clearfix">
                <div className="col-md-12 ">
                  <ol className="breadcrumb breadcrumb-arrow hidden-sm hidden-xs">
                    <li>
                      <Link href="/" target="_self">
                        Trang chủ
                      </Link>
                    </li>

                    <li>
                      <Link href="/collections" target="_self">
                        Danh mục
                      </Link>
                    </li>

                    <li className="active">
                      <span>Tất cả sản phẩm</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row">
                <div
                  className="column col-xs-12 col-sm-4 col-md-3"
                  id="left_column"
                >
                  <div className="block left-module">
                    <p className="title_block">
                      Danh mục sản phẩm{' '}
                      <i
                        className="visible-xs fa fa-angle-down"
                        aria-hidden="true"
                      ></i>
                    </p>
                    <div className="block_content">
                      <div className="layered layered-category">
                        <div className="layered-content">
                          <ul className="tree-menu">
                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/may-photocopy-den-trang"
                                title="Máy Photocopy/Thuê Máy"
                                target="_self"
                              >
                                <span className="">Máy Photocopy/Thuê Máy</span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/may-photocopy-mau-9"
                                    title="Máy Photocopy Màu"
                                  >
                                    Máy Photocopy Màu
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/may-photocopy-den-trang"
                                    title="Máy Photocopy đen"
                                  >
                                    Máy Photocopy đen
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/may-photocopy-moi-100"
                                    title="Máy Photocopy Mới"
                                  >
                                    Máy Photocopy Mới
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/thue-may-photocopy-1"
                                    title="Thuê Máy Photocopy"
                                  >
                                    Thuê Máy Photocopy
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/drum-roi-opc"
                                title="DRUM/GẠT/TỪ/SẠC"
                                target="_self"
                              >
                                <span className="">DRUM/GẠT/TỪ/SẠC</span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/drum-roi-opc"
                                    title="DRUM RỜI OPC"
                                  >
                                    DRUM RỜI OPC
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/gat-drum"
                                    title="GẠT DRUM"
                                  >
                                    GẠT DRUM
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link href="/collections/tu" title="TỪ">
                                    TỪ
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link href="/collections/sac" title="SẠC">
                                    SẠC
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/hop-muc-chinh-hang"
                                title="Mực/Khối Drum/Khối Sấy"
                                target="_self"
                              >
                                <span className="">Mực/Khối Drum/Khối Sấy</span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/hop-muc-chinh-hang"
                                    title="Hộp Mực Chính Hãng"
                                  >
                                    Hộp Mực Chính Hãng
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/hop-muc-tuong-thich"
                                    title="Hộp Mực Tương Thích"
                                  >
                                    Hộp Mực Tương Thích
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/muc-kg"
                                    title="Mực Kg"
                                  >
                                    Mực Kg
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/khoi-drum-chinh-hang"
                                    title="Khối Drum Chính Hãng"
                                  >
                                    Khối Drum Chính Hãng
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/khoi-drum-tuong-thich"
                                    title="Khối Drum Tương Thích"
                                  >
                                    Khối Drum Tương Thích
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/khoi-say-tuong-thich"
                                    title="Khối Sấy Tương Thích"
                                  >
                                    Khối Sấy Tương Thích
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/khoi-say-chinh-hang"
                                    title="Khối Sấy Chính Hãng"
                                  >
                                    Khối Sấy Chính Hãng
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/rulo-say"
                                title="RULO SẤY/ÉP/FILM"
                                target="_self"
                              >
                                <span className="">RULO SẤY/ÉP/FILM</span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/rulo-say"
                                    title="Rulo Sấy ( Rulo Trên )"
                                  >
                                    Rulo Sấy ( Rulo Trên )
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/rulo-ep"
                                    title="Rulo Ép ( Dưới )"
                                  >
                                    Rulo Ép ( Dưới )
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/film-say"
                                    title="Film Sấy"
                                  >
                                    Film Sấy
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/belt-may-mau"
                                title="Belt/Băng Tải/Gạt Belt"
                                target="_self"
                              >
                                <span className="">Belt/Băng Tải/Gạt Belt</span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/belt-may-mau"
                                    title="Belt Máy Màu"
                                  >
                                    Belt Máy Màu
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/bang-tai"
                                    title="Băng Tải Máy đen"
                                  >
                                    Băng Tải Máy đen
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/gat-belt"
                                    title="Gạt Belt"
                                  >
                                    Gạt Belt
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/banh-xe"
                                title="Thermittor/Webdau/Bánh Xe"
                                target="_self"
                              >
                                <span className="">
                                  Thermittor/Webdau/Bánh Xe
                                </span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/thermittor"
                                    title="Thermittor"
                                  >
                                    Thermittor
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/web-dau"
                                    title="Web Dầu"
                                  >
                                    Web Dầu
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/banh-xe"
                                    title="Bánh Xe"
                                  >
                                    Bánh Xe
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/thue-may-photocopy-1"
                                    title="Bộ 3 bánh xe ADF 60080/7080/7000"
                                  >
                                    Bộ 3 bánh xe ADF 60080/7080/7000
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/board"
                                title="Board/Motor/Đồng Bộ/Nhông"
                                target="_self"
                              >
                                <span className="">
                                  Board/Motor/Đồng Bộ/Nhông
                                </span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/board"
                                    title="Board Mạch"
                                  >
                                    Board Mạch
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link href="/collections/motor" title="Motor">
                                    Motor
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/dong-bo"
                                    title="Đồng Bộ"
                                  >
                                    Đồng Bộ
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link href="/collections/nhong" title="Nhông">
                                    Nhông
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/chip-muc"
                                title="Chíp Mực/Chíp Drum"
                                target="_self"
                              >
                                <span className="">Chíp Mực/Chíp Drum</span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/chip-muc"
                                    title="Chíp Mực"
                                  >
                                    Chíp Mực
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/chip-drum"
                                    title="Chíp Drum"
                                  >
                                    Chíp Drum
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/den"
                                title="Đèn/Cảm Ứng/Cáp"
                                target="_self"
                              >
                                <span className="">Đèn/Cảm Ứng/Cáp</span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/den"
                                    title="Đèn Sấy - LPH"
                                  >
                                    Đèn Sấy - LPH
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/cam-ung"
                                    title="Cảm Ứng MH"
                                  >
                                    Cảm Ứng MH
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/cap"
                                    title="Cáp Kết Nối"
                                  >
                                    Cáp Kết Nối
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/vo-hop-muc"
                                title="Vỏ Mực/Mực Thải/Khay Hứng"
                                target="_self"
                              >
                                <span className="">
                                  Vỏ Mực/Mực Thải/Khay Hứng
                                </span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/vo-hop-muc"
                                    title="Vỏ Hộp Mực"
                                  >
                                    Vỏ Hộp Mực
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/hop-muc-thai"
                                    title="Hộp Mực Thải"
                                  >
                                    Hộp Mực Thải
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/khay-hung-giay"
                                    title="Khay Hứng Giấy"
                                  >
                                    Khay Hứng Giấy
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/collections/khoi-drum-da-qua-su-dung"
                                title="Hàng 1 Nước Drum/Sấy"
                                target="_self"
                              >
                                <span className="">Hàng 1 Nước Drum/Sấy</span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/khoi-drum-da-qua-su-dung"
                                    title="Khối Drum Đqsd"
                                  >
                                    Khối Drum Đqsd
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link
                                    href="/collections/khoi-say-da-qua-su-dung"
                                    title="Khối Sấy Đqsd"
                                  >
                                    Khối Sấy Đqsd
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/"
                                title="Cụm Adf/Cần Sensor/khung nhựa"
                                target="_self"
                              >
                                <span className="">
                                  Cụm Adf/Cần Sensor/khung nhựa
                                </span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link href="/" title="Cụm Adf">
                                    Cụm Adf
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link href="/" title="Cần Sensor">
                                    Cần Sensor
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className=" has-child">
                              <span></span>
                              <Link
                                className="dropdown-toggle has-category parent "
                                href="/"
                                title="Linh Kiện Khác/Túi/Chai/Carton"
                                target="_self"
                              >
                                <span className="">
                                  Linh Kiện Khác/Túi/Chai/Carton
                                </span>
                              </Link>
                              <ul className="sc2" role="menu">
                                <li>
                                  <span></span>
                                  <Link href="/" title="Linh Kiện Photo khác">
                                    Linh Kiện Photo khác
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link href="/" title="Túi Chiết Mực">
                                    Túi Chiết Mực
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link href="/" title="Chai Đựng Mực">
                                    Chai Đựng Mực
                                  </Link>
                                </li>

                                <li>
                                  <span></span>
                                  <Link href="/" title="Thùng Carton">
                                    Thùng Carton
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="block left-module">
                    <p className="title_block">
                      Lọc sản phẩm{' '}
                      <i
                        className="visible-xs fa fa-angle-down"
                        aria-hidden="true"
                      ></i>
                    </p>
                    <div className="block_content">
                      <div className="layered layered-filter-price">
                        <div className="layered_subtitle">Nhà cung cấp</div>
                        <div className="layered-content filter-brand">
                          <ul className="check-box-list">
                            <li>
                              <input
                                type="checkbox"
                                id="brand1"
                                name="cc"
                                data-vendor="(vendor:product**xerox)"
                              />
                              <label htmlFor="brand1">
                                <span className="button"></span>
                                xerox
                              </label>
                            </li>

                            <li>
                              <input
                                type="checkbox"
                                id="brand2"
                                name="cc"
                                data-vendor="(vendor:product**canon)"
                              />
                              <label htmlFor="brand2">
                                <span className="button"></span>
                                canon
                              </label>
                            </li>

                            <li>
                              <input
                                type="checkbox"
                                id="brand3"
                                name="cc"
                                data-vendor="(vendor:product**Khác)"
                              />
                              <label htmlFor="brand3">
                                <span className="button"></span>
                                Khác
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="layered_subtitle">Giá</div>
                        <div className="layered-content slider-range filter-price">
                          <ul className="check-box-list">
                            <li>
                              <input
                                type="checkbox"
                                id="p1"
                                name="cc"
                                data-price="(price:product<=500000)"
                              />
                              <label htmlFor="p1">
                                <span className="button"></span>
                                Dưới 500,000₫
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="p2"
                                name="cc"
                                data-price="((price:product>500000)&amp;&amp;(price:product<=1000000))"
                              />
                              <label htmlFor="p2">
                                <span className="button"></span>
                                500,000₫ - 1,000,000₫
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="p3"
                                name="cc"
                                data-price="((price:product>1000000)&amp;&amp;(price:product<=3000000))"
                              />
                              <label htmlFor="p3">
                                <span className="button"></span>
                                1,000,000₫ - 3,000,000₫
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="p4"
                                name="cc"
                                data-price="((price:product>3000000)&amp;&amp;(price:product<=5000000))"
                              />
                              <label htmlFor="p4">
                                <span className="button"></span>
                                3,000,000₫ - 5,000,000₫
                              </label>
                            </li>
                            <li>
                              <input
                                type="checkbox"
                                id="p5"
                                name="cc"
                                data-price="(price:product>=5000000)"
                              />
                              <label htmlFor="p5">
                                <span className="button"></span>
                                Trên 5,000,000₫
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="layered_subtitle">Màu sắc</div>
                        <div className="layered-content filter-color">
                          <ul className="check-box-list">
                            <li>
                              <input
                                type="checkbox"
                                id="color1"
                                name="cc"
                                data-color="(variant:product**trangnsfĐỏ)"
                              />
                              <label
                                style={{ backgroundColor: '#000000' }}
                                htmlFor="color1"
                              >
                                <span className="button"></span>
                              </label>
                            </li>

                            <li>
                              <input
                                type="checkbox"
                                id="color2"
                                name="cc"
                                data-color="(variant:product**Vàng)"
                              />
                              <label
                                style={{ backgroundColor: '#ffffff' }}
                                htmlFor="color2"
                              >
                                <span className="button"></span>
                              </label>
                            </li>

                            <li>
                              <input
                                type="checkbox"
                                id="color3"
                                name="cc"
                                data-color="(variant:product**Cam)"
                              />
                              <label
                                style={{ backgroundColor: '#7ed321' }}
                                htmlFor="color3"
                              >
                                <span className="button"></span>
                              </label>
                            </li>

                            <li>
                              <input
                                type="checkbox"
                                id="color4"
                                name="cc"
                                data-color="(variant:product**Xanh dương)"
                              />
                              <label
                                style={{ backgroundColor: '#bd10e0' }}
                                htmlFor="color4"
                              >
                                <span className="button"></span>
                              </label>
                            </li>

                            <li>
                              <input
                                type="checkbox"
                                id="color5"
                                name="cc"
                                data-color="(variant:product**Xanh lá)"
                              />
                              <label
                                style={{ backgroundColor: '#539cf3' }}
                                htmlFor="color5"
                              >
                                <span className="button"></span>
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="layered_subtitle">CHẤT LIỆU</div>
                        <div className="layered-content filter-size">
                          <ul className="check-box-list">
                            <li>
                              <input
                                type="checkbox"
                                id="size1"
                                name="cc"
                                data-size="(variant:product**Mới chính hãng)"
                              />
                              <label htmlFor="size1">
                                <span className="button"></span>Mới chính hãng
                              </label>
                            </li>

                            <li>
                              <input
                                type="checkbox"
                                id="size2"
                                name="cc"
                                data-size="(variant:product** Tương thích)"
                              />
                              <label htmlFor="size2">
                                <span className="button"></span> Tương thích
                              </label>
                            </li>

                            <li>
                              <input
                                type="checkbox"
                                id="size3"
                                name="cc"
                                data-size="(variant:product** USED)"
                              />
                              <label htmlFor="size3">
                                <span className="button"></span> USED
                              </label>
                            </li>

                            <li>
                              <input
                                type="checkbox"
                                id="size4"
                                name="cc"
                                data-size="(variant:product** Nguyên Bản)"
                              />
                              <label htmlFor="size4">
                                <span className="button"></span> Nguyên Bản
                              </label>
                            </li>

                            <li>
                              <input
                                type="checkbox"
                                id="size5"
                                name="cc"
                                data-size="(variant:product** Tháo máy)"
                              />
                              <label htmlFor="size5">
                                <span className="button"></span> Tháo máy
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="center_column col-xs-12 col-sm-8 col-md-9 product-col"
                  id="center_column"
                >
                  <div id="view-product-list" className="view-product-list">
                    <h2 className="page-heading">
                      <span className="page-heading-title">
                        Tất cả sản phẩm
                      </span>
                    </h2>
                    <ul className="display-product-option">
                      <li className="view-as-grid selected">
                        <span>grid</span>
                      </li>
                      <li className="view-as-list">
                        <span>list</span>
                      </li>
                    </ul>
                    <div className="browse-tags">
                      <span>Sắp xếp theo:</span>
                      <span className="custom-dropdown custom-dropdown--white">
                        <select className="sort-by custom-dropdown__select custom-dropdown__select--white">
                          <option value="manual">Sản phẩm nổi bật</option>
                          <option value="price-ascending">Giá: Tăng dần</option>
                          <option value="price-descending">
                            Giá: Giảm dần
                          </option>
                          <option value="title-ascending">Tên: A-Z</option>
                          <option value="title-descending">Tên: Z-A</option>
                          <option value="created-ascending">Cũ nhất</option>
                          <option value="created-descending">Mới nhất</option>
                          <option value="best-selling">Bán chạy nhất</option>
                        </select>
                      </span>
                    </div>

                    <ul className="row product-list grid style2{{filter proCcts">
                      {/* ' '{' '} */}
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/set-quet-td-muc-trong-hub-muc-xerox-d95-125"
                              title="SET QUÉT TD MỰC TRONG HUB MỰC XEROX D95/125"
                            >
                              <Image fill
                                alt="SET QUÉT TD MỰC TRONG HUB MỰC XEROX D95/125"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/set-quet-td-muc-trong-hub-muc-xerox-d95-125"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267184"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/set-quet-td-muc-trong-hub-muc-xerox-d95-125"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/set-quet-td-muc-trong-hub-muc-xerox-d95-125">
                                SET QUÉT TD MỰC TRONG HUB MỰC XEROX D95/125
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">176,000₫</span>

                              <span className="old-price">550,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>SET QUÉT TD MỰC TRONG HUB MỰC XEROX D95/125</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/cum-man-hinh-fujifilm-apeos-2560-3560-c2060-c2560"
                              title="CỤM MÀN HÌNH FUJIFILM APEOS 2560/3560/C2060/C2560"
                            >
                              <Image fill
                                alt="CỤM MÀN HÌNH FUJIFILM APEOS 2560/3560/C2060/C2560"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/cum-man-hinh-fujifilm-apeos-2560-3560-c2060-c2560"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267176"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/cum-man-hinh-fujifilm-apeos-2560-3560-c2060-c2560"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/cum-man-hinh-fujifilm-apeos-2560-3560-c2060-c2560">
                                CỤM MÀN HÌNH FUJIFILM APEOS
                                2560/3560/C2060/C2560
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">1,760,000₫</span>

                              <span className="old-price">2,200,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                CỤM MÀN HÌNH FUJIFILM APEOS
                                2560/3560/C2060/C2560
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/lph-fujifilm-apeos-c3070-4570-5570-chinh-hang-017k05460"
                              title="LPH FUJIFILM APEOS C3070/4570/5570 - CHÍNH HÃNG-017K05460"
                            >
                              <Image fill
                                alt="LPH FUJIFILM APEOS C3070/4570/5570 - CHÍNH HÃNG-017K05460"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/lph-fujifilm-apeos-c3070-4570-5570-chinh-hang-017k05460"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267175"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/lph-fujifilm-apeos-c3070-4570-5570-chinh-hang-017k05460"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/lph-fujifilm-apeos-c3070-4570-5570-chinh-hang-017k05460">
                                LPH FUJIFILM APEOS C3070/4570/5570 - CHÍNH
                                HÃNG-017K05460
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">1,870,000₫</span>

                              <span className="old-price">2,200,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                LPH FUJIFILM APEOS C3070/4570/5570 - CHÍNH
                                HÃNG-017K05460
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/chip-drum-xerox-den-700-c75-j75-duk-na"
                              title="CHIP DRUM XEROX ĐEN 700/C75/J75 - DUK-NA"
                            >
                              <Image fill
                                alt="CHIP DRUM XEROX ĐEN 700/C75/J75 - DUK-NA"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/chip-drum-xerox-den-700-c75-j75-duk-na"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267173"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/chip-drum-xerox-den-700-c75-j75-duk-na"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/chip-drum-xerox-den-700-c75-j75-duk-na">
                                CHIP DRUM XEROX ĐEN 700/C75/J75 - DUK-NA
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">50,000₫</span>

                              <span className="old-price">110,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>CHIP DRUM XEROX ĐEN 700/C75/J75 - DUK-NA</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/chip-drum-xerox-mau-700-c75-j75-du-cmy-na"
                              title="CHIP DRUM XEROX MÀU 700/C75/J75 - DU CMY-NA"
                            >
                              <Image fill
                                alt="CHIP DRUM XEROX MÀU 700/C75/J75 - DU CMY-NA"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/chip-drum-xerox-mau-700-c75-j75-du-cmy-na"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267172"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/chip-drum-xerox-mau-700-c75-j75-du-cmy-na"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/chip-drum-xerox-mau-700-c75-j75-du-cmy-na">
                                CHIP DRUM XEROX MÀU 700/C75/J75 - DU CMY-NA
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">50,000₫</span>

                              <span className="old-price">110,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>CHIP DRUM XEROX MÀU 700/C75/J75 - DU CMY-NA</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/chip-muc-vang-xerox-c700-c75-j75-na"
                              title="CHIP MỰC VÀNG XEROX C700/C75/J75-NA"
                            >
                              <Image fill
                                alt="CHIP MỰC VÀNG XEROX C700/C75/J75-NA"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/chip-muc-vang-xerox-c700-c75-j75-na"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267159"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/chip-muc-vang-xerox-c700-c75-j75-na"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/chip-muc-vang-xerox-c700-c75-j75-na">
                                CHIP MỰC VÀNG XEROX C700/C75/J75-NA
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">50,000₫</span>

                              <span className="old-price">110,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>CHIP MỰC VÀNG XEROX C700/C75/J75-NA</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/chip-muc-hong-xerox-c700-c75-j75-na"
                              title="CHIP MỰC HỒNG XEROX C700/C75/J75-NA"
                            >
                              <Image fill
                                alt="CHIP MỰC HỒNG XEROX C700/C75/J75-NA"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/chip-muc-hong-xerox-c700-c75-j75-na"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267158"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/chip-muc-hong-xerox-c700-c75-j75-na"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/chip-muc-hong-xerox-c700-c75-j75-na">
                                CHIP MỰC HỒNG XEROX C700/C75/J75-NA
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">50,000₫</span>

                              <span className="old-price">110,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>CHIP MỰC HỒNG XEROX C700/C75/J75-NA</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/chip-muc-xanh-xerox-c700-c75-j75-na"
                              title="CHIP MỰC XANH XEROX C700/C75/J75-NA"
                            >
                              <Image fill
                                alt="CHIP MỰC XANH XEROX C700/C75/J75-NA"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/chip-muc-xanh-xerox-c700-c75-j75-na"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267157"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/chip-muc-xanh-xerox-c700-c75-j75-na"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/chip-muc-xanh-xerox-c700-c75-j75-na">
                                CHIP MỰC XANH XEROX C700/C75/J75-NA
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">50,000₫</span>

                              <span className="old-price">110,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>CHIP MỰC XANH XEROX C700/C75/J75-NA</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/chip-muc-den-xerox-c700-c75-j75-na"
                              title="CHIP MỰC ĐEN XEROX C700/C75/J75-NA"
                            >
                              <Image fill
                                alt="CHIP MỰC ĐEN XEROX C700/C75/J75-NA"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/chip-muc-den-xerox-c700-c75-j75-na"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267156"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/chip-muc-den-xerox-c700-c75-j75-na"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/chip-muc-den-xerox-c700-c75-j75-na">
                                CHIP MỰC ĐEN XEROX C700/C75/J75-NA
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">50,000₫</span>

                              <span className="old-price">110,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>CHIP MỰC ĐEN XEROX C700/C75/J75-NA</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/bo-nhong-quay-hop-dan-muc-thai-xerox-4570-5570-3070-3372"
                              title="BỘ NHÔNG QUAY HỘP DẪN MỰC THẢI XEROX 4570/5570/3070/3372"
                            >
                              <Image fill
                                alt="BỘ NHÔNG QUAY HỘP DẪN MỰC THẢI XEROX 4570/5570/3070/3372"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/bo-nhong-quay-hop-dan-muc-thai-xerox-4570-5570-3070-3372"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267153"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/bo-nhong-quay-hop-dan-muc-thai-xerox-4570-5570-3070-3372"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/bo-nhong-quay-hop-dan-muc-thai-xerox-4570-5570-3070-3372">
                                BỘ NHÔNG QUAY HỘP DẪN MỰC THẢI XEROX
                                4570/5570/3070/3372
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">330,000₫</span>

                              <span className="old-price">605,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                BỘ NHÔNG QUAY HỘP DẪN MỰC THẢI XEROX
                                4570/5570/3070/3372
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/truc-sang-anh-2nd-roller-xerox-4471-4473-4570-5570-859k03831"
                              title="TRỤC SANG ẢNH 2nd ROLLER XEROX 4471/4473/4570/5570 - 859K03831"
                            >
                              <Image fill
                                alt="TRỤC SANG ẢNH 2nd ROLLER XEROX 4471/4473/4570/5570 - 859K03831"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/truc-sang-anh-2nd-roller-xerox-4471-4473-4570-5570-859k03831"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267150"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/truc-sang-anh-2nd-roller-xerox-4471-4473-4570-5570-859k03831"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/truc-sang-anh-2nd-roller-xerox-4471-4473-4570-5570-859k03831">
                                TRỤC SANG ẢNH 2nd ROLLER XEROX
                                4471/4473/4570/5570 - 859K03831
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">1,320,000₫</span>

                              <span className="old-price">1,980,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                TRỤC SANG ẢNH 2nd ROLLER XEROX
                                4471/4473/4570/5570 - 859K03831
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/truc-sang-anh-2nd-roller-xerox-mau-2275-4475-7845-859k03831"
                              title="TRỤC SANG ẢNH 2nd ROLLER XEROX MÀU 2275/4475/7845 -859K03831"
                            >
                              <Image fill
                                alt="TRỤC SANG ẢNH 2nd ROLLER XEROX MÀU 2275/4475/7845 -859K03831"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/truc-sang-anh-2nd-roller-xerox-mau-2275-4475-7845-859k03831"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267149"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/truc-sang-anh-2nd-roller-xerox-mau-2275-4475-7845-859k03831"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/truc-sang-anh-2nd-roller-xerox-mau-2275-4475-7845-859k03831">
                                TRỤC SANG ẢNH 2nd ROLLER XEROX MÀU
                                2275/4475/7845 -859K03831
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">1,320,000₫</span>

                              <span className="old-price">1,980,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                TRỤC SANG ẢNH 2nd ROLLER XEROX MÀU
                                2275/4475/7845 -859K03831
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/cum-dong-bo-xerox-vi-2271-4471-4570-4473-859k03317"
                              title="CỤM ĐỒNG BỘ XEROX VI 2271/4471/4570/4473 - 859K03317"
                            >
                              <Image fill
                                alt="CỤM ĐỒNG BỘ XEROX VI 2271/4471/4570/4473 - 859K03317"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/cum-dong-bo-xerox-vi-2271-4471-4570-4473-859k03317"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267148"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/cum-dong-bo-xerox-vi-2271-4471-4570-4473-859k03317"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/cum-dong-bo-xerox-vi-2271-4471-4570-4473-859k03317">
                                CỤM ĐỒNG BỘ XEROX VI 2271/4471/4570/4473 -
                                859K03317
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">1,320,000₫</span>

                              <span className="old-price">1,650,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                CỤM ĐỒNG BỘ XEROX VI 2271/4471/4570/4473 -
                                859K03317
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/motor-quay-drum-xerox-v80-180-2100-3100"
                              title="MOTOR QUAY DRUM XEROX V80/180/2100/3100"
                            >
                              <Image fill
                                alt="MOTOR QUAY DRUM XEROX V80/180/2100/3100"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/motor-quay-drum-xerox-v80-180-2100-3100"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267146"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/motor-quay-drum-xerox-v80-180-2100-3100"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/motor-quay-drum-xerox-v80-180-2100-3100">
                                MOTOR QUAY DRUM XEROX V80/180/2100/3100
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">1,320,000₫</span>

                              <span className="old-price">1,650,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>MOTOR QUAY DRUM XEROX V80/180/2100/3100</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/cum-motor-say-xerox-b9100-b9136-605k93790"
                              title="CỤM MOTOR SẤY XEROX B9100/B9136 - 605K93790"
                            >
                              <Image fill
                                alt="CỤM MOTOR SẤY XEROX B9100/B9136 - 605K93790"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/cum-motor-say-xerox-b9100-b9136-605k93790"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267145"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/cum-motor-say-xerox-b9100-b9136-605k93790"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/cum-motor-say-xerox-b9100-b9136-605k93790">
                                CỤM MOTOR SẤY XEROX B9100/B9136 - 605K93790
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">1,650,000₫</span>

                              <span className="old-price">1,870,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>CỤM MOTOR SẤY XEROX B9100/B9136 - 605K93790</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/fiery-server-may-xerox-v80-lon"
                              title="FIERY SERVER MÁY XEROX V80 - LỚN"
                            >
                              <Image fill
                                alt="FIERY SERVER MÁY XEROX V80 - LỚN"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/fiery-server-may-xerox-v80-lon"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267140"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/fiery-server-may-xerox-v80-lon"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/fiery-server-may-xerox-v80-lon">
                                FIERY SERVER MÁY XEROX V80 - LỚN
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">21,450,000₫</span>

                              <span className="old-price">24,200,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>FIERY SERVER MÁY XEROX V80 - LỚN</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/fiery-server-may-xerox-c700i-lon"
                              title="FIERY SERVER MÁY XEROX C700I - LỚN"
                            >
                              <Image fill
                                alt="FIERY SERVER MÁY XEROX C700I - LỚN"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/fiery-server-may-xerox-c700i-lon"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267139"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/fiery-server-may-xerox-c700i-lon"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/fiery-server-may-xerox-c700i-lon">
                                FIERY SERVER MÁY XEROX C700I - LỚN
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">16,500,000₫</span>

                              <span className="old-price">18,700,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>FIERY SERVER MÁY XEROX C700I - LỚN</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/board-scan-iit-xerox-v-2275-3375-4475-5575"
                              title="BOARD SCAN IIT XEROX V 2275/3375/4475/5575"
                            >
                              <Image fill
                                alt="BOARD SCAN IIT XEROX V 2275/3375/4475/5575"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/board-scan-iit-xerox-v-2275-3375-4475-5575"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267138"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/board-scan-iit-xerox-v-2275-3375-4475-5575"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/board-scan-iit-xerox-v-2275-3375-4475-5575">
                                BOARD SCAN IIT XEROX V 2275/3375/4475/5575
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">660,000₫</span>

                              <span className="old-price">1,100,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>BOARD SCAN IIT XEROX V 2275/3375/4475/5575</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/cum-gat-bang-tai-xerox-v80-180-2100-3100-chinh-hang-042k94710"
                              title="CỤM GẠT BĂNG TẢI XEROX V80/180/2100/3100 CHÍNH HÃNG-042K94710"
                            >
                              <Image fill
                                alt="CỤM GẠT BĂNG TẢI XEROX V80/180/2100/3100 CHÍNH HÃNG-042K94710"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/cum-gat-bang-tai-xerox-v80-180-2100-3100-chinh-hang-042k94710"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267136"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/cum-gat-bang-tai-xerox-v80-180-2100-3100-chinh-hang-042k94710"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/cum-gat-bang-tai-xerox-v80-180-2100-3100-chinh-hang-042k94710">
                                CỤM GẠT BĂNG TẢI XEROX V80/180/2100/3100 CHÍNH
                                HÃNG-042K94710
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">1,320,000₫</span>

                              <span className="old-price">1,650,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                CỤM GẠT BĂNG TẢI XEROX V80/180/2100/3100 CHÍNH
                                HÃNG-042K94710
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/gat-bang-tai-xerox-vi-vii-2271-3373-4570-5570-chinh-hang"
                              title="GẠT BĂNG TẢI XEROX VI/VII 2271/3373/4570/5570 - CHÍNH HÃNG"
                            >
                              <Image fill
                                alt="GẠT BĂNG TẢI XEROX VI/VII 2271/3373/4570/5570 - CHÍNH HÃNG"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/gat-bang-tai-xerox-vi-vii-2271-3373-4570-5570-chinh-hang"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267133"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/gat-bang-tai-xerox-vi-vii-2271-3373-4570-5570-chinh-hang"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/gat-bang-tai-xerox-vi-vii-2271-3373-4570-5570-chinh-hang">
                                GẠT BĂNG TẢI XEROX VI/VII 2271/3373/4570/5570 -
                                CHÍNH HÃNG
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">133,000₫</span>

                              <span className="old-price">484,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                GẠT BĂNG TẢI XEROX VI/VII 2271/3373/4570/5570 -
                                CHÍNH HÃNG
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/truc-sang-anh-2nd-xerox-v-3065-2560-c3060-chinh-hang-019k16290"
                              title="TRỤC SANG ẢNH 2ND XEROX V 3065/2560/C3060 - CHÍNH HÃNG - 019k16290"
                            >
                              <Image fill
                                alt="TRỤC SANG ẢNH 2ND XEROX V 3065/2560/C3060 - CHÍNH HÃNG - 019k16290"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/truc-sang-anh-2nd-xerox-v-3065-2560-c3060-chinh-hang-019k16290"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267132"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/truc-sang-anh-2nd-xerox-v-3065-2560-c3060-chinh-hang-019k16290"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/truc-sang-anh-2nd-xerox-v-3065-2560-c3060-chinh-hang-019k16290">
                                TRỤC SANG ẢNH 2ND XEROX V 3065/2560/C3060 -
                                CHÍNH HÃNG - 019k16290
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">1,210,000₫</span>

                              <span className="old-price">1,540,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                TRỤC SANG ẢNH 2ND XEROX V 3065/2560/C3060 -
                                CHÍNH HÃNG - 019k16290
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/khoi-say-xerox-4070-5070-nhap-khau-japan"
                              title="KHỐI SẤY XEROX 4070/5070 - NHẬP KHẨU - JAPAN"
                            >
                              <Image fill
                                alt="KHỐI SẤY XEROX 4070/5070 - NHẬP KHẨU - JAPAN"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/khoi-say-xerox-4070-5070-nhap-khau-japan"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267131"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/khoi-say-xerox-4070-5070-nhap-khau-japan"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/khoi-say-xerox-4070-5070-nhap-khau-japan">
                                KHỐI SẤY XEROX 4070/5070 - NHẬP KHẨU - JAPAN
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">2,860,000₫</span>

                              <span className="old-price">3,300,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                KHỐI SẤY XEROX 4070/5070 - NHẬP KHẨU - JAPAN
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/mieng-siu-tepxlon-chiu-nhiet-khoi-say-xerox-v-2275-4475-vi-3371-4570-5570-9-lo"
                              title="MIẾNG SIU TEPXLON CHỊU NHIỆT KHỐI SẤY XEROX V 2275/4475/VI 3371/4570/5570 - 9 LỖ"
                            >
                              <Image fill
                                alt="MIẾNG SIU TEPXLON CHỊU NHIỆT KHỐI SẤY XEROX V 2275/4475/VI 3371/4570/5570 - 9 LỖ"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/mieng-siu-tepxlon-chiu-nhiet-khoi-say-xerox-v-2275-4475-vi-3371-4570-5570-9-lo"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267127"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/mieng-siu-tepxlon-chiu-nhiet-khoi-say-xerox-v-2275-4475-vi-3371-4570-5570-9-lo"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/mieng-siu-tepxlon-chiu-nhiet-khoi-say-xerox-v-2275-4475-vi-3371-4570-5570-9-lo">
                                MIẾNG SIU TEPXLON CHỊU NHIỆT KHỐI SẤY XEROX V
                                2275/4475/VI 3371/4570/5570 - 9 LỖ
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">154,000₫</span>

                              <span className="old-price">440,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                MIẾNG SIU TEPXLON CHỊU NHIỆT KHỐI SẤY XEROX V
                                2275/4475/VI 3371/4570/5570 - 9 LỖ
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/truc-ep-xerox-mau-v80-180-2100-3100-chinh-hang-059k81320"
                              title="TRỤC ÉP XEROX MÀU V80/180/2100/3100 - CHÍNH HÃNG - 059k81320"
                            >
                              <Image fill
                                alt="TRỤC ÉP XEROX MÀU V80/180/2100/3100 - CHÍNH HÃNG - 059k81320"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/truc-ep-xerox-mau-v80-180-2100-3100-chinh-hang-059k81320"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267125"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/truc-ep-xerox-mau-v80-180-2100-3100-chinh-hang-059k81320"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/truc-ep-xerox-mau-v80-180-2100-3100-chinh-hang-059k81320">
                                TRỤC ÉP XEROX MÀU V80/180/2100/3100 - CHÍNH HÃNG
                                - 059k81320
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">1,760,000₫</span>

                              <span className="old-price">2,640,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                TRỤC ÉP XEROX MÀU V80/180/2100/3100 - CHÍNH HÃNG
                                - 059k81320
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/truc-say-xerox-v2060-3065-2263-2265-7035-7030-chinh-hang-ko-bac-dan"
                              title="TRỤC SẤY XEROX V2060/3065/2263/2265/7035/7030 - CHÍNH HÃNG - KO BẠC ĐẠN"
                            >
                              <Image fill
                                alt="TRỤC SẤY XEROX V2060/3065/2263/2265/7035/7030 - CHÍNH HÃNG - KO BẠC ĐẠN"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/truc-say-xerox-v2060-3065-2263-2265-7035-7030-chinh-hang-ko-bac-dan"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267123"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/truc-say-xerox-v2060-3065-2263-2265-7035-7030-chinh-hang-ko-bac-dan"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/truc-say-xerox-v2060-3065-2263-2265-7035-7030-chinh-hang-ko-bac-dan">
                                TRỤC SẤY XEROX V2060/3065/2263/2265/7035/7030 -
                                CHÍNH HÃNG - KO BẠC ĐẠN
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">770,000₫</span>

                              <span className="old-price">1,210,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                TRỤC SẤY XEROX V2060/3065/2263/2265/7035/7030 -
                                CHÍNH HÃNG - KO BẠC ĐẠN
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/khoi-drum-xerox-b9100-b9136-nhap-khau"
                              title="KHỐI DRUM XEROX B9100/B9136 -NHẬP KHẨU"
                            >
                              <Image fill
                                alt="KHỐI DRUM XEROX B9100/B9136 -NHẬP KHẨU"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/khoi-drum-xerox-b9100-b9136-nhap-khau"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267119"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/khoi-drum-xerox-b9100-b9136-nhap-khau"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/khoi-drum-xerox-b9100-b9136-nhap-khau">
                                KHỐI DRUM XEROX B9100/B9136 -NHẬP KHẨU
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">3,080,000₫</span>

                              <span className="old-price">3,520,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>KHỐI DRUM XEROX B9100/B9136 -NHẬP KHẦU</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/sac-drum-xerox-mau-iv-2263-2265-doi-4"
                              title="SẠC DRUM XEROX MÀU IV 2263/2265 - ĐỜI 4"
                            >
                              <Image fill
                                alt="SẠC DRUM XEROX MÀU IV 2263/2265 - ĐỜI 4"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/sac-drum-xerox-mau-iv-2263-2265-doi-4"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267117"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/sac-drum-xerox-mau-iv-2263-2265-doi-4"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/sac-drum-xerox-mau-iv-2263-2265-doi-4">
                                SẠC DRUM XEROX MÀU IV 2263/2265 - ĐỜI 4
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">169,000₫</span>

                              <span className="old-price">484,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>SẠC DRUM XEROX MÀU IV 2263/2265 - ĐỜI 4</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/may-fujixerox-apeosport-4570-5570"
                              title="MÁY FUJIXEROX APEOSPORT 4570/5570"
                            >
                              <Image fill
                                alt="MÁY FUJIXEROX APEOSPORT 4570/5570"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/may-fujixerox-apeosport-4570-5570"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267114"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/may-fujixerox-apeosport-4570-5570"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/may-fujixerox-apeosport-4570-5570">
                                MÁY FUJIXEROX APEOSPORT 4570/5570
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">22,000,000₫</span>

                              <span className="old-price">24,200,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>MÁY FUJIXEROX APEOSPORT 4570/5570</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/nhua-huong-giay-dao-mat-inventer-duplex-xerox-6080-7080-054k32798"
                              title="NHỰA HƯỚNG GIẤY ĐẢO MẶT INVENTER DUPLEX XEROX 6080/7080 - 054K32798"
                            >
                              <Image fill
                                alt="NHỰA HƯỚNG GIẤY ĐẢO MẶT INVENTER DUPLEX XEROX 6080/7080 - 054K32798"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/nhua-huong-giay-dao-mat-inventer-duplex-xerox-6080-7080-054k32798"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267185"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/nhua-huong-giay-dao-mat-inventer-duplex-xerox-6080-7080-054k32798"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/nhua-huong-giay-dao-mat-inventer-duplex-xerox-6080-7080-054k32798">
                                NHỰA HƯỚNG GIẤY ĐẢO MẶT INVENTER DUPLEX XEROX
                                6080/7080 - 054K32798
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">935,000₫</span>

                              <span className="old-price">1,320,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>
                                NHỰA HƯỚNG GIẤY ĐẢO MẶT INVENTER DUPLEX XEROX
                                6080/7080 - 054K32798
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-md-4 col-sm-6 col-xs-12 product ">
                        <div className="product-container">
                          <div className="product-image">
                            <Link
                              href="/products/nap-day-adf-xerox-vi-2271-3371-4473-5573"
                              title="NẮP ĐẬY ADF XEROX VI 2271/3371/4473/5573"
                            >
                              <Image fill
                                alt="NẮP ĐẬY ADF XEROX VI 2271/3371/4473/5573"
                                src="//hstatic.net/0/0/global/design/theme-default/no-image.png"
                              />
                            </Link>
                            <div className="group-tool-button">
                              <Link className="withlist" href="javascript:;">
                                withlist
                              </Link>
                              <Link
                                className="compare"
                                href="/products/nap-day-adf-xerox-vi-2271-3371-4473-5573"
                              >
                                compare
                              </Link>
                              <Link
                                className="cart biz-add-cart"
                                data-variantid="1121267183"
                                href="javascript:;"
                              >
                                cart
                              </Link>
                            </div>
                            <Link
                              href="javascript:;"
                              className="quick-view btn-quickview-1"
                              data-handle="/products/nap-day-adf-xerox-vi-2271-3371-4473-5573"
                            >
                              Qick view
                            </Link>

                            <span className="status-sale"></span>
                          </div>
                          <div className="product-info">
                            <h5 className="product-name">
                              <Link href="/products/nap-day-adf-xerox-vi-2271-3371-4473-5573">
                                NẮP ĐẬY ADF XEROX VI 2271/3371/4473/5573
                              </Link>
                            </h5>
                            <div className="box-price">
                              <span className="product-price">770,000₫</span>

                              <span className="old-price">1,320,000₫</span>
                            </div>
                            <div className="product-rating">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                            <div className="clearfix"></div>
                            <div className="detail-list">
                              <span>
                                Nhà cung cấp: <strong>xerox</strong>
                              </span>
                              <span>
                                Mã sản phẩm: <strong> Chưa rõ</strong>
                              </span>
                              <p>NẮP ĐẬY ADF XEROX VI 2271/3371/4473/5573</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <div className="col-md-12 content_sortPagiBar pagi">
                      <div id="pagination" className="clearfix">
                        <ul className="pagination">
                          <li className="pagination_previous disabled">
                            <span>
                              <i className="fa fa-chevron-left"></i>
                            </span>
                          </li>

                          <li className="active">
                            <span>1</span>
                          </li>

                          <li>
                            <Link href="/collections/all?page=2" title="">
                              2
                            </Link>
                          </li>

                          <li>
                            <Link href="/collections/all?page=3" title="">
                              3
                            </Link>
                          </li>

                          <li>
                            <span>&hellip;</span>
                          </li>

                          <li>
                            <Link href="/collections/all?page=41" title="">
                              41
                            </Link>
                          </li>

                          <li className="pagination_next">
                            <Link
                              href="/collections/all?page=2"
                              title="Next &raquo;"
                            >
                              <i className="fa fa-chevron-right"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}