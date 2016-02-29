/**
 * Created by godsong on 16-1-25.
 */
var Fs = require('fs');
var re_searcher=/(\/\/@\w+ *(?:\(([^\n\r]*)\))? *\n)+(?=\s*(?:var|let|const|function\s*\*\s*)?\s*([$a-zA-Z_][\w$.]*)\s*[:=])/g;
var file=Fs.readFileSync('./in.js');
var m;
while(m=re_searcher.exec(file.toString())){
    console.log(m);
}