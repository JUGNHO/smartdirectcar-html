var loadHeader = function(){

	var html = [];

	html.push('<div id="logo-group">');
	html.push('	<!-- PLACE YOUR LOGO HERE -->');
	html.push('	<span id="logo" style="margin-top:7px;"> <img src="img/logo1.png" alt="SmartAdmin"> </span>');
	html.push('	<!-- END LOGO PLACEHOLDER -->');
	html.push('</div>');
	html.push('<!-- projects dropdown -->');
	html.push('<div class="project-context hidden-xs hide">');
	html.push('	<span class="label">Projects:</span>');
	html.push('	<span class="project-selector dropdown-toggle" data-toggle="dropdown">Recent projects <i class="fa fa-angle-down"></i></span>');
	html.push('	<!-- Suggestion: populate this list with fetch and push technique -->');
	html.push('	<ul class="dropdown-menu">');
	html.push('		<li>');
	html.push('			<a href="javascript:void(0);">Online e-merchant management system - attaching integration with the iOS</a>');
	html.push('		</li>');
	html.push('		<li>');
	html.push('			<a href="javascript:void(0);">Notes on pipeline upgradee</a>');
	html.push('		</li>');
	html.push('		<li>');
	html.push('			<a href="javascript:void(0);">Assesment Report for merchant account</a>');
	html.push('		</li>');
	html.push('		<li class="divider"></li>');
	html.push('		<li>');
	html.push('			<a href="javascript:void(0);"><i class="fa fa-power-off"></i> Clear</a>');
	html.push('		</li>');
	html.push('	</ul>');
	html.push('	<!-- end dropdown-menu-->');
	html.push('</div>');
	html.push('<!-- end projects dropdown -->');
	html.push('<!-- pulled right: nav area -->');
	html.push('<div class="pull-right">');
	html.push('	');
	html.push('	<!-- collapse menu button -->');
	html.push('	<div id="hide-menu" class="btn-header pull-right">');
	html.push('		<span> <a href="javascript:void(0);" data-action="toggleMenu" title="Collapse Menu"><i class="fa fa-reorder"></i></a> </span>');
	html.push('	</div>');
	html.push('	<!-- end collapse menu -->');
	html.push('	');
	html.push('	<!-- #MOBILE -->');
	html.push('	<!-- Top menu profile link : this shows only when top menu is active -->');
	html.push('	<ul id="mobile-profile-img" class="header-dropdown-list hidden-xs padding-5">');
	html.push('		<li class="">');
	html.push('			<a href="#" class="dropdown-toggle no-margin userdropdown" data-toggle="dropdown"> ');
	html.push('				<img src="img/avatars/sunny.png" alt="John Doe" class="online" />  ');
	html.push('			</a>');
	html.push('			<ul class="dropdown-menu pull-right">');
	html.push('				<li>');
	html.push('					<a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0"><i class="fa fa-cog"></i> Setting</a>');
	html.push('				</li>');
	html.push('				<li class="divider"></li>');
	html.push('				<li>');
	html.push('					<a href="profile.html" class="padding-10 padding-top-0 padding-bottom-0"> <i class="fa fa-user"></i> <u>P</u>rofile</a>');
	html.push('				</li>');
	html.push('				<li class="divider"></li>');
	html.push('				<li>');
	html.push('					<a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0" data-action="toggleShortcut"><i class="fa fa-arrow-down"></i> <u>S</u>hortcut</a>');
	html.push('				</li>');
	html.push('				<li class="divider"></li>');
	html.push('				<li>');
	html.push('					<a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0" data-action="launchFullscreen"><i class="fa fa-arrows-alt"></i> Full <u>S</u>creen</a>');
	html.push('				</li>');
	html.push('				<li class="divider"></li>');
	html.push('				<li>');
	html.push('					<a href="login.html" class="padding-10 padding-top-5 padding-bottom-5" data-action="userLogout"><i class="fa fa-sign-out fa-lg"></i> <strong><u>L</u>ogout</strong></a>');
	html.push('				</li>');
	html.push('			</ul>');
	html.push('		</li>');
	html.push('	</ul>');
	html.push('	<!-- logout button -->');
	html.push('	<div id="logout" class="btn-header transparent pull-right">');
	html.push('		<span> <a href="login.html" title="Sign Out" data-action="userLogout" data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i class="fa fa-sign-out"></i></a> </span>');
	html.push('	</div>');
	html.push('	<!-- end logout button -->');
	html.push('	<!-- search mobile button (this is hidden till mobile view port) -->');
	html.push('	<div id="search-mobile" class="btn-header transparent pull-right">');
	html.push('		<span> <a href="javascript:void(0)" title="Search"><i class="fa fa-search"></i></a> </span>');
	html.push('	</div>');
	html.push('	<!-- end search mobile button -->');
	html.push('	<!-- fullscreen button -->');
	html.push('	<div id="fullscreen" class="btn-header transparent pull-right">');
	html.push('		<span> <a href="javascript:void(0);" data-action="launchFullscreen" title="Full Screen"><i class="fa fa-arrows-alt"></i></a> </span>');
	html.push('	</div>');
	html.push('	<!-- end fullscreen button -->');
	html.push('</div>');
	html.push('<!-- end pulled right: nav area -->');

	$("header#header").html(html.join(""));

}();

var loadRibbonSection = function(){

	var html = [];
	//html.push('<div class="row"> ');
	html.push('<h1 class="page-title txt-color-blueDark"> ');
	html.push('<span class="ribbon-button-alignment"> ');
	html.push('	<span id="refresh" class="btn btn-circle btn-default txt-color-blueDark" data-action="resetWidgets" data-title="refresh"  rel="tooltip" data-placement="bottom" data-original-title=\'<i class="text-warning fa fa-warning"></i> Warning! This will reset all your widget settings.\' data-html="true">');
	html.push('		<i class="fa fa-refresh"></i>');
	html.push('	</span> ');
	html.push('</span>');
	html.push('');
	html.push('<!-- breadcrumb -->');
	html.push('	Home <span>> Dashboard</span>');
	html.push('<!-- end breadcrumb -->');
	html.push('</h1>');
	html.push('');
	html.push('<!-- You can also add more buttons to the');
	html.push('ribbon for further usability');
	html.push('');
	html.push('Example below:');
	html.push('');
	html.push('<span class="ribbon-button-alignment pull-right">');
	html.push('<span id="search" class="btn btn-ribbon hidden-xs" data-title="search"><i class="fa-grid"></i> Change Grid</span>');
	html.push('<span id="add" class="btn btn-ribbon hidden-xs" data-title="add"><i class="fa-plus"></i> Add</span>');
	html.push('<span id="search" class="btn btn-ribbon" data-title="search"><i class="fa-search"></i> <span class="hidden-mobile">Search</span></span>');
	html.push('</span> -->');

	$("div#ribbon").html(html.join(""));

}();

function loadNavMenu(pageId){

	var html = [];

	html.push('<ul>');
	html.push('    <li id="index">');
	html.push('		   <a href="index.html" title="Dashboard"><i class="fa fa-lg fa-fw fa-tachometer"></i> <span class="menu-item-parent">Dashboard</span></a>');
	html.push('	   </li>');

	html.push('	   <li>');
	html.push('	   		<a href="#"><i class="fa fa-lg fa-fw fa-list"></i> <span class="menu-item-parent">SmartDirect Request</span></a>');
	html.push('	   		<ul>');
	html.push('	   			<li id="counseling_applications_list">');
	html.push('		   			<a href="counseling_applications_list.html" title="HotDeal"><i class="fa fa-lg fa-fw fa-external-link-square"></i> <span class="menu-item-parent">신규 상담신청</span></a>');
	html.push('	   			</li>');
	html.push('	   			<li id="used_car_management">');
	html.push('		   			<a href="used_car_management.html" title="HotDeal"><i class="fa fa-lg fa-fw fa-car"></i> <span class="menu-item-parent">중고차 상담신청</span></a>');
	html.push('    			</li>');
	html.push('	   		</ul>');
	html.push('	   </li>');

	html.push('	   <li>');
	html.push('	   		<a href="#"><i class="fa fa-lg fa-fw fa-group"></i> <span class="menu-item-parent">Manager Management</span></a>');
	html.push('	   		<ul>');
	html.push('	   			<li id="employee_management">');
	html.push('		   			<a href="employee_management.html" title="Employee Management"><i class="fa fa-lg fa-fw fa-user"></i> <span class="menu-item-parent">직원관리</span></a>');
	html.push('	   			</li>');
	html.push('	   			<li id="employee_organization">');
	html.push('		   			<a href="employee_organization.html" title="Employee Organization"><i class="fa fa-lg fa-fw fa-sitemap"></i> <span class="menu-item-parent">조직도관리</span></a>');
	html.push('	   			</li>');
	html.push('	   		</ul>');
	html.push('	   </li>');

	html.push('	   <li>');
	html.push('	   		<a href="#"><i class="fa fa-lg fa-fw fa-home"></i> <span class="menu-item-parent">Home Management</span></a>');
	html.push('	   		<ul>');
	html.push('	   			<li id="hot_deal_management">');
	html.push('					<a href="hot_deal_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-fire"></i> <span class="menu-item-parent">핫딜관리</span></a>');
	html.push('	   			</li>');
	html.push('	   			<li id="post_goods_management">');
	html.push('		   			<a href="post_goods_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-clipboard"></i> <span class="menu-item-parent">출고후기</span></a>');
	html.push('	   			</li>');
	html.push('	   			<li id="post_construction_management">');
	html.push('		   			<a href="post_construction_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-wrench"></i> <span class="menu-item-parent">시공후기</span></a>');
	html.push('	   			</li>');
	html.push('	   			<li id="vehicle_test_management">');
	html.push('					<a href="vehicle_test_management.html" title="HotDeal"><i class="fa fa-lg fa-fw fa-car"></i> <span class="menu-item-parent">시승기</span></a>');
	html.push('	   			</li>');
	html.push('	   			<li id="newcar_news_management">');
	html.push('					<a href="newcar_news_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-newspaper-o "></i> <span class="menu-item-parent">신차소식</span></a>');
	html.push('	   			</li>');
	html.push('	   		</ul>');
	html.push('	   	</li>');

	html.push('	   <li>');
	html.push('	   		<a href="#"><i class="fa fa-lg fa-fw fa-wrench"></i> <span class="menu-item-parent">Master Management</span></a>');
	html.push('	   		<ul>');
	html.push('	   			<li id="master_code_management">');
	html.push('					<a href="#" title="HotDeal"><i class="fa fa-lg fa-fw fa-wrench"></i> <span class="menu-item-parent">마스터 코드 관리(예정)</span></a>');
	html.push('	   			</li>');
	html.push('	   			<li id="car_management">');
	html.push('		   			<a href="car_management.html" title="HotDeal"><i class="fa fa-lg fa-fw  fa-car"></i> <span class="menu-item-parent">차량관리</span></a>');
	html.push('	   			</li>');
	html.push('	   		</ul>');
	html.push('	   	</li>');

	html.push('	   <li id="consultation_registration">');
	html.push('	       <a href="consultation_registration.html" title="HotDeal"><i class="fa fa-lg fa-fw fa-pencil-square-o"></i> <span class="menu-item-parent">상담 등록</span></a>');
	html.push('    </li>');
	html.push('</ul>');

	$("nav").html(html.join(""));
	$("#" + pageId).addClass("active");

}

var loadFooter = function(){

	var html = [];

	html.push('<div class="row">');
	html.push('    <div class="col-xs-12 col-sm-6">');
	html.push('        <span class="txt-color-white">SmartAdmin 1.5 <span class="hidden-xs"> - COPYRIGHT SMARTDIRECTCAR</span> © SINCE 2013</span>');
	html.push('	   </div>');
	html.push('</div>');

	$("div.page-footer").html(html.join(""));

}();

var pageTye = "full_numbers"; 
function drawPagination(listCnt){

	var html = [];
	var viewCnt = 20;
	var pageCnt = parseInt(listCnt % viewCnt) > 0 ? parseInt(listCnt / viewCnt) + 1 : parseInt(listCnt / viewCnt);

	html.push('	<div class="col-sm-6 col-xs-12 hidden-xs">');
	html.push('		<div class="dataTables_info" id="dt_basic_info" role="status" aria-live="polite">Showing ');
	html.push('			<span class="txt-color-darken">'+'1'+'</span> to ');
	html.push('    		<span class="txt-color-darken">'+viewCnt+'</span> of');
	html.push('			<span class="text-primary">'+listCnt+'</span> entries');
	html.push('		</div>');
	html.push('</div>');

	html.push('<div class="col-xs-12 col-sm-6">');
	html.push('		<div class="dataTables_paginate paging_full_numbers" id="dt_basic_paginate" listCnt='+listCnt+' viewCnt='+viewCnt+'>');
	html.push('			<ul class="pagination pagination-sm">');

	if(pageTye == "full_numbers"){
		html.push('				<li class="paginate_button first disabled" aria-controls="dt_basic" tabindex="0" id="dt_basic_first">');
		html.push('    				<a href="#">First</a>');
		html.push('				</li>');
	}
	html.push('				<li class="paginate_button previous disabled" aria-controls="dt_basic" tabindex="0" id="dt_basic_previous">');
	html.push('    				<a href="#">Previous</a>');
	html.push('				</li>');

	//html = html.concat(reorderPagination(pageCnt));

	html.push('				<li class="paginate_button next" aria-controls="dt_basic" tabindex="0" id="dt_basic_next">');
	html.push('	   				<a href="#">Next</a>');
	html.push('				</li>');

	if(pageTye == "full_numbers"){
		html.push('				<li class="paginate_button last" aria-controls="dt_basic" tabindex="0" id="dt_basic_last">');
		html.push('    				<a href="#">Last</a>');
		html.push('				</li>');
	}

	html.push('			</ul>');
	html.push('		</div>');
	html.push('	</div>');

	$(".dt-toolbar-footer").html(html.join(""));
	//$("#" + pageId).addClass("active");

	$('.paginate_button').click(function(){
		controlPagination(this);
		return false;
	});

	//alert($(".pagination").children("li").length);

}

function reorderPagination(pageCnt){
	var html = [];
	var active = "active";

	var stTabIdx = $(".pagination").children("li").length;
	var stLiIdx = pageTye == "full_numbers" ? 2 : 1;

	for (var i = stTabIdx; i < pageCnt; i++) {
		var tabindex = i+1;
		if(tabindex <= 6 || tabindex == pageCnt){
			html.push('				<li class="paginate_button '+active+'" aria-controls="dt_basic" tabindex="'+tabindex+'">');
			html.push('					<a href="#">'+tabindex+'</a>');
			html.push('				</li>');
		}else if(tabindex == pageCnt-1){
			html.push('				<li class="paginate_button disabled" aria-controls="datatable_col_reorder" tabindex="0">');
			html.push('					<a href="#">…</a>');
			html.push('				</li>');
		}
		active = "";
	}
	return html;



	var li = $(".pagination").children("li")
/*undefined
li[2]
<li class=​"paginate_button active" aria-controls=​"dt_basic" tabindex=​"1">​…​</li>​<a href=​"#">​1​</a>​</li>​
var test = li[2]
undefined
$(test).attr("tabindex",0)

*/

}

function controlPagination(obj){

	var selIdx = Number($(obj).children().text());
	var currentIdx = Number($(".paginate_button.active").children().text());
	var listCnt = Number($("#dt_basic_paginate").attr("listCnt"));
	var viewCnt = Number($("#dt_basic_paginate").attr("viewCnt"));
	var pageCnt = parseInt(listCnt % viewCnt) > 0 ? parseInt(listCnt / viewCnt) + 1 : parseInt(listCnt / viewCnt);

	if($(obj).hasClass("previous"))selIdx = currentIdx - 1;
	else if($(obj).hasClass("next"))selIdx = currentIdx + 1;

	if(selIdx <= 1){
		$("#dt_basic_first").addClass("disabled");
		$("#dt_basic_previous").addClass("disabled");
		$("#dt_basic_next").removeClass("disabled");
		$("#dt_basic_last").removeClass("disabled");
		selIdx = 1;
	}else if(selIdx >= pageCnt){
		$("#dt_basic_first").removeClass("disabled");
		$("#dt_basic_previous").removeClass("disabled");
		$("#dt_basic_next").addClass("disabled");
		$("#dt_basic_last").addClass("disabled");
		selIdx = pageCnt;
	}else{
		$("#dt_basic_first").removeClass("disabled");
		$("#dt_basic_previous").removeClass("disabled");
		$("#dt_basic_next").removeClass("disabled");
		$("#dt_basic_last").removeClass("disabled");
	}

	if(selIdx <= 4){

	}else if(selIdx >= pageCnt-4){

	}else{

	}

	$(".paginate_button.active").removeClass("active");
	$(obj).addClass('active');

	var stPageIdx = viewCnt*(selIdx-1);
	$("#dt_basic_info span").eq(0).text(stPageIdx+1);

	var enPageIdx = stPageIdx+viewCnt > listCnt ? listCnt : stPageIdx+viewCnt;
	$("#dt_basic_info span").eq(1).text(enPageIdx);







/*
	if(gubun == 'p'){

	}else if(gubun == 'n'){

	}else{

	}*/



	//searchList();
}