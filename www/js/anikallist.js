		$(document).on('pageshow', '#anikallist', function(){  
      //alert('anikal2');
      $('#anikalli').empty();
   /* $.mobile.changePage.defaults.reloadPage = true;*/
   
	/*	  mavattamArray = 	JSON.parse(sessionStorage.getItem("mavattamArray"));
        nagaramArray =     JSON.parse(sessionStorage.getItem("nagaramArray"));
        oneArray =     JSON.parse(sessionStorage.getItem("oneArray"));	
        paguthiArray =     JSON.parse(sessionStorage.getItem("paguthiArray"));*/

        anikalarray =     JSON.parse(sessionStorage.getItem("anikalarray")); 
        grouparray =     JSON.parse(sessionStorage.getItem("grouparray"));
         
       /*  var anikalarray=anikalarray;
        var grouparray=grouparray;*/

          // alert(anikalarray);
         //alert(grouparray);

      /*   alert(anikalArray);
         alert(groupArray);*/
      // alert(paguthiArray);
		//alert(categoryobj[0]);
		//alert(categoryobj[0].cat_name);

if(anikalarray !== null ){  
		for(a=0;a<anikalarray.length;a++){
			anikal_obj = anikalarray[a];
       //alert("con");
           //alert(mavattam_obj.mavattam_name);
            //alert(mavattam_obj.details);
           var anikal='<ul data-role="listview" data-inset="true" class="list"><li><a href="#" onclick="anikalcallnext('+a+')" class="ui-li-icon ui-btn ui-btn-icon- ui-icon-carat- listview manpad border"><img src="http://115.118.113.83/mk_web/images/'+anikal_obj.image+'" class="lef"><h2 class="head">'+anikal_obj.ani_name+'</h2><p class="head">'+anikal_obj.details+'</p></a></li></ul>'
			$('#anikalli').append(anikal);
            }

}
else if(grouparray !== null){
       for(a=0;a<grouparray.length;a++){
    group_obj = grouparray[a];
    //alert("con");
          // alert(group_obj.gro_name);
            //alert(mavattam_obj.details);
           var group='<ul data-role="listview" data-inset="true" class="list"><li><a href="#" onclick="groupcallnext('+a+')" class="ui-li-icon ui-btn ui-btn-icon- ui-icon-carat- listview manpad border"><img src="http://115.118.113.83/mk_web/images/'+group_obj.image+'" class="lef"><h2 class="head">'+group_obj.gro_name+'</h2><p class="head">'+group_obj.details+'</p></a></li></ul>'
      $('#anikalli').append(group);
            }
    }else{
  alert("no data");
}
  
        function refreshPage() {
  jQuery.mobile.pageContainer.pagecontainer('change', window.location.href, {
    allowSamePageTransition: true,
    transition: 'none',
    reloadPage: true 
    // 'reload' parameter not working yet: //github.com/jquery/jquery-mobile/issues/7406
  });
}

$(document).off('click', '#anikalpageback').on('click', '#anikalpageback', function() {
 
            sessionStorage.clear(); 
             refreshPage();
            $.mobile.changePage($('#anikalpage'), { transition: "slide", changeHash: true, reverse: false }); 
            return false;
        });

	});
     function anikalcallnext(index){
     // var anikalArray=anikalArray;
                    //alert('no' + index);
                    anikal_obj = anikalarray[index];
                    sessionStorage.setItem("anikalcurrentobj",JSON.stringify(anikal_obj));
                    //$.mobile.changePage("details.html", {transition: "none", changeHash: true, reverse: false });
                    $.mobile.changePage($('#anikallistperson'), { transition: "slide", changeHash: true, reverse: false });
                    return false;

        }
        function groupcallnext(index){
                    //alert('no' + index);
                    group_obj = grouparray[index];
                    sessionStorage.setItem("groupcurrentobj",JSON.stringify(group_obj));
                    //$.mobile.changePage("details.html", {transition: "none", changeHash: true, reverse: false });
                    $.mobile.changePage($('#anikallistperson'), { transition: "slide", changeHash: true, reverse: false });
                    return false;

        }
         /*     function onecallnext(index){
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

        }*/

