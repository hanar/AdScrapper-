/*
Fonction qui parse une url et retourne le hostname
N'est pas utilisé pour le moment
*/
function adwalk_parseURL(url) {
    var parser = document.createElement('a');
    parser.href = url;
    // parser.hostname; // => "example.com"
    return parser.hostname;
};

function adwalk_getHostname() {
    return $(location).attr('hostname');
    
}
/*Fonction 'adwalk_getHostname' retourne le hostname de la page courante
N'est pas utilisé pour le moment
 */

function adwalk_getHostnames(hostnames) {
    //return $(location).attr('hostname');
    //On enleve le premier élément du tableau, vu que le tableau passé 
    //en param est selon le format: urlDeLaPage,hostname1,hostname2..
    return hostnames.splice(0, 1);
}

/* Fonction'adwalk_testExterneURL'
Teste si une URL ne correspond pas au nom du domaine courant
Param : url--> String; hostname --> String
*/
function adwalk_isExternalURL(url, hostnames) {
        var parser = document.createElement('a');
        parser.href = url;
        host = adwalk_getDomainName(parser.hostname);
        console.log(hostnames);
        if ($.isArray(hostnames)) {
            $.each(hostnames, function(index, value) {
                console.log(host + '--' + value);
                if (host != adwalk_getDomainName(value)) {
                    return true;
                }
            });
            return false;
        } else {

            console.log("not an array  " + host + '---' + adwalk_getDomainName(hostnames));
            if (host == adwalk_getDomainName(hostnames)) {
                return false;
            } else {
                return true;
            }
        }
    }
    /*Fonction 'adwalk_getSrc'
    Récupère le src d'un tag 'img' et de son parent 'a'.
    Test si le src est conforme au hostname ou pas.
    Param : img --> String: tag img; hostname -->String
    Retourne un objet JSON
    */
function adwalk_getSrc(img, hostnames) {
        hostnames = adwalk_getHostnames(hostnames);
        console.log(hostnames);
        var url = img.parent('a').attr('href');
        var src = img.attr('src');
        if (adwalk_isExternalURL(src, hostnames)) {
            return ({
                "src": src,
                "url": url
            });
        } else return false;
    }
    /*Fonction adwalk_getDomainName 
    Retourne le domain à partir du hostname
    Param : hostname--> String
    Retour: sndleveldomain --> String*/
function adwalk_getDomainName(hostname) {
    var parts = hostname.split('.');
    if (parts.length == 3) {
        sndleveldomain = parts.slice(1).join('.');
        return sndleveldomain;
    } else if (parts.length <= 3) {
        sndleveldomain = parts.slice(0).join('.');
        return sndleveldomain;
    }
}

function adwalk_page(hostnames) {
    images = [];

    //Récupérer les hostnames avec lesquels on comparera le src de l'image
    hostnames = adwalk_getHostnames(hostnames);
    console.log('hostnames:' + hostnames);
    $('iframe').each(function() {
        console.log($(this).contents().find('a img').length);
        $(this).contents().find('a img').each(function() {
            //Appel de la fonction getSrc
            result = adwalk_getSrc($(this), hostnames);
            if (result)
                images.push(result);

        });
    });

    $('a img').each(function() {
        result = adwalk_getSrc($(this), hostnames);
        if (result) images.push(result);
    });

    return images;
}
