<?php
//fonction qui prend une source en param( fichier ou autre) et retourne son contenu sous forme de tableau
function getContent(){

}
//fonction qui télécharge les fichiers(images) 
function download_remote_file($file_url, $save_to) {
	$content = file_get_contents($file_url);
	file_put_contents($save_to, $content);
}

?>
