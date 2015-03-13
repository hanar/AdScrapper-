QUnit.test("Getimages test", function(assert) {
    src = [];

    function allSrc() {
        //select all the img elements in the page
        $('iframe img').each(function() {
            var url = $(this).parent('a').attr('href');
            var img = $(this).attr('src');
            src.push({
                img: img,
                url: url
            });
        });
        return src;
    }
    assert.equal(allSrc(), src, "le résultat de la fonction est correct");
});
