QUnit.test("GetimagesIframes test", function(assert) {
    function getImgsIframes() {
        var src;
        //select all the img elements in the page
        src = $("# iframe1").contents().find('img').attr('src');
        }
        return src;
    }
    assert.equal(getImgsIframes(), "http://pagead2.googlesyndication.com/simgad/1584364628406286000", "le résultat de la fonction est correct");
});
