QUnit.test("testURL", function(assert) {
 		
			/*function getLocation(link) {
			 
			    return link.hostname;
			};*/
            function testExterneURL(url, hostname) {
                if (url.indexOf(hostname) == -1) {
                    return url;
            	};
            };
            	result = testExterneURL("http://www.hespress.com/tendances/257778.html", "www.hespress.com");
                assert.equal(result,"undefined ", "le résultat de la fonction est correct");
 });
