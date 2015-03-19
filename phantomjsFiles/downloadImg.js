//Fonction qui ouvre une page
function executeGetURL(url,i) {
    var page = require('webpage').create();
    page.open(url);
    console.log("begin fct");
    console.log("begin fct");

    page.onLoadFinished = function() {
        page.render("img" + i + ".png");
        console.log("ok");

    };

}

//Récupérer fichier qui contient la liste des sites
var fs = require('fs');
system = require('system');
content = '',
    f = null,
    lines = null,
    eol = system.os.name == 'windows' ? "\r\n" : "\n";
try {
    //Ouvrir le fichier
    f = fs.open('imgs.txt', "r");
    // f = fs.read('addresses.txt');
    content = f.read();
} catch (e) {

    console.log(e);
}

if (f) {
    f.close();
}

if (content) {
    lines = content.split(eol);
    links = [];
    for (var i = 0, len = lines.length; i < len; i++) {
        console.log("start")
        executeGetURL(lines[i],i);
        console.log(lines[i] + 'is Opened');


    }
}
setTimeout(function() {
    phantom.exit();
}, 90000);
