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
echo $dir.'/images_avito/';
var_dump($files);
//foreach($files as $file){
	//doit recevoir en param le fichier qui contient les src et href__pour chaque site
	//if (is_array($decoded)){
	//for ($i = 2; $i < 4; $i++) {
			$data = file_get_contents($files[3]); 
			var_dump($files);
			$decoded = json_decode($data);
			var_dump($decoded);
			if (is_array($decoded)){
			foreach($decoded as $image){

					//Ici le nom du fichier récupéré doit s'enregistrer selon le nom du siteweb
					//$path='C:/AdScrapper/images_selected/images_avito/'.$files[$i];
					//var_dump($path);
				   // download_remote_file($image->src.'.jpg'); 
				    //echo 'done'.$i;
				   // $i=$i+1;
				}
    		}
		//}
	}
?>