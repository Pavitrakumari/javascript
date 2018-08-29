var prompt = require('prompt-sync')();
var utility = require('/home/administrator/js/javascript/utility.js');


function array() {
    var row = prompt("enter no of rows");
    if (isNaN(row)) {
        console.log("plzz enter only numbers....");
    }
    else
     {
    utility.array(row);/**
    calls array function in utility */
     }
}
array();

