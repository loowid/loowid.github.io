var fs   = require('fs');
var md   = require("markdown");
var path = require('path')

var args = [];

process.argv.forEach(function (val, index, array) {
  if( index > 1 ){ 
    if( val.indexOf('=') != -1 ){
      var indice = val.split('=');
      args[ indice[0] ] = indice[1];
    }else{
      args[index] = val;
    }
  }
});

if( typeof args.path !== 'undefined' && args.path ){

	var output = 'docs.html';
	if( typeof args.o !== 'undefined' && args.o ){
		output = args.o;
	}	

	var headHtml = fs.readFileSync( '_header.html'   , 'utf8');
	var footHtml = fs.readFileSync( '_footer.html'   , 'utf8');
	var preFile  = fs.readFileSync( '_prefile.html'  , 'utf8');
	var postFile = fs.readFileSync( '_postfile.html' , 'utf8');

	var files = fs.readdirSync( args.path );
	var html  = headHtml;
	for (var i in files) {
	  	if( path.extname( files[i] ) == '.md' && files[i].charAt(0) != '_' ){
	  		var text = fs.readFileSync( args.path + '/' + files[i] ,'utf8');
	  		html = html + preFile + md.markdown.toHTML(text) + postFile;
	  	}
	}
	html  = html + footHtml;
	fs.writeFileSync( output , html );

}else{
	console.error('Please, tell me where files are with path=/path/to/files and the output with o=filename.html');
}


