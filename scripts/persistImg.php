<?php
//Inclure le fichier de redbean
	require('C:\AdScrapper\external_ressources\redbean\rb.php');
//Etablir la connection avec la bd
//R::setup('sqlite:adcollector.txt'); //sqlite
 R::setup('mysql:host=localhost;dbname=adcollector','root','');
//Création du bean
$image=  R::dispense('image');
//Ajout les propriétés
$image->page = 'www.hespress.com';
$image->img = 'http://pagead2.googlesyndicatiocmdn.com/simgad/3233846468259808913,http://xsltcache.alexa.com/site_stats/gif/t/b/aGVzcHJlc3MuY29t/s.gif';
$image->href = 'http://googleads.g.doubleclick.net/aclk?sa=l&ai=CaK3ITpAJVYaHD4ucigbFhYDACo2ey6sG5fi-y7ABsLXN31AQASD_mMUfYPnj74TwL6ABs_eE_APIAQKpAk-wmnLZKqo-4AIAqAMByAOZBKoElgFP0EHGr';
$image->path = 'C:\AdScrapper\phantomjsFiles';

//Stockage le bean
$id = R::store($image);
R::close();
?>