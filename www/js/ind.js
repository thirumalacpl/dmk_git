$(document).on('pagecreate', '#pageone', function(){
/*  $.mobile.changePage($('#pagetwo'), { transition: "slide", changeHash: true, reverse: false }); */
            

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


     $(document).off('click', '#paget').on('click', '#paget', function() { 
      	$.mobile.changePage($('#pagetwo'), { transition: "slide", changeHash: true, reverse: false });
      	return false;

      });

        $(document).off('click', '#mavattam').on('click', '#mavattam', function() { 
      	$.mobile.changePage($('#pagetwo'), { transition: "slide", changeHash: true, reverse: false });
      	return false;

      });

           $(document).off('click', '#anikalbut').on('click', '#anikalbut', function() { 
      	$.mobile.changePage($('#anikalpage'), { transition: "slide", changeHash: true, reverse: false });
      	return false;

      });

              $(document).off('click', '#programbutpage').on('click', '#programbutpage', function() { 
      	$.mobile.changePage($('#programpage'), { transition: "slide", changeHash: true, reverse: false });
      	return false;

      });



});