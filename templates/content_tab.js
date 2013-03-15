function contentTab(idChart){
	var html='<div style="float:left" class="thumbnail">'+
		'<ul id="myTab" class="nav nav-tabs">'+
            '<li class="active"><a href="#home" data-toggle="tab">Home</a></li>	'+
              '<li class="dropdown">'+
                '<a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-cog"></i> Options<b class="caret"></b></a>'+
                '<ul class="dropdown-menu">'+
                  '<li><a href="#dropdown1" data-toggle="tab">Soon</a></li>'+
                '</ul>'+
              '</li>'+
            '</ul>'+
            '<div id="myTabContent" class="tab-content">'+
            '<div id="'+idChart+'" class="tab-pane fade active in" id="home">'+               
            '</div>'+
               '<div class="tab-pane fade" id="dropdown1">'+
                '<p>Etsy mixtape wayfarers</p>'+
              '</div>'+           
			'</div>'+
		'</div>';
	return html;
}
