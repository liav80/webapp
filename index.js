/**
 * Created by зп on 01/06/2016.
 */
var http = require('http');
var server = http.createServer(function(req, res){
    res.writHead(200, {'Content-Type': 'text/plain'});
    switch  (req.url){
        case '/':
            res.write('<h1>hi<h1>');
            break;
        case '/bye':
            res.write('bye');
            break;
        default:

    }
    res.end();
});
