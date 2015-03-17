<?php
$data = file_get_contents("imgs.txt"); //read the file
$convert = explode("\r", $data); //create array separate by new line

for ($i=0;$i<count($convert);$i++)  
{
	echo $convert[$i];
	//var_dump($convert[$i]);
    download_remote_file(trim($convert[$i]),'image'.$i.'.jpg'); //write value by index
}

	function download_remote_file($file_url, $save_to)
	{
		$content = file_get_contents($file_url);
		file_put_contents($save_to, $content);
	}
?>


