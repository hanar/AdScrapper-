QUnit.test("Getimages test", function(assert) {
    function allSrc() {
        var src = [];
        //select all the img elements in the page
        $('img').each(function() {
            var img = $(this).attr('src');
            src.push(img);
        });
        return src;
    }
    assert.equal(allSrc(), "http://xsltcache.alexa.com/site_stats/gif/t/b/aGVzcHJlc3MuY29t/s.gif", "le résultat de la fonction est correct");
});
