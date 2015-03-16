src = [];
function allSrc() {
    $('iframe').each(function() {
        $(this).contents().find('a img').each(function() {
            // var url = $(this).parent('a').attr('href');
            var img = $(this).attr('src');
            src.push(img);
        });
    });
    return src;
};

test('allSrc()', function() {
    equal(allSrc(), "http://pagead2.googlesyndication.com/simgad/1584364628406286000", "le résultat de la fonction est correct")

});


