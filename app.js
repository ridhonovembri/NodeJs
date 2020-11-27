const http = require('http');
var blog = require('./controllers/Blogs');

http.createServer(function (req, res, next){
    
    switch(req.method) {
        case "GET":
            if (req.url === "/"){
                res.write('helloworld');
            }
            else if (req.url === "/blogs"){
                blog.getList(req, res);
            }
            
            break;
        case "POST":
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            break;
    }

    
}).listen(9000, function(){
    console.log("started listeing at:9000");
})
