<?php
$urls = file('addresses.txt');

foreach ($urls as $url) {
	$output = shell_exec('phantomjs getSrcs.js '. $url);
	echo 'Done!';
}
?>