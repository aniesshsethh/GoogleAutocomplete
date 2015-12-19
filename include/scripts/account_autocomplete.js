$.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&callback=initialize");
function initialize() {	
	// billing street
	jQuery('#billing_address_street').before('<input type="text" id="b_address_street"></input><br>');
  var input = (document.getElementById('b_address_street'));
	var options = {
			  types: ['establishment']
		};
	var billing_autocomplete = new google.maps.places.Autocomplete(input);
	google.maps.event.addListener(billing_autocomplete, 'place_changed', function() {		
		 var place = billing_autocomplete.getPlace();
     jQuery("#b_address_street").val("");
		 jQuery("#billing_address_city").val("");
		 jQuery("#billing_address_state").val("");
		 jQuery("#billing_address_country").val("");
		 jQuery("#billing_address_postalcode").val("");
		 
		 var street_name = "";
		 street_name = place.name
		 $.each(place.address_components,function(key,element){			
			 if(jQuery.inArray("street_number", element.types) !== -1){
				 street_name += " ,"+element.long_name;
			 }
			 if(jQuery.inArray("route", element.types) !== -1){
				 street_name += " ,"+element.long_name;
			 }
			 if(jQuery.inArray("neighborhood", element.types) !== -1){
				 street_name += " ,"+element.long_name;
			 }
			 if(jQuery.inArray("administrative_area_level_2", element.types) !== -1 || jQuery.inArray("locality", element.types) !== -1){			
					 jQuery("#billing_address_city").val(element.long_name);
			 }
			 if(jQuery.inArray("administrative_area_level_1", element.types) !== -1){
				 jQuery("#billing_address_state").val(element.long_name);
			 }
			 if(jQuery.inArray("country", element.types) !== -1){
				 jQuery("#billing_address_country").val(element.long_name);
			 }
			 if(jQuery.inArray("postal_code", element.types) !== -1){
					jQuery("#billing_address_postalcode").val(element.long_name);
			 }		
			 			 
			 if(jQuery.inArray("country", element.types) !== -1){
			 	jQuery('#billing_address_country').val(element.short_name)
			 }
			 
		 });
		   window.setTimeout(function() {
			   jQuery("#billing_address_street").val(street_name);
	           jQuery("#billing_address_country").focus();
	        }, 200);
	});
	//shipping address
	jQuery('#shipping_address_street').before('<input type="text" id="s_address_street"></input><br>');
  var input = (document.getElementById('s_address_street'));
	var options = {
	  types: ['establishment']
	};
  var shipping_autocomplete = new google.maps.places.Autocomplete(input);
	google.maps.event.addListener(shipping_autocomplete, 'place_changed', function() {		
		 var place = shipping_autocomplete.getPlace();
     jQuery('#s_address_street').val("");
		 jQuery("#shipping_address_city").val("");
		 jQuery("#shipping_address_state").val("");
		 jQuery("#shipping_address_country").val("");
		 jQuery("#shipping_address_postalcode").val("");
		 
		 var street_name = "";
		 street_name = place.name
		 $.each(place.address_components,function(key,element){			
			 if(jQuery.inArray("street_number", element.types) !== -1){
				 street_name += " ,"+element.long_name;
			 }
			 if(jQuery.inArray("route", element.types) !== -1){
				 street_name += " ,"+element.long_name;
			 }
			 if(jQuery.inArray("neighborhood", element.types) !== -1){
				 street_name += " ,"+element.long_name;
			 }
			 if(jQuery.inArray("administrative_area_level_2", element.types) !== -1 || jQuery.inArray("locality", element.types) !== -1){			
					 jQuery("#shipping_address_city").val(element.long_name);
			 }
			 if(jQuery.inArray("administrative_area_level_1", element.types) !== -1){
				 jQuery("#shipping_address_state").val(element.long_name);
			 }
			 if(jQuery.inArray("country", element.types) !== -1){
				 jQuery("#shipping_address_country").val(element.long_name);
			 }
			 if(jQuery.inArray("postal_code", element.types) !== -1){
					jQuery("#shipping_address_postalcode").val(element.long_name);
			 }		
		 });
		   window.setTimeout(function() {
			   jQuery("#shipping_address_street").val(street_name);
	           jQuery("#shipping_address_country").focus();
	        }, 200);
	});

}
