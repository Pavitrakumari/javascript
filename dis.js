var readLine = require('readline');
var utility = require('/home/administrator/js/javascript/utility.js');

var read = readLine.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function ptwe() {
    read.question("enter the value of 'x' : ", function (x) {
        read.question("enter the value of 'y' : ", function (y) {
            

                utility.ptwe(x,y);
                read.close();
            });

        });
    

}
ptwe();