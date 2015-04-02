var page = require('webpage').create(),
    system = require('system'),
    url;

if (system.args.length === 1) {
    console.log('Usage: getImgUrl.js <some URL>');
    phantom.exit();
}
urls = system.args[1];
//myUrls est un tableau qui contiendera le contenu de chaque ligne du ficher 'addresses.txt'
var myUrls = urls.split(',');
page.open(myUrls[0]);
page.onLoadFinished = function() {

    page.injectJs('../external_ressources/jquery/jquery-1.11.2.min.js');

    //Inclusion du fichier des fonctions
    page.injectJs('../utils/functions.js');
    console.log($('img').length);
    images = page.evaluate(function() {
        adwalk_page(myUrls);
    });
    host=myUrls[0];

    //Sauvegarder résultat dans fichier
    var fs = require('fs');
    var date = new Date();
    time = date.getFullYear() + '_' + date.getDate() + '_' + date.getMonth() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds();
    var path = '../results/' + host + '_' + time + '.txt';
    sources = JSON.stringify(images);
    fs.write(path, sources, 'w');

    phantom.exit();

};
