<?php 

$url = 'http://www.alexa.com/data/details/main?url=http://hespress.com';

print_r(parse_url($url));

echo parse_url($url, PHP_URL_PATH);
?> 