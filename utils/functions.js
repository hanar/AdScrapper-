/*Fonction 'adwalk_getHostname' qui prend une URL en param et
retourne le nom de domaine
Param: url --> String
*/

function adwalk_getHostname() {
    return $(location).attr('hostname').substr(4);
}

//Fonctions: 
/* fonction'adwalk_testExterneURL'
Teste si une URL ne correspond pas au nom du domaine courant
Param : url--> String; hostname --> String
*/
function adwalk_testExterneURL(url, hostname) {
        //  host = hostname.substr(4);
        if (url.indexOf(hostname) == -1) {
            return url;
        };
    }
    /*Fonction 'adwalk_getSrc'
    Récupère le src d'un tag 'img' et de son parent 'a'.
    Test si le src est conforme au hostname ou pas.
    Param : img --> String: tag img; hostname -->String
    Retourne un objet JSON
    */
function adwalk_getSrc(img, hostname) {
    var url = img.parent('a').attr('href');
    var src = img.attr('src');
    if (adwalk_testExterneURL(src, hostname)) {
        return ({
            "src": src,
            "url": url
        });
    }
}

