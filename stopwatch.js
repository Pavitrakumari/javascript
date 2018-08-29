var readLine = require('readline');
var utility = require('/home/administrator/js/javascript/utility');


var read = readLine.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function stop2() {
    read.question("enter start time : ", function (start) {
        var num1 = start;
        if (num1 == 1) {
            var start = new Date().getTime();/**
             * getTime() function gives the current system time 
             */
        }
        read.question("enter end time : ", function (end) {
            var num2 = end;
            if (num2 == 0) {
                var end = new Date().getTime();
            }
            var elapsed = end-start;
            console.log("the elapsed time is : " + elapsed+" milliseconds");
            read.close();
        });
    });
}
stop2();