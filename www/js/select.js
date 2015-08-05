$(document).one('pageshow', '#pagetwo', function(){  
	
	$(document).off('click', '#select').on('click', '#select', function() { 
		var district_val=document.getElementById('district_val').value;
		//alert(district_val);
		$.ajax({url: 'http://staging.eimpressive.com/slimrestapi-dmk/select.php?district_val='+district_val,
			data:$('#check-district').serialize(),
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


				sessionStorage.setItem("mavattamArray",JSON.stringify(result[0]));
				sessionStorage.setItem("nagaramArray",JSON.stringify(result[1]));
				sessionStorage.setItem("oneArray",JSON.stringify(result[2]));
				sessionStorage.setItem("paguthiArray",JSON.stringify(result[3]));

		/*			for(a=0;a<mavattamArray.length;a++){            
			mavattam_obj = mavattamArray[a];
           	alert(mavattam_obj.mavattam_name);
          	alert(mavattam_obj.details);
            }*/

/*					if(result[0]){
					var list="";
					for(a=0;a<result[1].length;a++){
						obj = result[1][a];
						//alert(obj);
						var partstr = "'"+obj.part_id+"'";
						//alert(partstr);
						list+='<li><a href="#" class="list" onclick="searchlpa('+partstr+')" >'+result[1][a].part_id+'</li>';
					}
					$('#part_ui_list').css({'display':''});
					$('#h3_up').css({'display':''});
					$('#part_ui_list').html(list).listview("refresh");
					$.mobile.loading().hide();
				}else {
					$('#h3_up').css({'display':'none'});
					$('#part_ui_list').css({'display':'none'});
					$('#part_ui_list').html('').listview("refresh");
					$( "#popupsearch" ).popup("open");
				}*/

				//alert(result[2] + "data from db");
				//$.mobile.loading().hide();

				$.mobile.changePage($('#pagethree'), { transition: "slide", changeHash: true, reverse: false });
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