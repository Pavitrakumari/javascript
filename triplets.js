var prompt = require('prompt-sync')();
var utility = require('/home/administrator/js/javascript/utility');
function triplets() {
    var rows = prompt("enter no of rows");
    utility.triplets(rows);
}
triplets();