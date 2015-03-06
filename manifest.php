<?PHP
/*****************************************************************************
 * The contents of this file are subject to the RECIPROCAL PUBLIC LICENSE
 * Version 1.1 ("License"); You may not use this file except in compliance
 * with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/rpl.php. Software distributed under the
 * License is distributed on an "AS IS" basis, WITHOUT WARRANTY OF ANY KIND,
 * either express or implied.
 *
 * You may NOT:
 * a) Charge for the use of the original code or extensions, including in
 *    electronic distribution models, such as ASP (Application Service
 *    Provider).
 * b) Charge for the original source code or your extensions other than a
 *    nominal fee to cover distribution costs where such distribution
 *    involves PHYSICAL media.
 * c) Modify or delete any pre-existing copyright notices, change notices,
 *    or License text in the Licensed Software
 * d) Assert any patent claims against the Licensor or Contributors, or
 *    which would in any way restrict the ability of any third party to use the
 *    Licensed Software.
 *
 * The Original Code was written by : Aniessh Sethh
 *                      			  2014-07-15  
 *                                    aniessh@aniesshsethh.com
 *
 ********************************************************************************/
$manifest = array(

	'acceptable_sugar_versions' => array (
		'regex_matches' => array (
			0 => "6.*.*",
		),
	),
	'acceptable_sugar_flavors' => array (
		0 => 'OS',
		1 => 'PRO',
		2 => 'ENT',
		3 => 'CE'
	),
	'name' 				=> 'Google Autocomplete',
	'description' 		=> 'Quick Google Autocomplete address fill',
	'author' 			=> 'Aniessh Sethh',
	'published_date'	=> '2006/07/14',
	'version' 			=> '1.0',
	'type' 				=> 'module',
	'is_uninstallable' => true,
);

$installdefs = array(
	'id'=> 'GoogleAutocomplete',
	'copy' => array(
		0 => 
		array ('from' => '<basepath>/include/scripts/contact_lead_autocomplete.js',
				'to' => 'custom/modules/Contacts/js/contact_lead_autocomplete.js',
		),
		1 => 
		array ('from' => '<basepath>/include/scripts/account_autocomplete.js',
				'to' => 'custom/modules/Accounts/js/account_autocomplete.js',
		),
		2 => 
		array ('from' => '<basepath>/include/scripts/contact_lead_autocomplete.js',
				'to' => 'custom/modules/Leads/js/contact_lead_autocomplete.js',
		),
	),

	'language'=> array(
	
	),

	'menu'=> array(
	
	)

);
?>