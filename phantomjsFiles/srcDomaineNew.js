//var editArea = document.getElementById('ta_OpenCmsHtml.LargeNews_1_.Teaser_1_.0___Frame').contentWindow.document.getElementById('xEditingArea');                        
//$(editArea).find('iframe:first').contents().find('html:first').find('body:first').html('some <b>new</b><br/> value');

var page = require('webpage').create();
url = 'https://www.hespress.com';
page.open(url);
page.onLoadFinished = function() {


    page.includeJs('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', function() {


        images = page.evaluate(function() {
            images = [];
            //Fonction qui permet de tester l'url
            function testExterneURL(url, host_name) {
                    host = host_name.substr(4);
                    if (url.indexOf(host) == -1) {
                        return url;
                    };
                }
                //Récupérer le nom du domaine
            hostname = $(location).attr('hostname');
            console.log(hostname);

            $('iframe').each(function() {
                $(this).contents().find('a img').each(function() {

                    var img = $(this).attr('src');
                    var url = $(this).parent('a').attr('href');
                    //Tester l'appartenance de l'url
                    if (testExterneURL(url, hostname) && testExterneURL(img, hostname)) {
                        images.push({
                            img: img,
                            url: url
                        });
                    }
                });
            });

            $('a > img').each(function() {
                var url = $(this).parent('a').attr('href');
                var img = $(this).attr("src");
                if (testExterneURL(img, hostname)) {
                    images.push({
                        img: img,
                        url: url
                    });
                }
            });
            return images;
        });
        //Sauvegarder résultat dans fichier
        var fs = require('fs');
        var path = 'ifrimgsa1_4.txt';
        images_str = JSON.stringify(images);
        fs.write(path, images_str, 'w');

        console.log("ok");
        phantom.exit();
    });
};
