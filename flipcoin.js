
var readLine=require('readline');
//var utility=require('./utility/utility.js');
var utility = require('/home/administrator/js/javascript/utility.js');
var read=readLine.createInterface(
  {
      input:process.stdin,
      output:process.stdout 
  }
);
function pfour()
{
    read.question("enter how many times to flip coin",function(userinput)
      {
        if(isNaN(userinput))
        {
          console.log("Plzz enter a numeric value....");
        }
        else
        {
        utility.pfour(userinput);
        read.close();
        }
      }
    );
}
pfour();