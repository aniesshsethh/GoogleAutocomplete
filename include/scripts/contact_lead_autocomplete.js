$.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places&callback=initialize");
function initialize() {	
	// primary address
  jQuery('#primary_address_street').before('<input type="text" id="p_address_street"></input><br>');
  var input = (document.getElementById('p_address_street'));
	var options = {
			  types: ['establishment']
			};
	var autocomplete_billing = new google.maps.places.Autocomplete(input);
	google.maps.event.addListener(autocomplete_billing, 'place_changed', function() {		
		 var place = autocomplete_billing.getPlace();
     jQuery('#p_address_street').val("");
     jQuery("#primary_address_street").val("");
		 jQuery("#primary_address_city").val("");
		 jQuery("#primary_address_state").val("");
		 jQuery("#primary_address_postalcode").val("");
		 jQuery("#primary_address_country").val("");

		 var street_name = "";
		 street_name = place.name
		 $.each(place.address_components,function(key,element){			
			 if(jQuery.inArray("administrative_area_level_2", element.types) !== -1 || jQuery.inArray("locality", element.types) !== -1){			
					 jQuery("#primary_address_city").val(element.long_name);
			 }
			 if(jQuery.inArray("administrative_area_level_1", element.types) !== -1){
				 jQuery("#primary_address_state").val(element.long_name);
			 }
			 if(jQuery.inArray("country", element.types) !== -1){
				 jQuery("#primary_address_country").val(element.long_name);
			 }
			 if(jQuery.inArray("postal_code", element.types) !== -1){
					jQuery("#primary_address_postalcode").val(element.long_name);
			 }		
		 });
		   window.setTimeout(function() {
			   jQuery("#primary_address_street").val(street_name);
	           jQuery("#primary_address_country").focus();
	        }, 20);
	});
	
	// alternate address
  jQuery('#alt_address_street').before('<input type="text" id="a_address_street"></input><br>');
	var input = (document.getElementById('a_address_street'));
	var options = {
			  types: ['establishment']
			};
	var autocomplete_alternate = new google.maps.places.Autocomplete(input);
	google.maps.event.addListener(autocomplete_alternate, 'place_changed', function() {		
		 var place = autocomplete_alternate.getPlace();
     jQuery('#a_address_street').val("");
		 jQuery("#alt_address_street").val("");
		 jQuery("#alt_address_city").val("");
		 jQuery("#alt_address_state").val("");
		 jQuery("#alt_address_postalcode").val("");
		 jQuery("#alt_address_country").val("");

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
					 jQuery("#alt_address_city").val(element.long_name);
			 }
			 if(jQuery.inArray("administrative_area_level_1", element.types) !== -1){
				 jQuery("#alt_address_state").val(element.long_name);
			 }
			 if(jQuery.inArray("country", element.types) !== -1){
				 jQuery("#alt_address_country").val(element.long_name);
			 }
			 if(jQuery.inArray("postal_code", element.types) !== -1){
					jQuery("#alt_address_postalcode").val(element.long_name);
			 }		
		 });
		   window.setTimeout(function() {
			   jQuery("#alt_address_street").val(street_name);
	           jQuery("#alt_address_country").focus();
	        }, 20);
	});



}
