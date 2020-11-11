(function($){
	$(document).ready(function() {  
   
   
   
   
   
   
   
   
   
   
   
   
   
	
		//   all Module Scroll Bar Customization
        
			$(".customBar").niceScroll({cursorcolor:"#04a1a1",cursoropacitymax:0.8,autohidemode:false,cursorwidth:"7px"});
        
		
		// DataTable Searching
	
		// $( '#partyTable' ).searchable(); example of dataTable Search Activation....
		
			$( '#searchBar' ).searchable({
				searchField: '#customSearch'
			});
   
   
   
   
   
	});
})(jQuery);
