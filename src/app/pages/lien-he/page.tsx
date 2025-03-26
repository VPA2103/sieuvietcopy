import './index.css'

import React from 'react'

export default function Contact() {
  return (
    <div className="flex justify-center">
      <div id="page" className="contact-biz">
        <div className="columns-container">
          <div className="container contact-shop" id="columns">
            <div className="row clearfix">
              <div className="col-md-12 col-xs-12" id="layout-page">
                <h2 className="page-heading">
                  <span className="page-heading-title">Liên Hệ</span>
                </h2>
                <div className="content-contact content-page clearfix">
                  {/* Google Maps */}
                  <p className="text-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125364.82364784039!2d106.8741417!3d10.9141257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf83246ef2156cb1!2zQ8O0bmcgVHkgVE5ISCBNVlAgU2nDqnUgVmnhu4d0!5e0!3m2!1svi!2s!4v1600092220983!5m2!1svi!2s"
                      width="100%"
                      height="450"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen
                      aria-hidden="false"
                      tabIndex={0}
                    ></iframe>
                  </p>
                  <h3 className="text-center">Chúng tôi ở đây</h3>

                  <div className="row">
                    {/* Form liên hệ */}
                    <div className="col-md-7 col-left" id="contactFormWrapper">
                      <h3 className="title-contact">Viết nhận xét</h3>
                      <hr className="line-left" />
                      <p>
                        Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng
                        tôi, và chúng tôi sẽ liên lạc lại với bạn sớm nhất có
                        thể.
                      </p>
                      <form
                        action="/contact"
                        className="contact-form"
                        method="post"
                      >
                        <div className="form-group">
                          <label htmlFor="contactFormName" className="sr-only">
                            Tên
                          </label>
                          <input
                            required
                            type="text"
                            id="contactFormName"
                            className="form-control input-lg"
                            name="contact[name]"
                            placeholder="Tên của bạn"
                            autoCapitalize="words"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="contactFormEmail" className="sr-only">
                            Email
                          </label>
                          <input
                            required
                            type="email"
                            name="contact[email]"
                            placeholder="Email của bạn"
                            id="contactFormEmail"
                            className="form-control input-lg"
                            autoCorrect="off"
                            autoCapitalize="off"
                          />
                        </div>
                        <div className="form-group">
                          <label
                            htmlFor="contactFormMessage"
                            className="sr-only"
                          >
                            Nội dung
                          </label>
                          <textarea
                            required
                            rows={6}
                            name="contact[body]"
                            className="form-control"
                            placeholder="Viết bình luận"
                            id="contactFormMessage"
                          ></textarea>
                        </div>
                        <input
                          type="submit"
                          className="btn btn-primary btn-lg"
                          value="Gửi liên hệ"
                        />
                      </form>
                    </div>

                    {/* Thông tin liên hệ */}
                    <div className="col-md-5" id="col-right">
                      <hr className="line-right" />
                      <h3 className="name-company">SIÊU VIỆT</h3>
                      <p>
                        Chuyên cung cấp dịch vụ cho thuê, sửa chữa, bảo trì, mua
                        bán máy photocopy. Chuyên bán linh kiện, vật tư máy
                        photocopy Fuji Xerox, Canon. Chuyên nhập khẩu máy
                        photocopy từ châu Âu, châu Mỹ.
                      </p>
                      <ul className="info-address">
                        <li>
                          <i
                            className="fas fa-map-marker-alt"
                            aria-hidden="true"
                          ></i>
                          <span>
                            SỐ 19/38, TỔ 22, KHU PHỐ 3, PHƯỜNG TAM HÒA, TP. BIÊN
                            HÒA, TỈNH ĐỒNG NAI
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-envelope" aria-hidden="true"></i>
                          <span>mayvanphongsieuviet@gmail.com</span>
                        </li>
                        <li>
                          <i
                            className="fas fa-phone-alt"
                            aria-hidden="true"
                          ></i>
                          <span>0937.801.309 - 0931533544 - 0251 6 290909</span>
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
    </div>
  )
}