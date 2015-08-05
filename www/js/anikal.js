$(document).one('pageshow', '#anikalpage', function(){  
	//alert("anikalpage");

	           	$.ajax({url: 'http://staging.eimpressive.com/slimrestapi-dmk/program.php',
            data:$('#check-user').serialize(),
            type: 'post',                   
            async: 'true',
            crossDomain: true,
            dataType: 'json',
            beforeSend: function() {
$('body').addClass('ui-loading');
},
complete: function() {
},
success: function (result) {
    console.log(result);
    if(result[0]){
        //sessionStorage.setItem("logged_in","1");
        //sessionStorage.setItem("user_data",JSON.stringify(result[1]));
        //sessionStorage.setItem("plant_data",JSON.stringify(result[2]));
        sessionStorage.setItem("programArray",JSON.stringify(result[0]));  //result array
    
        //alert(sessionStorage.getItem("resultArray[1][2]"));

        //sessionStorage.setItem("activity_data",JSON.stringify(result[4]));
        $.mobile.loading().hide();
      
    }else {
        $.mobile.loading().hide();
        alert("username or password entered is invalid");	
    }
    return false;
},
error: function (request,error) {
    console.log(error);
    console.log(request);              
alert('Network error has occurred please try again!');
}
});  
	
	$(document).off('click', '#anikalsubmit').on('click', '#anikalsubmit', function() { 
		var anikal_val=document.getElementById('anikal_val').value;
		//alert(district_val);
		$.ajax({url: 'http://staging.eimpressive.com/slimrestapi-dmk/anikal.php?anikal_val='+anikal_val,
			data:$('#anikal-form').serialize(),
		type: 'post',                   
		async: 'true',
		crossDomain: true,
		dataType: 'json',
		beforeSend: function() {
		},
		complete: function() {
		},
		success: function (result) {
			console.log('searchlist' +result);
			if(result[0]){
				/*$("#popupsearchmade").popup("open");*/


				sessionStorage.setItem("anikalarray",JSON.stringify(result[0]));
				/*sessionStorage.setItem("nagaramArray",JSON.stringify(result[1]));
				sessionStorage.setItem("oneArray",JSON.stringify(result[2]));
				sessionStorage.setItem("paguthiArray",JSON.stringify(result[3]));*/


				$.mobile.changePage($('#anikallist'), { transition: "slide", changeHash: true, reverse: false });
			}else {
				alert('No Data Found for the search record');	
			}

			return false;
		},
		error: function (request,error) {    
			console.log(request);
			console.log(error);  
			$("#Network").popup("open");         
			alert('Network error has occurred please try again!');
		}
	});
});

	$(document).off('click', '#groupsubmit').on('click', '#groupsubmit', function() { 
		var group_val=document.getElementById('group_val').value;
		//alert(district_val);
		$.ajax({url: 'http://staging.eimpressive.com/slimrestapi-dmk/group.php?group_val='+group_val,
			data:$('#group-form').serialize(),
		type: 'post',                   
		async: 'true',
		crossDomain: true,
		dataType: 'json',
		beforeSend: function() {
		},
		complete: function() {
		},
		success: function (result) {
			console.log('searchlist' +result);
			if(result[0]){
				/*$("#popupsearchmade").popup("open");*/


				sessionStorage.setItem("grouparray",JSON.stringify(result[0]));
				/*sessionStorage.setItem("nagaramArray",JSON.stringify(result[1]));
				sessionStorage.setItem("oneArray",JSON.stringify(result[2]));
				sessionStorage.setItem("paguthiArray",JSON.stringify(result[3]));*/

				//alert();
				$.mobile.changePage($('#anikallist'), { transition: "slide", changeHash: true, reverse: false });
			}else {
				alert('No Data Found for the search record');	
			}

			return false;
		},
		error: function (request,error) {    
			console.log(request);
			console.log(error);  
			$("#Network").popup("open");         
			alert('Network error has occurred please try again!');
		}
	});
});

});