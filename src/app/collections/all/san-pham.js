						jQuery(document).ready(function () {

								jQuery('.check-box-list li > input').click(function () {
									$('.custom-loader').show();
									jQuery(this).parent().toggleClassName('check');
									Stringfilter();
								})
								str = "";
								var Stringfilter = function () {
									var q = "", gia = "", vendor = "", color = "", tag = "", size = "", total_page = 0, cur_page = 1;
									var handle_coll = 'all';

									q = "filter=(collectionid:product>=0)";


									jQuery('.filter-price ul.check-box-list li.check').each(function () {
										gia = gia + jQuery(this).find('input').data('price') + '||';
									})
									gia = gia.substring(0, gia.length - 2);
									if (gia != "") {
										gia = '(' + gia + ')';
										q += '&&' + gia;
									}

									jQuery('.filter-brand ul.check-box-list li.check').each(function () {
										vendor = vendor + jQuery(this).find('input').data('vendor') + '||';
									})
									vendor = vendor.substring(0, vendor.length - 2);
									if (vendor != "") {
										vendor = '(' + vendor + ')';
										q += '&&' + vendor;
									}

									jQuery('.filter-color ul.check-box-list li.check').each(function () {
										color = color + jQuery(this).find('input').data('color') + '||';
										//size2 = size2 + jQuery(this).data('s') + '--';
									})
									color = color.substring(0, color.length - 2);
									if (color != "") {
										color = '(' + color + ')';
										q += '&&' + color;
									}

									jQuery('.filter-tag ul.check-box-list li.check').each(function () {
										tag = tag + jQuery(this).find('input').data('tag') + '||';
										//size2 = size2 + jQuery(this).data('s') + '--';
									})
									tag = tag.substring(0, tag.length - 2);
									if (tag != "") {
										tag = '(' + tag + ')';
										q += '&&' + tag;
									}

									jQuery('.filter-size ul.check-box-list li.check').each(function () {
										size = size + jQuery(this).find('input').data('size') + '||';
										//size2 = size2 + jQuery(this).data('s') + '--';
									})
									size = size.substring(0, size.length - 2);
									if (size != "") {
										size = '(' + size + ')';
										q += '&&' + size;
									}
									//strhistory = strhistory.substring(2,strhistory.length);
									//history.pushState(null, null, strhistory);
									//console.log(strhistory);
									str = q;
									console.log("/search?q=" + q + "&view=filter");
									jQuery.ajax({ // lấy tổng số trang của kết quả filter
										url: "/search?q=" + q + "&view=page",
										async: false,
										success: function (data) {
											total_page = parseInt(data);
										}
									})
									//console.log(total_page);
									if (cur_page <= total_page) {
										jQuery('.pagi').show();
										jQuery.ajax({
											url: "/search?q=" + q + "&view=filter",
											success: function (data) {
												jQuery(".product-list.filter").html(data);
												$('.custom-loader').hide();
											}
										})
										jQuery.ajax({  // đoạn code 
											url: "/search?q=" + q + "&view=paginate",
											async: false,
											success: function (data) {
												//jQuery(".pagi-filter").html(data); // in phân trang
												jQuery(".pagi").html(data); // in phân trang

											}
										})
									} else {
										$('.custom-loader').hide();
										jQuery(".product-list.filter").html("<div className='col-sm-12 text-center no-pro'>Không có sản phẩm phù hợp!</div>");
										jQuery('.pagi').hide();
									}
									jQuery('.pagi').on("click", "a", function () { // bắt sự kiện click các nút phân trang
										var link = jQuery(this).attr("data-link");
										if (link == 'm') {
											link = cur - 1;
										}
										if (link == 'p') {
											link = cur + 1;
										}
										link = parseInt(link);
										jQuery.ajax({
											url: "/search?q=" + str + "&view=filter&page=" + link,
											success: function (data) {
												jQuery(".product-list.filter").html(data);
												cur = link;
											}
										})
										//console.log("/search?q="+str+"&view=paginate&page="+link);
										jQuery.ajax({
											url: "/search?q=" + str + "&view=paginate&page=" + link,
											success: function (data) {
												//jQuery(".pagi-filter").html(data); // in phân trang
												jQuery(".pagi").html(data); // in phân trang
											}
										})
									})
								}
							})
