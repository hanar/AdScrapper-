function parseURL(url) {
    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;
    // Let the browser do the work
    parser.href = url;
    // Convert query string to object
    queries = parser.search.replace(/^(\w+:)?\/\//, '').split('&');
    for (i = 0; i < queries.length; i++) {
        split = queries[i].split('=');
        searchObject[split[0]] = split[1];
    }
    host=parser.hostname.substr(4);
    return host;
};
test('parseURL()', function() {
    equal(parseURL("https://www.hespress.com"), "hespress.com", "le résultat de la fonction est correct")

});
