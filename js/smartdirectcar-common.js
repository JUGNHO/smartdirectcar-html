
function loadNavMenu(pageId){

	var html = [];

	html.push('<ul>');
	html.push('    <li id="index">');
	html.push('		   <a href="index.html" title="Dashboard"><i class="fa fa-lg fa-fw fa-home"></i> <span class="menu-item-parent">Dashboard</span></a>');
	html.push('	   </li>');
	html.push('	   <li id="employee_management">');
	html.push('		   <a href="employee_management.html" title="HotDeal"><i class="fa fa-lg fa-fw fa-group"></i> <span class="menu-item-parent">직원 관리</span></a>');
	html.push('	   </li>');
	html.push('	   <li id="counseling_applications_list">');
	html.push('		   <a href="counseling_applications_list.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">상담신청 목록</span></a>');
	html.push('	   </li>');
	html.push('	   <li id="hot_deal_management">');
	html.push('		   <a href="hot_deal_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">핫딜 관리</span></a>');
	html.push('	   </li>');
	html.push('	   <li id="car_management">');
	html.push('		   <a href="car_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">차량 관리</span></a>');
	html.push('	   </li>');
	html.push('	   <li id="post_goods_management">');
	html.push('		   <a href="post_goods_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">출고 후기 관리</span></a>');
	html.push('	   </li>');
	html.push('	   <li id="post_construction_management">');
	html.push('		   <a href="post_construction_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">시공후기 관리</span></a>');
	html.push('	   </li>');
	html.push('	   <li id="vehicle_test_management">');
	html.push('		   <a href="vehicle_test_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">시승기 관리</span></a>');
	html.push('	   </li>');
	html.push('	   <li id="newcar_news_management">');
	html.push('		   <a href="newcar_news_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">신차소식 관리</span></a>');
	html.push('	   </li>');
	html.push('	   <li id="comments_management">');
	html.push('		   <a href="comments_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">댓글 관리</span></a>');
	html.push('	   </li>');
	html.push('	   <li id="used_car_management">');
	html.push('		   <a href="used_car_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">중고차 상담신청 관리</span></a>');
	html.push('    </li>');
	html.push('	   <li id="consultation_registration">');
	html.push('	       <a href="consultation_registration.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">상담 등록</span></a>');
	html.push('    </li>');
	html.push('    <li id="cpa_registration">');
	html.push('        <a href="cpa_registration.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">CPA</span></a>');
	html.push('    </li>');
	html.push('</ul>');

	$("nav").html(html.join(""));
	$("#" + pageId).addClass("active");

}