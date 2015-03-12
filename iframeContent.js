//var editArea = document.getElementById('ta_OpenCmsHtml.LargeNews_1_.Teaser_1_.0___Frame').contentWindow.document.getElementById('xEditingArea');                        
//$(editArea).find('iframe:first').contents().find('html:first').find('body:first').html('some <b>new</b><br/> value');

var page = require('webpage').create();
url='https://hespress.com';
page.open(url, function() {	


			page.includeJs('//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',function() {
					var iframes = page.evaluate(function() {
				var iframes=[];
		
			//	return document.getElementsByTagName('iframe')[i].contentWindow.document.body.innerHTML;
				$('img').each(
					function()
					{
					var src=$(this).attr("src");
						iframes.push('src: '+src+"\n");
					});
			
					
					$('iframe').each(
					function()
					{
						var ifr = $(this).contents().find('a').attr("href");
						var im = $(this).contents().find('img').attr("src");
						iframes.push('ifr: '+ifr+"\n"+'im: '+im+"\n");
					});
					return iframes;
					});

hostname = page.evaluate(function() {

 /*reg=new RegExp("(hespress)", "g");
if (reg.test(host))                return host;*/
return $(location).attr('hostname');
				
      });

  
  console.log(hostname);
					//console.log("ifrm"+iframes);
					iframes.forEach(function(index){
					
					if(index.indexOf(hostname)!=-1) { 
						var fs = require('fs');
					   var path = 'ifrmg.txt';
					   fs.write(path, index, 'w');
					   }
       			 });
					/*console.log("ok2");
					var fs = require('fs');
					var path = 'ifrr.txt';
					fs.write(path, iframes, 'w');	*/
					phantom.exit();
			});	
		});
		//'some <b>new</b><br/> value'