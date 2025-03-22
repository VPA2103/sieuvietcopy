
import './news.css';







export default function News(){



    return(
        <>
            <div className="nav-top-menu">
                <div className="container">
                    <div className="row">
                        
                        
                        <div className="col-sm-9 col-md-9 col-lg-9 formsearch-option4">
                            <form className="form-inline biz-search" action="/search">
                                <div className="form-group form-category">
                                    
                                    <div className="ajax-search">
                                        <div className="default-search">
                                            <a href="javascript:;">Tất cả</a>
                                        </div>
                                        <div className="list-search">
                                            <div className="list-item">
                                                
                                                <div className="item" data-filter="(collectionid:product>=0)">
                                                    Tất cả
                                                </div>
                                            </div>
                                            <input type="hidden" className="id_filter" value="()" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group input-serach">
                                    <input required type="text" id="search-text" placeholder="Nhập từ khóa cần tìm..."/>
                                </div>
                                <button type="submit" className="pull-right btn-search"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>



<div className="columns-container">
	<div className="container" id="columns">
		<div className="col-md-12 " >
            <ol className="breadcrumb breadcrumb-arrow hidden-sm hidden-xs flex">

                <li><a href="/" target="_self">Trang chủ</a></li>
                <li className="active"><span>Blog - Tin tức</span></li>
            </ol>
        </div>
		<div className="row">
			<div className="column col-xs-12 col-sm-3 fix-sid" id="left_column">

<div className="block left-module">
	<p className="title_block">Danh mục <i className="visible-xs fa fa-angle-down" aria-hidden="true"></i></p>
	<div className="block_content">
		<div className="layered layered-category">
			<div className="layered-content">
				<ul className="tree-menu">
					
					
					<li className="">
						<span></span>
						<a className="" href="/collections/all" title="Tất cả sản phẩm" target="_self">
							Tất cả sản phẩm
						</a>
					</li>
					
					
				</ul>
			</div>
		</div>
	</div>
</div>


<div className="block left-module">
	<p className="title_block">Bài viết mới <i className="visible-xs fa fa-angle-down" aria-hidden="true"></i></p>
	<div className="block_content">
		<div className="layered">
			<div className="layered-content">
				<ul className="blog-list-sidebar clearfix">
					
				
					<li>
						<div className="post-thumb">
							<a href="/blogs/news/thue-may-photocopy-gia-re-tai-dong-nai-binh-duong-tphcm"><img src="//file.hstatic.net/200000202353/article/125_2_ec24a62132af4cf3984d78b901c0/2bc2_grande.jpg" alt="Thuê máy Photocopy giá rẻ tại Đồng Nai, Bình Dương, TPHCM"/></a>
						</div>
						<div className="post-info">
							<h5 className="entry_title"><a href="/blogs/news/thue-may-photocopy-gia-re-tai-dong-nai-binh-duong-tphcm">Thuê máy Photocopy giá rẻ tại Đồng Nai, Bình Dương, TPHCM</a></h5>
							<div className="post-meta">
								<span className="date"><i className="fa fa-calendar"></i> 24/11/2023</span>
								<span className="comment-count">
									<i className="fa fa-comment-o"></i> 0
								</span>
							</div>
						</div>
					</li>
					
					
					<li>
						<div className="post-thumb">
							<a href="/blogs/news/cho-thue-may-photocopy-tai-dong-nai"><img src="//file.hstatic.net/200000202353/article/cho_thue_may_photocopy_3870fd5a879/44933842e90cc7b36a37a_grande.png" alt="Cho thuê máy photocopy tại Đồng Nai"/></a>
						</div>
						<div className="post-info">
							<h5 className="entry_title"><a href="/blogs/news/cho-thue-may-photocopy-tai-dong-nai">Cho thuê máy photocopy tại Đồng Nai</a></h5>
							<div className="post-meta">
								<span className="date"><i className="fa fa-calendar"></i> 08/05/2023</span>
								<span className="comment-count">
									<i className="fa fa-comment-o"></i> 0
								</span>
							</div>
						</div>
					</li>
			

					<li>
						<div className="post-thumb">
							<a href="/blogs/news/dich-vu-cho-thue-may-photocopy-tot-nhat-dong-nai"><img src="//file.hstatic.net/200000202353/article/dc249aafd80a1d54441b_7ea6641538ca4/9cda06004e9006cca9e_grande.jpg" alt="Dịch vụ cho thuê máy photocopy tốt nhất Đồng Nai"/></a>
						</div>
						<div className="post-info">
							<h5 className="entry_title"><a href="/blogs/news/dich-vu-cho-thue-may-photocopy-tot-nhat-dong-nai">Dịch vụ cho thuê máy photocopy tốt nhất Đồng Nai</a></h5>
							<div className="post-meta">
								<span className="date"><i className="fa fa-calendar"></i> 29/08/2020</span>
								<span className="comment-count">
									<i className="fa fa-comment-o"></i> 0
								</span>
							</div>
						</div>
					</li>
					
					
					
				</ul>
			</div>
		</div>
	</div>
</div>

			</div>
			
			<div className="center_column col-xs-12 col-sm-9" id="center_column">
				<h2 className="page-heading">
					<span className="page-heading-title">Tin tức</span>
				</h2>
				
				<ul className="blog-posts">
					

					

					
					
					<li className="post-item">
						<article className="entry">
							<div className="row">
								<div className="col-sm-5">
									<div className="entry-thumb image-hover2 text-center">
										<a href="/blogs/news/thue-may-photocopy-gia-re-tai-dong-nai-binh-duong-tphcm">
											<img src="//file.hstatic.net/200000202353/article/125_2_ec24a62132af4cf3984d78b901c0/2bc2_grande.jpg" alt="Thuê máy Photocopy giá rẻ tại Đồng Nai, Bình Dương, TPHCM"/> 
										</a>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="entry-ci">
										<h3 className="entry-title"><a href="/blogs/news/thue-may-photocopy-gia-re-tai-dong-nai-binh-duong-tphcm">Thuê máy Photocopy giá rẻ tại Đồng Nai, Bình Dương, TPHCM</a></h3>
										<div className="entry-meta-data">
											<span className="author">
												<i className="fa fa-user"></i> 
												by: <a href="javascript:;">Support</a></span>
											<span className="cat">
												<i className="fa fa-folder-o"></i>
												<a href="/blogs/news">Tin tức</a>
											</span>
											<span className="comment-count">
												<i className="fa fa-comment-o"></i> 0
											</span>
											<span className="date"><i className="fa fa-calendar"></i> 24/11/2023</span>
										</div>
										<div className="entry-excerpt">
											TẠI SAO CHỌN DỊCH VỤ CHO THUÊ MÁY PHOTOCOPY THAY VÌ MUA MÁY?Hiện nay, các văn phòng và công ty có quy mô vừa đến nhỏ thường sử dụng dịch vụ cho thuê máy Photo. Bởi đây là giải pháp tối ưu nhằm giúp tiết kiệm chi phí cho doanh nghiệp. Bên cạnh đó, việc thuê máy sẽ giảm sự lo lắng về những vấn đề liên quan như bảo dưỡng định kỳ hay sửa chữa. Nếu bạn đang mong muốn chọn một nơi có dịch vụ cho thuê máy Photocopy giá rẻ, uy tín thì SIÊU VIỆT luôn là sự lựa chọn đúng đắn dành cho bạn. 6 LÍ DO CHỌN ...
										</div>
										<div className="entry-more">
											<a href="/blogs/news/thue-may-photocopy-gia-re-tai-dong-nai-binh-duong-tphcm">Xem thêm</a>
										</div>
									</div>
								</div>
							</div>
						</article>
					</li>
					

					

					
					
					<li className="post-item">
						<article className="entry">
							<div className="row">
								<div className="col-sm-5">
									<div className="entry-thumb image-hover2 text-center">
										<a href="/blogs/news/cho-thue-may-photocopy-tai-dong-nai">
											<img src="//file.hstatic.net/200000202353/article/cho_thue_may_photocopy_3870fd5a879/44933842e90cc7b36a37a_grande.png" alt="Cho thuê máy photocopy tại Đồng Nai"/> 
										</a>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="entry-ci">
										<h3 className="entry-title"><a href="/blogs/news/cho-thue-may-photocopy-tai-dong-nai">Cho thuê máy photocopy tại Đồng Nai</a></h3>
										<div className="entry-meta-data">
											<span className="author">
												<i className="fa fa-user"></i> 
												by: <a href="javascript:;">Support</a></span>
											<span className="cat">
												<i className="fa fa-folder-o"></i>
												<a href="/blogs/news">Tin tức</a>
											</span>
											<span className="comment-count">
												<i className="fa fa-comment-o"></i> 0
											</span>
											<span className="date"><i className="fa fa-calendar"></i> 08/05/2023</span>
										</div>
										<div className="entry-excerpt">
											Dịch vụ cho thuê máy photocopy:Dịch vụ cho thuê máy photocopy là một giải pháp thông minh cho các doanh nghiệp cần máy in và sao chụp nhưng không muốn đầu tư một số tiền lớn vào những thiết bị đắt tiền.Lợi ích của việc thuê máy photocopy:Bằng cách thuê máy photocopy, doanh nghiệp có thể tiết kiệm chi phí và tránh phiền hà bảo trì và sửa chữa thiết bị của riêng mìnhSiêu Việt cung cấp các điều khoản linh hoạt, với các cho thuê ngắn hạn có sẵn cho các dự án nhỏ và cho thuê dài hạn cho các nhu cầ...
										</div>
										<div className="entry-more">
											<a href="/blogs/news/cho-thue-may-photocopy-tai-dong-nai">Xem thêm</a>
										</div>
									</div>
								</div>
							</div>
						</article>
					</li>
					

					

					
					
					<li className="post-item">
						<article className="entry">
							<div className="row">
								<div className="col-sm-5">
									<div className="entry-thumb image-hover2 text-center">
										<a href="/blogs/news/dich-vu-cho-thue-may-photocopy-tot-nhat-dong-nai">
											<img src="//file.hstatic.net/200000202353/article/dc249aafd80a1d54441b_7ea6641538ca4/9cda06004e9006cca9e_grande.jpg" alt="Dịch vụ cho thuê máy photocopy tốt nhất Đồng Nai"/> 
										</a>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="entry-ci">
										<h3 className="entry-title"><a href="/blogs/news/dich-vu-cho-thue-may-photocopy-tot-nhat-dong-nai">Dịch vụ cho thuê máy photocopy tốt nhất Đồng Nai</a></h3>
										<div className="entry-meta-data">
											<span className="author">
												<i className="fa fa-user"></i> 
												by: <a href="javascript:;">ĐÀO VŨ ANH TIẾN</a></span>
											<span className="cat">
												<i className="fa fa-folder-o"></i>
												<a href="/blogs/news">Tin tức</a>
											</span>
											<span className="comment-count">
												<i className="fa fa-comment-o"></i> 0
											</span>
											<span className="date"><i className="fa fa-calendar"></i> 29/08/2020</span>
										</div>
										<div className="entry-excerpt">
											Hiện nay, việc cho thuê máy photocopy là một loại dịch vụ thiết thực. Bởi lẽ, đây là giải pháp nhằm giúp tiết kiệm một khoản lớn tài chính cho doanh nghiệp. Bên cạnh đó, việc thuê máy sẽ hỗ trợ giảm sự lo lắng về những vấn đề liên quan như bảo dưỡng định kỳ hay sửa chữa. Nếu bạn đang quan tâm đến dịch vụ này, hãy cùng Siêu Việt tham khảo chi tiết bài viết ngay dưới đây nhé!1. Cho thuê máy photocopy là gì? Ưu điểmCho thuê máy photocopy là dịch vụ giúp khách hàng có thể sử dụng máy photo văn ph...
										</div>
										<div className="entry-more">
											<a href="/blogs/news/dich-vu-cho-thue-may-photocopy-tot-nhat-dong-nai">Xem thêm</a>
										</div>
									</div>
								</div>
							</div>
						</article>
					</li>
					
				</ul>
				<div className="sortPagiBar clearfix">
					<div className="col-md-12 content_sortPagiBar">
						<div id="pagination" className="clearfix">
	<ul className="pagination">
		
		<li className="pagination_previous disabled">
			<span><i className="fa fa-chevron-left"></i></span>
		</li>
		
		
		
		
		<li className="active"><span>1</span></li>
		
		
		
		
		<li className="pagination_next disabled"><span><i className="fa fa-chevron-right"></i></span></li>
		
	</ul>
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