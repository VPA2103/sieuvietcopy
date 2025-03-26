import Link from 'next/link'
import './san-pham.css'
import Image from 'next/image'
import React from 'react'

export default function Product() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex columns-container">
          <div className="container" id="columns">
            <div className="clearfix breadcrumb">
              <div className="col-md-12">
                <ol className="flex hidden-sm hidden-xs breadcrumb breadcrumb-arrow">
                  <li>
                    <Link href="/" target="_self">
                      Trang chủ ||
                    </Link>
                  </li>
                  <li>
                    <Link href="/collections" target="_self">
                      Danh mục ||
                    </Link>
                  </li>
                  <li className="active">
                    <span>Tất cả sản phẩm</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Left column */}
            <div className="flex">
              <div className="w-full md:w-1/4 lg:w-1/5 px-4" id="left_column">
                {/* Category block */}
                <div id="danh-muc-san-pham" className="mb-6">
                  <div className="left-module">
                    <p className="font-bold text-lg mb-4 flex items-center justify-between">
                      Danh mục sản phẩm
                      <i
                        className="md:hidden fa fa-angle-down"
                        aria-hidden="true"
                      ></i>
                    </p>
                    <div className="layered layered-category">
                      <div className="bg-white rounded-lg shadow p-4 mb-6">
                        <h3 className="text-lg font-bold mb-4 border-b pb-2">
                          DANH MỤC SẢN PHẨM
                        </h3>
                        <ul className="space-y-2">
                          {/* Máy Photocopy/Thuê Máy */}
                          <li className="group relative">
                            <Link
                              href="/collections/may-photocopy-thue-may"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Máy Photocopy/Thuê Máy</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/may-photocopy-mau"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Máy Photocopy Màu
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/may-photocopy-den-trang"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Máy Photocopy Đen Trắng
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/thue-may-photocopy"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Thuê Máy Photocopy
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* DRUM/GẠT/TỪ/SẠC */}
                          <li className="group relative">
                            <Link
                              href="/collections/drum-gat-tu-sac"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>DRUM/GẠT/TỪ/SẠC</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/drum"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  DRUM
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/gat-drum"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  GẠT DRUM
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/tu"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  TỪ
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/sac"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  SẠC
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Mực/Khối Drum/Khối Sấy */}
                          <li className="group relative">
                            <Link
                              href="/collections/muc-khoi-drum-khoi-say"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Mực/Khối Drum/Khối Sấy</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/hop-muc-chinh-hang"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Hộp Mực Chính Hãng
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/muc-kg"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Mực Kg
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/khoi-drum"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Khối Drum
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/khoi-say"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Khối Sấy
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* RULO SẤY/ÉP/FILM */}
                          <li className="group relative">
                            <Link
                              href="/collections/rulo-say-ep-film"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>RULO SẤY/ÉP/FILM</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/rulo-say"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Rulo Sấy (Rulo Trên)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/rulo-ep"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Rulo Ép (Dưới)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/film-say"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Film Sấy
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Belt/Băng Tải/Gạt Belt */}
                          <li className="group relative">
                            <Link
                              href="/collections/belt-bang-tai-gat-belt"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Belt/Băng Tải/Gạt Belt</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/belt-may-mau"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Belt Máy Màu
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/bang-tai-may-den"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Băng Tải Máy Đen
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/gat-belt"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Gạt Belt
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Thermittor/Webdau/Bánh Xe */}
                          <li className="group relative">
                            <Link
                              href="/collections/thermittor-webdau-banh-xe"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Thermittor/Webdau/Bánh Xe</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/thermittor"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Thermittor
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/web-dau"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Web Dầu
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/banh-xe"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Bánh Xe
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/bo-3-banh-xe-adf"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Bộ 3 bánh xe ADF 60080/7080/7000
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Board/Motor/Phụng Bộ/Nhông */}
                          <li className="group relative">
                            <Link
                              href="/collections/board-motor-dong-bo-nhong"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Board/Motor/Đồng Bộ/Nhông</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/board-mach"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Board Mach
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/motor"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Motor
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/dong-bo"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Đồng Bộ
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/nhong"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Nhông
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Chíp Mực/Chíp Drum */}
                          <li className="group relative">
                            <Link
                              href="/collections/chip-muc-chip-drum"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Chip Mực/Chip Drum</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/chip-muc"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Chip Mực
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/chip-drum"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Chip Drum
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Đèn/Cảm Ứng/Cáp */}
                          <li className="group relative">
                            <Link
                              href="/collections/den-cam-ung-cap"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Đèn/Cảm Ứng/Cáp</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/den-say-lph"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Đèn Sấy - LPH
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/cam-ung-mh"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Cảm Ứng MH
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/cap-ket-noi"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Cáp Kết Nối
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Vỏ Mực/Mực Thải/Khay Hứng */}
                          <li className="group relative">
                            <Link
                              href="/collections/vo-muc-muc-thai-khay-hung"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Vỏ Mực/Mực Thải/Khay Hứng</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/vo-hop-muc"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Vỏ Hộp Mực
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/hop-muc-thai"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Hộp Mực Thải
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/khay-hung-giay"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Khay Hứng Giấy
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Hàng 1 Nước Drum/Sấy */}
                          <li className="group relative">
                            <Link
                              href="/collections/hang-1-nuoc-drum-say"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Hàng 1 Nước Drum/Sấy</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/khoi-drum-dasd"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Khối Drum Đạsd
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/khoi-say-dasd"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Khối Sấy Đạsd
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Cụm Adf/Cần Sensor/Khung nhựa */}
                          <li className="group relative">
                            <Link
                              href="/collections/cum-adf-can-sensor-khung-nhua"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Cụm Adf/Cần Sensor/Khung nhựa</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/cum-adf"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Cụm Adf
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/can-sensor"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Cần Sensor
                                </Link>
                              </li>
                            </ul>
                          </li>

                          {/* Linh Kiện Khác/Túi/Chai/Carton */}
                          <li className="group relative">
                            <Link
                              href="/collections/linh-kien-khac-tui-chai-carton"
                              className="flex justify-between items-center py-2 px-3 hover:bg-gray-100 rounded transition-colors"
                            >
                              <span>Linh Kiện Khác/Túi/Chai/Carton</span>
                              <i className="fas fa-angle-down text-gray-400 group-hover:rotate-180 transition-transform"></i>
                            </Link>
                            <ul className="pl-4 mt-1 hidden group-hover:block space-y-1">
                              <li>
                                <Link
                                  href="/collections/linh-kien-photo-khac"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Linh Kiện Photo khác
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/tui-chiet-muc"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Túi Chiết Mực
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/chai-dung-muc"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
                                  Chai Đựng Mực
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/collections/thung-carton"
                                  className="block py-1 px-3 hover:bg-gray-50 rounded"
                                >
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

                {/* Filter block */}
                <div id="loc-san-pham" className="mb-6">
                  <div className="left-module">
                    <p className="font-bold text-lg mb-4 flex items-center justify-between">
                      Lọc sản phẩm
                      <i
                        className="md:hidden fa fa-angle-down"
                        aria-hidden="true"
                      ></i>
                    </p>
                    <div className="block_content">
                      {/* Vendor filter */}
                      <div className="mb-4">
                        <div className="font-medium mb-2">Nhà cung cấp</div>
                        <div className="filter-brand">
                          <ul className="space-y-2">
                            <li>
                              <label className="flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  id="brand1"
                                  name="cc"
                                  className="mr-2"
                                  data-vendor="(vendor:product**xerox)"
                                />
                                <span>xerox</span>
                              </label>
                            </li>
                            {/* Other vendor options... */}
                          </ul>
                        </div>
                      </div>

                      {/* Price filter */}
                      <div className="mb-4">
                        <div className="font-medium mb-2">Giá</div>
                        <div className="filter-price">
                          <ul className="space-y-2">
                            <li>
                              <label className="flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  id="p1"
                                  name="cc"
                                  className="mr-2"
                                  data-price="(price:product<=500000)"
                                />
                                <span>Dưới 500,000₫</span>
                              </label>
                            </li>
                            {/* Other price ranges... */}
                          </ul>
                        </div>
                      </div>

                      {/* Color filter */}
                      <div className="mb-4">
                        <div className="font-medium mb-2">Màu sắc</div>
                        <div className="filter-color">
                          <ul className="flex flex-wrap gap-2">
                            <li>
                              <label className="w-8 h-8 block rounded-full bg-red-500 cursor-pointer">
                                <input
                                  type="checkbox"
                                  id="color1"
                                  name="cc"
                                  className="hidden"
                                  data-color="(variant:product**trangnsfĐỏ)"
                                />
                              </label>
                            </li>
                            {/* Other colors... */}
                          </ul>
                        </div>
                      </div>

                      {/* Material filter */}
                      <div className="mb-4">
                        <div className="font-medium mb-2">CHẤT LIỆU</div>
                        <div className="filter-size">
                          <ul className="space-y-2">
                            <li>
                              <label className="flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  id="size1"
                                  name="cc"
                                  className="mr-2"
                                  data-size="(variant:product**Mới chính hãng)"
                                />
                                <span>Mới chính hãng</span>
                              </label>
                            </li>
                            {/* Other materials... */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center column */}
              <div className="w-full md:w-3/4 lg:w-4/5 px-4" id="center_column">
                <div id="view-product-list">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">
                      <span className="page-heading-title">
                        Tất cả sản phẩm
                      </span>
                    </h2>

                    <div className="flex items-center">
                      <ul className="flex border rounded-md overflow-hidden">
                        <li className="border-r">
                          <button className="px-3 py-2 bg-gray-200">
                            <span>grid</span>
                          </button>
                        </li>
                        <li>
                          <button className="px-3 py-2">
                            <span>list</span>
                          </button>
                        </li>
                      </ul>

                      <div className="ml-4">
                        <span className="mr-2">Sắp xếp theo:</span>
                        <select className="border rounded px-3 py-2">
                          <option value="manual">Sản phẩm nổi bật</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Product grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Original Product */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/set-quet-td-muc-trong-hub-muc-xerox-d95-125">
                          <Image
                            alt="SET QUÉT TD MỰC TRONG HUB MỰC XEROX D95/125"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/set-quet-td-muc-trong-hub-muc-xerox-d95-125">
                            SET QUÉT TD MỰC TRONG HUB MỰC XEROX D95/125
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            176,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            550,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Additional 10 Products */}
                    {/* Product 2 */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/khoi-drum-xerox-b9100">
                          <Image
                            alt="KHỐI DRUM XEROX B9100"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/khoi-drum-xerox-b9100">
                            KHỐI DRUM XEROX B9100/B9136 - NHẬP KHẨU
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            3,080,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            3,520,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Product 3 */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/may-fujixerox-apeosport-4570">
                          <Image
                            alt="MÁY FUJIXEROX APEOSPORT 4570/5570"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/may-fujixerox-apeosport-4570">
                            MÁY FUJIXEROX APEOSPORT 4570/5570
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            22,000,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            24,200,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Product 4 */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/chip-muc-den-xerox-c700">
                          <Image
                            alt="CHIP MỰC ĐEN XEROX C700/C75/J75"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/chip-muc-den-xerox-c700">
                            CHIP MỰC ĐEN XEROX C700/C75/J75
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            50,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            110,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Product 5 */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/truc-say-xerox-v2060">
                          <Image
                            alt="TRỤC SẤY XEROX V2060/3065"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/truc-say-xerox-v2060">
                            TRỤC SẤY XEROX V2060/3065 - CHÍNH HÃNG
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            770,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            1,210,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Product 6 */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/bo-nhong-quay-hop-dan-muc-thai">
                          <Image
                            alt="BỘ NHÔNG QUAY HỘP DẪN MỰC THẢI"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/bo-nhong-quay-hop-dan-muc-thai">
                            BỘ NHÔNG QUAY HỘP DẪN MỰC THẢI XEROX 4570/5570
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            330,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            605,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Product 7 */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/lph-fujifilm-apeos-c3070">
                          <Image
                            alt="LPH FUJIFILM APEOS C3070/4570/5570"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/lph-fujifilm-apeos-c3070">
                            LPH FUJIFILM APEOS C3070/4570/5570 - CHÍNH HÃNG
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            1,870,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            2,200,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Product 8 */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/cum-man-hinh-fujifilm-apeos-2560">
                          <Image
                            alt="CỤM MÀN HÌNH FUJIFILM APEOS 2560/3560"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/cum-man-hinh-fujifilm-apeos-2560">
                            CỤM MÀN HÌNH FUJIFILM APEOS 2560/3560/C2060/C2560
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            1,760,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            2,200,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Product 9 */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/truc-ep-xerox-mau-v80">
                          <Image
                            alt="TRỤC ÉP XEROX MÀU V80/180/2100/3100"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/truc-ep-xerox-mau-v80">
                            TRỤC ÉP XEROX MÀU V80/180/2100/3100 - CHÍNH HÃNG
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            1,760,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            2,640,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Product 10 */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/mieng-siu-tepxlon-chiu-nhiet">
                          <Image
                            alt="MIẾNG SIU TEPXLON CHỊU NHIỆT KHỐI SẤY"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/mieng-siu-tepxlon-chiu-nhiet">
                            MIẾNG SIU TEPXLON CHỊU NHIỆT KHỐI SẤY XEROX
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            154,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            440,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>

                    {/* Product 11 */}
                    <div className="product border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="product-image relative">
                        <Link href="/products/fiery-server-may-xerox-v80">
                          <Image
                            alt="FIERY SERVER MÁY XEROX V80"
                            src="https://hstatic.net/0/0/global/design/theme-default/no-image.png"
                            width={300}
                            height={200}
                            className="w-full"
                          />
                        </Link>
                        <div className="absolute top-2 right-2 flex flex-col space-y-2">
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="far fa-heart"></i>
                          </button>
                          <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow">
                            <i className="fas fa-exchange-alt"></i>
                          </button>
                        </div>
                        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 hover:opacity-100 transition-opacity">
                          Quick view
                        </button>
                      </div>
                      <div className="p-4 product-info">
                        <h5 className="product-name font-medium mb-2">
                          <Link href="/products/fiery-server-may-xerox-v80">
                            FIERY SERVER MÁY XEROX V80 - LỚN
                          </Link>
                        </h5>
                        <div className="flex items-center mb-2">
                          <span className="text-red-600 font-bold">
                            21,450,000₫
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            24,200,000₫
                          </span>
                        </div>
                        <div className="flex mb-2 text-yellow-400">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Pagination */}
                  <div className="mt-8 flex justify-center">
                    <ul className="flex border rounded-md overflow-hidden">
                      <li className="border-r">
                        <button className="px-3 py-2 bg-gray-200">
                          <i className="fa fa-chevron-left"></i>
                        </button>
                      </li>
                      <li className="border-r">
                        <button className="px-3 py-2 bg-blue-600 text-white">
                          1
                        </button>
                      </li>
                      <li className="border-r">
                        <Link
                          href="/collections/all?page=2"
                          className="block px-3 py-2"
                        >
                          2
                        </Link>
                      </li>
                      <li className="border-r">
                        <Link
                          href="/collections/all?page=3"
                          className="block px-3 py-2"
                        >
                          3
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/collections/all?page=2"
                          className="block px-3 py-2"
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
      {/* <!-- End no products --> */}
    </>
  )
}
