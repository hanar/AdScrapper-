var page = require('webpage').create(),
    system = require('system'),
    url;

if (system.args.length === 1) {
    console.log('Usage: uriExample.js <some URL>');
    phantom.exit();
}
url = system.args[1];
page.open(url);
page.onLoadFinished = function() {

    console.log("start");
    page.injectJs('../external_ressources/jquery/jquery-1.11.2.min.js');
    page.injectJs('../external_ressources/jquery/uri.js');
    console.log("before evaluate");
    
    urlParts = page.evaluate(function() {
        urlParts[];
        var uri = new URI(url);
        var protocol = uri.protocol();
        var hostname = uri.hostname();
        //var authority = uri.authority();
        var port = uri.port();
        //var query = uri.query();
        //var nose=uri.nose();
        urlParts.push(hostname);
        //urlParts.push(hostname);
        return uri;
    });
    console.log("after evaluate");
    //console.log(hostname);
    /*for (var i = urlParts.length - 1; i >= 0; i--) {
    	console.log(urlParts[i]);
    };*/

    /*var fs = require('fs');
    var path = 'urlParts.txt';
    sources = JSON.stringify(urlParts);
    fs.write(path, sources, 'w');*/
    console.log("end");
    phantom.exit();
};
