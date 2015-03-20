<?php
/*
fontion qui permet de télécharger un fichier, 
prend en param l'url du fichier et l'emplacement où on voudrait le sauvegarder dur le disque
*/
function download_remote_file($file_url, $save_to) {
	$content = file_get_contents($file_url);
	file_put_contents($save_to, $content);
}

$dir   = 'C:/AdScrapper/results';
$files = scandir($dir);
//foreach($files as $file){
	//doit recevoir en param le fichier qui contient les src et href__pour chaque site
	$data = file_get_contents($dir.'/'.$files[2]); 
	$result = json_decode($data);
	
	$i=0;
	echo $dir.'\n';
	foreach($result as $image){
		//Ici le nom du fichier récupéré doit s'enregistrer selon le nom du siteweb
	    download_remote_file($image->src,$dir.'/'.$files[2].$i.'.jpg'); //write value by index
	    echo 'done'.$i;
	    $i=$i+1;
	}
//}
?>


