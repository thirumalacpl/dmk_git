// JavaScript Document
	$(document).on('pageshow', '#anikallistperson', function(){  
		$('#imganikal').empty();
	//alert('anikallistperson3');
		assignValues();

function assignValues(){
		/*	mavattam_obja = JSON.parse(sessionStorage.getItem("mavattamcurrentobj"));
			nagaram_obja = JSON.parse(sessionStorage.getItem("nagaramcurrentobj"));
			one_obja = JSON.parse(sessionStorage.getItem("onecurrentobj"));
			paguthi_obja = JSON.parse(sessionStorage.getItem("paguthicurrentobj"));
*/			
			group_obja = JSON.parse(sessionStorage.getItem("groupcurrentobj"));
			anikal_obja = JSON.parse(sessionStorage.getItem("anikalcurrentobj"));
			//var pri=user_obja.cat_name;
			var group_obja = group_obja;
			var anikal_obja = anikal_obja;
			//alert(mav + 'mavattamcurrentobj');
			//alert(nag + 'nagaramcurrentobj');

if(group_obja !== null ){

	//alert(group_obja.gro_name);
	//alert(group_obja.details);

		$('#nameanikal').text(group_obja.details);
		$('#headingtanikal').text(group_obja.group_tamil);
		$('#namepanikal').text(group_obja.gro_name);
		$('#mobnoanikal').html(group_obja.number);
		$('#designationanikal').text(group_obja.designation);
		$('#descanikal').text(group_obja.desc);
		$('#imganikal').append('<img src="http://115.118.113.83/mk_web/images/' + group_obja.image +'" class="lef">')
        //$('#desc').text(mavattam_obja.person_name);
}
else if(anikal_obja !== null){

		//alert(anikal_obja.ani_name);
	//alert(anikal_obja.details);

		//$('#name').text(paguthi_obja.paguthi_name);
        //$('#desc').text(paguthi_obja.person_name);

        $('#nameanikal').text(anikal_obja.details);
		$('#headingtanikal').text(anikal_obja.anikal_tamil);
		$('#namepanikal').text(anikal_obja.ani_name);
		$('#mobnoanikal').html(anikal_obja.number);
		$('#designationanikal').text(anikal_obja.designation);
		$('#descanikal').text(anikal_obja.desc);
		$('#imganikal').append('<img src="http://115.118.113.83/mk_web/images/' + anikal_obja.image +'" class="lef">')

}
else{
	alert("no data");
}
/**/
     

      $(document).off('click', '#anikalback').on('click', '#anikalback', function() { 
      	$.mobile.changePage($('#anikallist'), { transition: "slide", changeHash: true, reverse: false });


      });


		}


		});

		
	

