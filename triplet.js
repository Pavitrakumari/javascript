var readLine = require('readline');
var utility = require('./utility/utility.js');
var read = readLine.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function pthir() {
    read.question("enter the length of array : ", function (size) {
    
                utility.pthir(size);
                read.close();

            
            
        });

    


}
pthir();