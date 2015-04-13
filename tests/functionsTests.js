/*//Test de la fonction adwalk_getDomainName()
test('adwalk_getDomainName()', function() {
    result = adwalk_getDomainName('www.hespress.com');
    equal(result, 'hespress.com')

    result = adwalk_getDomainName('hespress.com');
    equal(result, 'hespress.com')

    result = adwalk_getDomainName('c1.ywcdn.com');
    equal(result, 'ywcdn.com')
    
    result = adwalk_getDomainName('c1.ywcdn.com');
    notEqual(result, 'c1.ywcdn.com')
    
    result = adwalk_getDomainName('s1.hespress.com');
    notEqual(result, 's1.hespress.com')
    
    result = adwalk_getDomainName('avito.ma');
    equal(result, 'avito.ma')

    result = adwalk_getDomainName('www.avito.ma');
    equal(result, 'avito.ma')
});


//Test de la fonction adwalk_isExternalURL()
test('adwalk_isExternalURL()', function() {
    result = adwalk_isExternalURL("http://www.hespress.com/tendances/257778.html", ["hespress.com", "t1.hespress.com", 'alexa.com']);
    equal(result, false)

    result = adwalk_isExternalURL("http://www.hespresseee.com/tendances/257778.html", "www.hespress.com");
    equal(result, true)

    result = adwalk_isExternalURL("http://www.ywaaw.com/image.jpg", "www.ywaaw.com");
    equal(result, false)

    result = adwalk_isExternalURL("http://c1.ywcdn.com/image.jpg", ["ywaaw.com", 'ywcdn.com']);
    notEqual(result, true)
		
});

//Test de adwalk_getSrc
test('adwalk_getSrc()', function() {
    result= adwalk_getSrc();
    equal(result)
});*/
//Test de adwalk_page

//Test adwalk_isArray

test('adwalk_isArray()', function() {
    result= adwalk_isArray(['ab','cd','ef']);
    equal(result,true);

    result= adwalk_isArray('abcde');
    equal(result,false);

    result= adwalk_isArray('[{"key1":"value1"},{"key2":"value2"}]');
    equal(result,false);
});

