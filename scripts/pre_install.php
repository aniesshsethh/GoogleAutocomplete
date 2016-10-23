<?php
function pre_install(){
	$detailviewdefs = 'modules/Contacts/metadata/editviewdefs.php';
	if(!file_exists('custom/'.$detailviewdefs)){
		mkdir(dirname('custom/'.$detailviewdefs), 0777, true);
		copy($detailviewdefs,'custom/'.$detailviewdefs);
	}
	$include_js = PHP_EOL.'<?php $viewdefs["Contacts"]["EditView"]["templateMeta"]["includes"][]["file"] = "custom/modules/Contacts/js/contact_lead_autocomplete.js"; ?>';
	$fw = fopen('custom/'.$detailviewdefs,"a");
	fwrite($fw,$include_js);
	fclose($fw);


	$detailviewdefs = 'modules/Leads/metadata/editviewdefs.php';
	if(!file_exists('custom/'.$detailviewdefs)){
		mkdir(dirname('custom/'.$detailviewdefs), 0777, true);
		copy($detailviewdefs,'custom/'.$detailviewdefs);
	}
	$include_js = PHP_EOL.'<?php $viewdefs["Leads"]["EditView"]["templateMeta"]["includes"][]["file"] = "custom/modules/Leads/js/contact_lead_autocomplete.js"; ?>';
	$fw = fopen('custom/'.$detailviewdefs,"a");
	fwrite($fw,$include_js);
	fclose($fw);


	$detailviewdefs = 'modules/Accounts/metadata/editviewdefs.php';
	if(!file_exists('custom/'.$detailviewdefs)){
		mkdir(dirname('custom/'.$detailviewdefs), 0777, true);
		copy($detailviewdefs,'custom/'.$detailviewdefs);
	}
	$include_js = PHP_EOL.'<?php $viewdefs["Accounts"]["EditView"]["templateMeta"]["includes"][]["file"] = "custom/modules/Accounts/js/account_autocomplete.js"; ?>';
	$fw = fopen('custom/'.$detailviewdefs,"a");
	fwrite($fw,$include_js);
	fclose($fw);
}
?>