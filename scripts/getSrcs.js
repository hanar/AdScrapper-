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

console.log('Openning page ' + myUrls[1]);
page.open(myUrls[0]);

page.onConsoleMessage = function(msg) {
    console.log("Page log:" + msg);
};

page.onLoadFinished = function() {

    page.injectJs('../external_ressources/jquery/jquery-1.11.2.min.js');


    //Inclusion du fichier des fonctions
    console.log('Before evaluate');

    page.injectJs('../utils/functions.js');

    images = page.evaluate(function(s) {
        console.log('In evaluate');
        //TODO : test if s is array--Done
        adwalk_isArray(s);
      
        console.log(adwalk_isArray(s));
        
        return adwalk_page(s);
       

    }, myUrls);

    host = myUrls[0];

    //Sauvegarder résultat dans fichier
    var fs = require('fs');
    var date = new Date();
    time = date.getFullYear() + '_' + date.getDate() + '_' + date.getMonth() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds();
    var path = '../results/' + host + '_' + time + '.txt';
    sources = JSON.stringify(images);
    fs.write(path, sources, 'w');

    phantom.exit();

};
