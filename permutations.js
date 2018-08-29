
var readLine = require('readline');
var utility = require('/home/administrator/js/javascript/utility.js');
var read = readLine.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
function permutation() {
    read.question("enter a string : ",(string)=> {
        var starray=string.split('');/**
         * split  a string into characters
         */
        utility.permute(starray,0,starray.length-1);/**
        call method in utility */
        read.close();
    }
    );
}
permutation();