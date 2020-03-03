
var rpc = require('json-rpc2');
var client = rpc.Client.$create(8000,'localhost');

var number = [0,1,2,3,4,5,6,7,8,9];

client.call('add', number,
    function(err, result) {
        console.log('sum = ' + result[0]);
        console.log('Total Even Number = ' + result[1]);
        console.log('Total Odd Number = ' + result[2]);
        console.log('Sum of Even Number = ' + result[3]);
        console.log('Sum of Odd Number = ' + result[4]);
    }
);



  
