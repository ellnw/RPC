var rpc = require('json-rpc2');
var server = rpc.Server.$create();


function add(args, opt, callback) {
    console.log('Program add 0-9');
    var i;
    var sum = 0;
    var arr = [];
    var odd = 0;
    var even = 0;
    var sum_odd = 0;
    var sum_even = 0;
    for(i = 0; i < args.length; i++){
        sum += args[i];

        if(args[i] % 2 == 0){
            even++;
            sum_even += args[i];  
        }
        else {
            odd++;
            sum_odd += args[i];
        }
    }
    arr.push(sum);
    arr.push(even);
    arr.push(odd);
    arr.push(sum_even);
    arr.push(sum_odd);
    console.log('sum = ' + sum);
    callback(null, arr);
    
}

server.expose('add', add);
server.listen(8000, 'localhost');