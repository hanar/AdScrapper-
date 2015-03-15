function testExterneURL(url, hostname) {
    host=hostname.substr(4);
    if (url.indexOf(host) != -1) {
        return url;
    };
};

result = testExterneURL("http://www.hespress.com/tendances/257778.html", "www.hespress.com");
test('allSrc()', function() {
    equal(result, "http://www.hespress.com/tendances/257778.html", "le résultat de la fonction est correct")

});
