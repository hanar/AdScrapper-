<?php
$data = file_get_contents('addresses.txt');
$urls= explode("", $data);
	foreach ($urls as $url) {
	$output = shell_exec('phantomjs srcDomaineNew.js '. $url);
	}
?>