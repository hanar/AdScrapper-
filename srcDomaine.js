//var editArea = document.getElementById('ta_OpenCmsHtml.LargeNews_1_.Teaser_1_.0___Frame').contentWindow.document.getElementById('xEditingArea');                        
//$(editArea).find('iframe:first').contents().find('html:first').find('body:first').html('some <b>new</b><br/> value');
//Get a reference to the webpage to create an instance
var page = require('webpage').create();
url = 'http://www.hespress.com/';
//Opens the url and load it to the page
page.open(url, function() {

    page.includeJs('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js', function() {
        //evaluationg the function in the context of webpage
        var images = page.evaluate(function()

            {
                var images = [];
                //select all the img elements in the page
                /*$('img').each(function() {
                    var img = $(this).attr('src');
                    var url = $(this).parent().attr('href');
                    images.push({
                        url: url,
                        img: img
                    });


                });*/

                $('iframe img').each(function() {
                    var img = $(this).attr('src');
                    var url = $(this).parent('a').attr('href');

                    images.push({
                        url: url,
                        img: img
                    });
                    //Selectionner non seulement les img qui sont à l'intérieur du a, c'est pour ça qu'on a enlevé 
                    //le a du selector et on l'a ajouté dans "parent('a')"
                    images.push(img);
                });

                return images;
            });

        var fs = require('fs');
        var path = 'sr2_new.txt';
        fs.write(path, images, 'w');

        console.log('first element:' + images[0]);
        hostname = page.evaluate(function() {
            return $(location).attr('hostname');
        });

        console.log('hostname:' + hostname);
        console.log("------------");
        console.log('Liens extenes:')
        images.forEach(function(index, hostname)

            {
                //Appeler la fonction isExtern

                console.log(isExtern(index, hostname));

            });

        function testExterne(url, hostname) {
            if (url.indexOf(hostname) == -1) {
                return url;
            } else {
                return null;
            }
        }

        /* function afficherTableau(tab){
         	tab.each(function(i){
         		console.log(tab[i]);
         	}
         		)
         }*/

        phantom.exit();
    });
});
