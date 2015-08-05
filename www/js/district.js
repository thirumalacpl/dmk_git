		$(document).on('pageshow', '#pagethree', function(){  

   /* $.mobile.changePage.defaults.reloadPage = true;*/
   $('#pag').empty();
		mavattamArray = 	JSON.parse(sessionStorage.getItem("mavattamArray"));
        nagaramArray =     JSON.parse(sessionStorage.getItem("nagaramArray"));
        oneArray =     JSON.parse(sessionStorage.getItem("oneArray"));	
        paguthiArray =     JSON.parse(sessionStorage.getItem("paguthiArray"));

      /*  alert(mavattamArray);
          alert(nagaramArray);
            alert(oneArray);
            alert(paguthiArray);
*/
           
/*         anikalArray =     JSON.parse(sessionStorage.getItem("anikalarray")); 
        groupArray =     JSON.parse(sessionStorage.getItem("grouparray"));*/

      // alert(paguthiArray);
		//alert(categoryobj[0]);
		//alert(categoryobj[0].cat_name);

		for(a=0;a<mavattamArray.length;a++){
			mavattam_obj = mavattamArray[a];
           //alert(mavattam_obj.mavattam_name);
            //alert(mavattam_obj.details);
           var mavattam='<ul data-role="listview" data-inset="true" class="list"><li><a href="#" onclick="mavattamcallnext('+a+')" class="ui-li-icon ui-btn ui-btn-icon- ui-icon-carat- listview manpad border"><img src="http://115.118.113.83/mk_web/images/'+mavattam_obj.image+'" class="lef"><h2 class="head">'+mavattam_obj.mav_name+'</h2><p class="head">'+mavattam_obj.details+'</p></a></li></ul>'
			$('#pag').append(mavattam);
            }
		
                $(document).off('click', '#mavattam').on('click', '#mavattam', function() { 
            $('#pag').empty();
       for(a=0;a<mavattamArray.length;a++){
                mavattam_obj = mavattamArray[a];
           //alert(mavattam_obj.mavattam_name);
            //alert(mavattam_obj.person_name);
           var mavattam='<ul data-role="listview" data-inset="true" class="list"><li><a href="#" onclick="mavattamcallnext('+a+')" class="ui-li-icon ui-btn ui-btn-icon- ui-icon-carat- listview manpad border"><img src="http://115.118.113.83/mk_web/images/'+mavattam_obj.image+'" class="lef"><h2 class="head">'+mavattam_obj.mav_name+'</h2><p class="head">'+mavattam_obj.details+'</p></a></li></ul>'
            $('#pag').append(mavattam);
            }
});

        $(document).off('click', '#nagaram').on('click', '#nagaram', function() { 
            $('#pag').empty();
        for(a=0;a<nagaramArray.length;a++){
            nagaram_obj = nagaramArray[a];
           //alert(nagaram_obj.nag_name);
           // alert(nagaram_obj.details);
           var nagaram='<ul data-role="listview" data-inset="true" class="list"><li><a href="#" onclick="nagaramcallnext('+a+')" class="ui-li-icon ui-btn ui-btn-icon- ui-icon-carat- listview manpad border"><img src="http://115.118.113.83/mk_web/images/'+nagaram_obj.image+'" class="lef"><h2 class="head">'+nagaram_obj.nag_name+'</h2><p class="head">'+nagaram_obj.details+'</p></a></li></ul>'
            $('#pag').append(nagaram);
            }
});
        $(document).off('click', '#one').on('click', '#one', function() { 
            $('#pag').empty();
        for(a=0;a<oneArray.length;a++){
                one_obj = oneArray[a];
          // alert(one_obj.one_name);
            //alert(one_obj.person_name);
           var one='<ul data-role="listview" data-inset="true" class="list"><li><a href="#" onclick="onecallnext('+a+')" class="ui-li-icon ui-btn ui-btn-icon- ui-icon-carat- listview manpad border"><img src="http://115.118.113.83/mk_web/images/'+one_obj.image+'" class="lef"><h2 class="head">'+one_obj.o_name+'</h2><p class="head">'+one_obj.details+'</p></a></li></ul>'
            $('#pag').append(one);
            }
});

        $(document).off('click', '#paguthi').on('click', '#paguthi', function() { 
           $('#pag').empty();
        for(a=0;a<paguthiArray.length;a++){
                paguthi_obj = paguthiArray[a];
          // alert(paguthi_obj.paguthi_name);
            //alert(paguthi_obj.person_name);
           var paguthi='<ul data-role="listview" data-inset="true" class="list"><li><a href="#" onclick="paguthicallnext('+a+')" class="ui-li-icon ui-btn ui-btn-icon- ui-icon-carat- listview manpad border"><img src="http://115.118.113.83/mk_web/images/'+paguthi_obj.image+'" class="lef"><h2 class="head">'+paguthi_obj.pagu_name+'</h2><p class="head">'+paguthi_obj.details+'</p></a></li></ul>'
            $('#pag').append(paguthi);
            }

});

			
		//$('#emplyee_name_two').text(cat_obj.cat_id);
		//$('#name').text(mavattam_obj.mavattam_name);
       // $('#desc').text(mavattam_obj.person_name);
       function refreshPage() {
  jQuery.mobile.pageContainer.pagecontainer('change', window.location.href, {
    allowSamePageTransition: true,
    transition: 'none',
    reloadPage: true 
    // 'reload' parameter not working yet: //github.com/jquery/jquery-mobile/issues/7406
  });
}

$(document).off('click', '#bacses').on('click', '#bacses', function() {
 
            sessionStorage.clear(); 
             refreshPage();
            $.mobile.changePage($('#pagetwo'), { transition: "slide", changeHash: true, reverse: false }); 
            return false;
        });


});


     function mavattamcallnext(index){
                    //alert('no' + index);
                    mavattam_obj = mavattamArray[index];
                    sessionStorage.setItem("mavattamcurrentobj",JSON.stringify(mavattam_obj));
                    //$.mobile.changePage("details.html", {transition: "none", changeHash: true, reverse: false });
                    $.mobile.changePage($('#pagefour'), { transition: "slide", changeHash: true, reverse: false });
                    return false;

        }
         function nagaramcallnext(index){
                    //alert('no' + index);
                    nagaram_obj = nagaramArray[index];
                    sessionStorage.setItem("nagaramcurrentobj",JSON.stringify(nagaram_obj));
                    //$.mobile.changePage("details.html", {transition: "none", changeHash: true, reverse: false });
                    $.mobile.changePage($('#pagefour'), { transition: "slide", changeHash: true, reverse: false });
                    return false;

        }
             function onecallnext(index){
                    //alert('no' + index);
                    one_obj = oneArray[index];
                    sessionStorage.setItem("onecurrentobj",JSON.stringify(one_obj));
                    //$.mobile.changePage("details.html", {transition: "none", changeHash: true, reverse: false });
                    $.mobile.changePage($('#pagefour'), { transition: "slide", changeHash: true, reverse: false });
                    return false;

        }
             function paguthicallnext(index){
                    //alert('no' + index);
                    paguthi_obj = paguthiArray[index];
                    sessionStorage.setItem("paguthicurrentobj",JSON.stringify(paguthi_obj));
                    //$.mobile.changePage("details.html", {transition: "none", changeHash: true, reverse: false });
                    $.mobile.changePage($('#pagefour'), { transition: "slide", changeHash: true, reverse: false });
                    return false;

        }

