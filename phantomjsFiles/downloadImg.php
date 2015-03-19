<?php

function download_remote_file($file_url, $save_to) {
	$content = file_get_contents($file_url);
	file_put_contents($save_to, $content);
}
$data = file_get_contents('img_urls1.txt'); //read the file
$result = json_decode($data);
$i=0;
foreach($result as $image){
	
    download_remote_file($image->img,'hespress'.$i.'.jpg'); //write value by index
    $i=$i+1;
}

?>


