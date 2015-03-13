src = [];

function allSrc() {
    $('iframe').each(function() {
       $(this).contents().find('a img').each(function() {
            // var url = $(this).parent('a').attr('href');
            var img = $(this).attr('src');
            src.push({
                img: img,
                //url: url
            });
        });
    });
    return src;
};

test('allSrc()', function() {
    equal(allSrc(), "j", "le résultat de la fonction est correct")

});
