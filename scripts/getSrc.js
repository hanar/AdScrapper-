var page = require('webpage').create(),
    system = require('system'),
    url;

if (system.args.length === 1) {
    console.log('Usage: getImgUrl.js <some URL>');
    phantom.exit();
}
url = system.args[1];
page.open(url);
page.onLoadFinished = function() {

    page.injectJs('../external_ressources/jquery/jquery-1.11.2.min.js');

    //Inclusion du fichier des fontions
    page.injectJs('../utils/functions.js');
    images = page.evaluate(function() {
        images = [];

        //Récupérer le hostname
        hostname = adwalk_getHostname();

        $('iframe').each(function() {
            $(this).contents().find('a img').each(function() {

                result = adwalk_getSrc($(this), hostname);
                images.push(result);

            });
        });

        $('a > img').each(function() {
            result = adwalk_getSrc($(this), hostname);
            images.push(result);
        });

        return images;
    });
    host = page.evaluate(function() {
        return adwalk_getHostname();
    });
    console.log(host);
    //Sauvegarder résultat dans fichier
    var fs = require('fs');
    var date = new Date();
    time = date.getFullYear() + '_' + date.getDate() + '_' + date.getMonth() + '_' + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds();
    var path = 'C:/AdScrapper/results/' + host + '_' + time + '.txt';
    sources = JSON.stringify(images);
    fs.write(path, sources, 'w');
    console.log("ok");
    phantom.exit();

};
