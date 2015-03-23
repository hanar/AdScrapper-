
test('adwalk_isExternalURL()', function() {
	result = adwalk_isExternalURL("http://www.hespress.com/tendances/257778.html", ["www.hespress.com" ,"s1.hespress.com" , "s2.hespress.com" ,'www.alexa.com']);
    equal(result, false, "le résultat de la fonction est correct")
    
    result = adwalk_isExternalURL("http://www.hespresseee.com/tendances/257778.html", ".hespress.com");
    equal(result, true, "le résultat de la fonction est correct")

    result = adwalk_isExternalURL("http://www.ywaaw.com/image.jpg", "www.ywaaw.com");
    equal(result, false, "le résultat de la fonction est correct")

    result = adwalk_isExternalURL("http://c1.ywcdn.com/image.jpg", [".ywaaw.com" , '.ywcdn.com'] );
    equal(result, false, "le résultat de la fonction est correct")
    
});
