// JavaScript Document
	$(document).on('pageshow', '#pagefour', function(){  
		$('#img').empty();
	//alert('four');
		assignValues();

function assignValues(){
			mavattam_obja = JSON.parse(sessionStorage.getItem("mavattamcurrentobj"));
			nagaram_obja = JSON.parse(sessionStorage.getItem("nagaramcurrentobj"));
			one_obja = JSON.parse(sessionStorage.getItem("onecurrentobj"));
			paguthi_obja = JSON.parse(sessionStorage.getItem("paguthicurrentobj"));

			anikal_obja = JSON.parse(sessionStorage.getItem("anikalcurrentobj"));
			//var pri=user_obja.cat_name;
		  /*var mav = mavattam_obja;
			var nag = nagaram_obja;*/
			//alert(mav + 'mavattamcurrentobj');
			//alert(nag + 'nagaramcurrentobj');

if(mavattam_obja !== null ){
			//alert(mavattam_obja.details);
			//alert(mavattam_obja.details);

			//alert(nagaram_obja.nagaram_name);
			//alert(nagaram_obja.person_name);

		$('#name').text(mavattam_obja.details);
		$('#headingt').text(mavattam_obja.mav_tamil);
		$('#namep').text(mavattam_obja.mav_name);
		$('#mobno').html(mavattam_obja.number);
		$('#designation').text(mavattam_obja.designation);
		$('#desc').text(mavattam_obja.desc);
		$('#img').append('<img src="http://115.118.113.83/mk_web/images/' + mavattam_obj.image +'" class="lef">')
        //$('#desc').text(mavattam_obja.person_name);
}
else if(nagaram_obja !== null ){

	alert(nagaram_obja.nag_name);
	alert(nagaram_obja.details);

		//$('#name').text(nagaram_obja.nagaram_name);
        //$('#desc').text(nagaram_obja.person_name);
        $('#name').text(nagaram_obja.details);
		$('#headingt').text(nagaram_obja.nag_tamil);
		$('#namep').text(nagaram_obja.nag_name);
		$('#mobno').html(nagaram_obja.number);
		$('#designation').text(nagaram_obja.designation);
		$('#desc').text(nagaram_obja.desc);
		$('#img').append('<img src="http://115.118.113.83/mk_web/images/' + nagaram_obja.image +'" class="lef">')

}
else if(one_obja !== null ){
		alert(one_obja.nag_name);
	alert(one_obja.details);

		//$('#name').text(one_obja.one_name);
        //$('#desc').text(one_obja.person_name);
        $('#name').text(one_obja.details);
		$('#headingt').text(one_obja.nag_tamil);
		$('#namep').text(one_obja.nag_name);
		$('#mobno').html(one_obja.number);
		$('#designation').text(one_obja.designation);
		$('#desc').text(one_obja.desc);
		$('#img').append('<img src="http://115.118.113.83/mk_web/images/' + one_obja.image +'" class="lef">')

}
else if(paguthi_obja !== null){

		alert(paguthi_obja.pagu_name);
	alert(paguthi_obja.details);

		//$('#name').text(paguthi_obja.paguthi_name);
        //$('#desc').text(paguthi_obja.person_name);
        $('#name').text(paguthi_obja.details);
		$('#headingt').text(paguthi_obja.nag_tamil);
		$('#namep').text(paguthi_obja.nag_name);
		$('#mobno').html(paguthi_obja.number);
		$('#designation').text(paguthi_obja.designation);
		$('#desc').text(paguthi_obja.desc);
		$('#img').append('<img src="http://115.118.113.83/mk_web/images/' + paguthi_obja.image +'" class="lef">')


}else{
	alert("no data");
}
/*else if(anikal_obja !== null){

		alert(anikal_obja.pagu_name);
	alert(anikal_obja.details);

		//$('#name').text(paguthi_obja.paguthi_name);
        //$('#desc').text(paguthi_obja.person_name);
        $('#name').text(anikal_obja.details);
		$('#headingt').text(anikal_obja.anikal_tamil);
		$('#namep').text(anikal_obja.ani_name);
		$('#mobno').html(anikal_obja.number);
		$('#designation').text(anikal_obja.designation);
		$('#desc').text(anikal_obja.desc);
		$('#img').append('<img src="http://115.118.113.83/mk_web/images/' + anikal_obja.image +'" class="lef">')


}*/
     

      $(document).off('click', '#backtwo').on('click', '#backtwo', function() { 
      	$.mobile.changePage($('#pagethree'), { transition: "slide", changeHash: true, reverse: false });


      });


		}


		});

		
	

