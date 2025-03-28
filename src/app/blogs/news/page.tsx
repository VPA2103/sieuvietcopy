import Link from 'next/link'
import './news.css'
import Image from 'next/image'
import React from 'react'



export default function News() {
  const blogPosts = [
    {
      title: "Thuê máy Photocopy giá rẻ tại Đồng Nai, Bình Dương, TPHCM",
      link: "/blogs/news/thue-may-photocopy-gia-re-tai-dong-nai-binh-duong-tphcm",
      image: "https://file.hstatic.net/200000202353/article/125_2_ec24a62132af4cf3984d78b901c0/2bc2_grande.jpg",
      date: "24/11/2023",
      excerpt: "TẠI SAO CHỌN DỊCH VỤ CHO THUÊ MÁY PHOTOCOPY THAY VÌ MUA MÁY? Hiện nay, các văn phòng và công ty có quy mô vừa đến nhỏ thường sử dụng dịch vụ cho thuê máy Photo...",
      author: "Support"
    },
    {
      title: "Cho thuê máy photocopy tại Đồng Nai",
      link: "/blogs/news/cho-thue-may-photocopy-tai-dong-nai",
      image: "https://file.hstatic.net/200000202353/article/cho_thue_may_photocopy_3870fd5a879/44933842e90cc7b36a37a_grande.png",
      date: "08/05/2023",
      excerpt: "Dịch vụ cho thuê máy photocopy là một giải pháp thông minh cho các doanh nghiệp cần máy in và sao chụp nhưng không muốn đầu tư một số tiền lớn vào những thiết bị đắt tiền...",
      author: "Support"
    },
    {
      title: "Dịch vụ cho thuê máy photocopy tốt nhất Đồng Nai",
      link: "/blogs/news/dich-vu-cho-thue-may-photocopy-tot-nhat-dong-nai",
      image: "https://file.hstatic.net/200000202353/article/dc249aafd80a1d54441b_7ea6641538ca4/9cda06004e9006cca9e_grande.jpg",
      date: "29/08/2020",
      excerpt: "Hiện nay, việc cho thuê máy photocopy là một loại dịch vụ thiết thực. Bởi lẽ, đây là giải pháp nhằm giúp tiết kiệm một khoản lớn tài chính cho doanh nghiệp...",
      author: "ĐÀO VŨ ANH TIẾN"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Tin tức</h2>
      
      <div className="grid md:grid-cols-1 gap-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
            <div className="md:w-1/3 relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            
            <div className="md:w-2/3 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 hover:text-blue-600">
                  <a href={post.link}>{post.title}</a>
                </h3>
                
                <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                  <span className="flex items-center">
                    <i className="fa fa-user mr-2"></i>
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <i className="fa fa-calendar mr-2"></i>
                    {post.date}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
              </div>
              
              <div>
                <a 
                  href={post.link} 
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Xem thêm
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <nav aria-label="Page navigation">
          <ul className="flex space-x-2">
            <li>
              <button 
                disabled 
                className="px-3 py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
              >
                <i className="fa fa-chevron-left"></i>
              </button>
            </li>
            <li>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">1</button>
            </li>
            <li>
              <button 
                disabled 
                className="px-3 py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
              >
                <i className="fa fa-chevron-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
