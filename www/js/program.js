$(document).on('pageshow', '#programpage', function(){  
	//alert("pro");

	
	 programArray = JSON.parse(sessionStorage.getItem("programArray"));

		for(a=0;a<programArray.length;a++){
			program_obj = programArray[a];
           //alert(program_obj.place);
            //alert(program_obj.time);
            $('#placee').text(program_obj.place);
		$('#date').html(program_obj.date);
		$('#time').html(program_obj.time);
           
            }
        

});